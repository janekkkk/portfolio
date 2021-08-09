import React from 'react';
import '../features/core/layout/styles.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SpotifyProvider } from '../shared/services/spotify/spotify.service';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <QueryClientProvider client={queryClient}>
                <SpotifyProvider>
                    <Component {...pageProps} />
                </SpotifyProvider>
            </QueryClientProvider>
        </React.Fragment>
    );
};

export default MyApp;
