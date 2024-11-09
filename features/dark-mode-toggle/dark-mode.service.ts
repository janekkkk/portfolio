export const getPreferredColorScheme = (): boolean => {
    if (window?.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches; // dark
    }
    return false; // light
};

export const watchColorSchemeChanges = (action: (newValue?: boolean) => void) => {
    if (window?.matchMedia) {
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', () => action(getPreferredColorScheme()));
    }
};
