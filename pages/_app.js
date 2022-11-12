import React from 'react';
import '../features/core/layout/styles.scss';
import '@fontsource/inter/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const isProd = process.env.NODE_ENV === 'production';

const queryClient = new QueryClient();

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
