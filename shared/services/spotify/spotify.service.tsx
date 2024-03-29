import React from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { CurrentlyPlayingSpotify } from '@/shared/services/spotify/currently-playing-spotify.model';

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

// TODO move to environment file and generate new tokens.
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '13bd4106d0974c38b7c9263dccf7841d';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '61257a7c736b4dec8c6fa15c695d3ce5';
const REFRESH_TOKEN =
    process.env.REFRESH_TOKEN ||
    'AQAiRr1Thu4iYnJt0IayIsd7xITt5W0qPy5vy7eTZ-_YhrNhVRQa48ti_Gn_LpTU1O2DGCCgqMqHimO06jJMkTuk2ZusHyE1sZiOAw3Un5Jk14-VO8IXPIF98G4oc9SG1uA';

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

class SpotifyService {
    private static async fetchAccessToken(): Promise<string> {
        return axios
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
    }

    public static async fetchNowPlaying(): Promise<CurrentlyPlayingSpotify> {
        const accessToken = await SpotifyService.fetchAccessToken();
        try {
            return axios
                .get(NOW_PLAYING_ENDPOINT, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => response.data);
        } catch (e) {
            // ToDo handle error
        }
    }
}

export const spotifyService = SpotifyService;
