import { useSpotifyService } from '@/shared/services/spotify/spotify.service';
import { useEffect, useState } from 'react';
import { CurrentlyPlayingSpotify } from '@/shared/services/spotify/currently-playing-spotify.model';

export default function CurrentlyPlaying(): JSX.Element {
    const spotifyService = useSpotifyService();
    const [nowPlaying, setNowPlaying] = useState<CurrentlyPlayingSpotify | null>(null);
    const notPlaying = {
        is_playing: false,
        item: {
            name: 'Not playing',
            artists: [{ name: 'Spotify' }],
        },
    } as CurrentlyPlayingSpotify;

    useEffect(() => {
        try {
            // TODO find a way to let provider play nice with TS
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            spotifyService.fetchNowPlaying().then((currentlyPlaying: CurrentlyPlayingSpotify) => {
                if (currentlyPlaying.is_playing) {
                    setNowPlaying(currentlyPlaying);
                } else {
                    setNowPlaying(notPlaying);
                }
            });
        } catch (e) {
            setNowPlaying(notPlaying);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (nowPlaying) {
        return (
            <a
                href="https://open.spotify.com/user/1141254664?si=7ffb0c596c384ccf"
                target="_blank"
                className="inline-flex flex-row w-full max-w-full truncate items-center justify-center hover:cursor-pointer"
                rel="noreferrer"
            >
                <svg className="h-4 w-4 inline mr-2" viewBox="0 0 168 168">
                    <path
                        fill="#1ED760"
                        d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                    ></path>
                </svg>
                <p className="text-gray-800 dark:text-gray-200 font-medium">{nowPlaying.item.name}</p>
                <span className="mx-2 text-gray-500 dark:text-gray-300"> – </span>
                <p className="text-gray-500 dark:text-gray-300 max-w-max truncate">{nowPlaying.item.artists[0].name}</p>
            </a>
        );
    } else return null;
}
