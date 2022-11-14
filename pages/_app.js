import React from 'react';
import '@/features/core/layout/styles.scss';
import '@fontsource/inter/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';

export const isProd = process.env.NODE_ENV === 'production';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }) => {
    return (
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </AnimatePresence>
    );
};

export default MyApp;
