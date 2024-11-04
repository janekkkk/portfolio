import axios from 'axios';
import { Buffer } from 'buffer';
import { CurrentlyPlayingSpotify } from '@/shared/services/spotify/spotify.model';

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

class SpotifyService {
    private async fetchAccessToken(): Promise<string> {
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

    public async fetchNowPlaying(): Promise<CurrentlyPlayingSpotify> {
        try {
            const accessToken = await this.fetchAccessToken();

            return axios
                .get(NOW_PLAYING_ENDPOINT, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => response.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error({ error });
            // ToDo handle error
        }
    }
}

export const spotifyService = new SpotifyService();
