import React, { ReactElement, createContext, useContext, Context } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { CurrentlyPlayingSpotify } from '@/shared/services/spotify/currently-playing-spotify.model';

const SpotifyContext = createContext(null);
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '13bd4106d0974c38b7c9263dccf7841d';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '61257a7c736b4dec8c6fa15c695d3ce5';
const REFRESH_TOKEN =
    'AQAiRr1Thu4iYnJt0IayIsd7xITt5W0qPy5vy7eTZ-_YhrNhVRQa48ti_Gn_LpTU1O2DGCCgqMqHimO06jJMkTuk2ZusHyE1sZiOAw3Un5Jk14-VO8IXPIF98G4oc9SG1uA';
const CODE =
    'AQDFx5Ky0QlMILUdkJ0TkNuPEWtWoG1e35Xo4GfZXWZUlqA6cF-BDGBlH8jWa9LSAenNN0WRZTckA6kuhzoTc25dWyh1SU0ZYYKuygTHlMuz-2E_pYqviVmNb_nzOoKEe4OTXyBcWNvGc10nPf3-fotV0BCHDdaajhyCki2zRNqKEsQxbwDzKIdsiZCF078sZwEpjsNB9_bvCss';
const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

const fetchAccessToken = async (): Promise<string> => {
    return await axios
        .post(TOKEN_ENDPOINT, null, {
            params: {
                grant_type: 'refresh_token',
                refresh_token: REFRESH_TOKEN,
            },
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then((response) => response.data.access_token);
};

const fetchNowPlaying = async (): Promise<CurrentlyPlayingSpotify> => {
    const accessToken = await fetchAccessToken();

    return axios
        .get(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.data);
};

export const SpotifyProvider = (props): ReactElement => {
    const value = {
        fetchNowPlaying: props.fetchNowPlaying || fetchNowPlaying,
        fetchAccessToken: props.fetchAccessToken || fetchAccessToken,
    };

    return <SpotifyContext.Provider value={value}>{props.children}</SpotifyContext.Provider>;
};

export const useSpotifyService = (): Context<unknown> => {
    return useContext(SpotifyContext);
};
