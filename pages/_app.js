import React from 'react';
import '../features/core/layout/styles.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import mixpanel from 'mixpanel-browser';

const isProd = process.env.NODE_ENV === 'production';

const queryClient = new QueryClient();

if (isProd) {
    mixpanel.init('1dfa457dc710f12d7b9cb3cb3f74a7d2', { debug: true });
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    );
};

export default MyApp;
