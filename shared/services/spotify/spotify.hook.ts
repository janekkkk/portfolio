import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { spotifyService } from '@/shared/services/spotify/spotify.service';
import { CurrentlyPlayingSpotify } from '@/shared/services/spotify/currently-playing-spotify.model';

const spotifyAtom = atom<CurrentlyPlayingSpotify>({
    is_playing: false,
    item: {
        name: 'Not playing',
        artists: [{ name: 'Spotify' }],
    },
} as unknown as CurrentlyPlayingSpotify);

export const useSpotify = (): { spotify: CurrentlyPlayingSpotify } => {
    const [spotify, setSpotify] = useAtom(spotifyAtom);

    useEffect(() => {
        spotifyService.fetchNowPlaying().then(setSpotify);
    }, []);

    return { spotify } as const;
};
