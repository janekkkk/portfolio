import { create } from 'zustand';

interface CoreStore {
    isAppInitialized: boolean;
    isDarkModeEnabled: boolean;
    actions: {
        setIsAppInitialized: () => void;
        toggleDarkMode: (newValue?: boolean) => void;
    };
}

const useCoreStore = create<CoreStore>((set) => ({
    isAppInitialized: false,
    isDarkModeEnabled: false,
    actions: {
        setIsAppInitialized: () => set(() => ({ isAppInitialized: true })),
        toggleDarkMode: (newValue) =>
            set((state) => ({ isDarkModeEnabled: newValue === undefined ? !state.isDarkModeEnabled : newValue })),
    },
}));

export const useCore = () => {
    const store = useCoreStore((store) => store);

    return { ...store } as const;
};
