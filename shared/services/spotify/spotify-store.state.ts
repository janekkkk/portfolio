import { spotifyService } from '@/shared/services/spotify/spotify.service';
import { CurrentlyPlayingSpotify } from '@/shared/services/spotify/spotify.model';
import { useMount } from 'react-use';
import { create } from 'zustand';

interface SpotifyStore {
    currentlyPlaying: CurrentlyPlayingSpotify;
    actions: {
        setCurrentlyPlaying: (newCurrentlyPlaying: CurrentlyPlayingSpotify) => void;
    };
}

const useSpotifyStore = create<SpotifyStore>((set) => ({
    currentlyPlaying: {
        is_playing: false,
        item: {
            name: 'Not playing',
            artists: [{ name: 'Spotify' }],
        },
    } as unknown as CurrentlyPlayingSpotify,
    actions: {
        setCurrentlyPlaying: (newCurrentlyPlaying) => set(() => ({ currentlyPlaying: newCurrentlyPlaying })),
    },
}));

export const useSpotify = () => {
    const { actions, currentlyPlaying } = useSpotifyStore((state) => state);

    useMount(async () => {
        try {
            const playing = await spotifyService.fetchNowPlaying();

            if (playing) {
                actions.setCurrentlyPlaying(playing);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error({ error });
            // ToDo handle error
        }
    });

    return { currentlyPlaying } as const;
};
