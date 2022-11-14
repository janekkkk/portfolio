import { useRouter } from 'next/router';
import { motion, useReducedMotion } from 'framer-motion';
import { useCoreState } from '@/core/useCoreState.hook';

/**
 * https://dev.to/jameswallis/animating-next-js-page-transitions-with-framer-motion-1g9j
 */
export const PageTransition = ({ children }) => {
    const { asPath, pathname } = useRouter();
    const shouldReduceMotion = useReducedMotion();
    const { isAppInitialized } = useCoreState();

    const getX = (): number => {
        if (!isAppInitialized) {
            return 0;
        }

        if (pathname === '/') {
            return 200;
        }

        return -200;
    };

    const variants = {
        hidden: { opacity: 0, x: getX(), y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    };

    return (
        <motion.div
            key={asPath}
            variants={shouldReduceMotion ? null : variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}>
            {children}
        </motion.div>
    );
};
