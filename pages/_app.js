import React from 'react';
import '@/features/core/layout/styles.css';
import '@fontsource/inter/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { useMount } from 'react-use';
import { useCore } from '../features/core/core.state';
import { addCommentInSource } from '../features/core/layout/layout.service';
import { getPreferredColorScheme, watchColorSchemeChanges } from '../features/dark-mode-toggle/dark-mode.service';

export const isProd = process.env.NODE_ENV === 'production';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
    const { actions } = useCore();

    useMount(() => {
        actions.setIsAppInitialized();
        addCommentInSource();

        actions.toggleDarkMode(getPreferredColorScheme());
        watchColorSchemeChanges();
    });

    return (
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </AnimatePresence>
    );
};

export default MyApp;
