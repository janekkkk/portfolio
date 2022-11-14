import { atom, useAtom } from 'jotai';

const isInitializedAtom = atom(false);

export const useCoreState = () => {
    const [isInitialized, setIsInitialized] = useAtom(isInitializedAtom);

    return { isAppInitialized: isInitialized, setIsAppInitialized: setIsInitialized };
};
