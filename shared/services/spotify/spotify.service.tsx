import axios from 'axios';
import { CurrentlyPlayingSpotify, RefreshTokenResponse } from '@/shared/services/spotify/spotify.model';

class SpotifyService {
    private readonly CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    private readonly CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
    private readonly REFRESH_TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

    private readonly NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
    private readonly TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

    private async fetchAccessToken(): Promise<RefreshTokenResponse> {
        return axios
            .post(this.TOKEN_ENDPOINT, null, {
                params: {
                    client_id: this.CLIENT_ID,
                    client_secret: this.CLIENT_SECRET,
                    grant_type: 'refresh_token',
                    refresh_token: this.REFRESH_TOKEN,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                auth: {
                    username: this.CLIENT_ID,
                    password: this.CLIENT_SECRET,
                },
            })
            .then((response) => {
                return response.data;
            });
    }

    public async fetchNowPlaying(): Promise<CurrentlyPlayingSpotify> {
        try {
            const response = await this.fetchAccessToken();

            return axios
                .get(this.NOW_PLAYING_ENDPOINT, {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    return response.data;
                });
        } catch {
            // Ignore error.
        }
    }
}

export const spotifyService = new SpotifyService();
