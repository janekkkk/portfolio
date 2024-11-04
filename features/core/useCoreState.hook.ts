import { create } from 'zustand';

interface CoreStore {
    isInitialized: boolean;
    actions: {
        setIsInitialized: () => void;
    };
}

const useCoreStore = create<CoreStore>((set) => ({
    isInitialized: false,
    actions: {
        setIsInitialized: () => set(() => ({ isInitialized: true })),
    },
}));
export const useCoreState = () => {
    const { isInitialized, actions } = useCoreStore((store) => store);

    return { isAppInitialized: isInitialized, setIsAppInitialized: actions.setIsInitialized } as const;
};
