import React from 'react';
import '../features/core/layout/styles.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

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
