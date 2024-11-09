import { useMount, useToggle } from 'react-use';
import { useEffect } from 'react';

const getPreferredColorScheme = (): boolean => {
    if (window?.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches; // dark
    }
    return false; // light
};

export const ColorSchemeToggle = () => {
    const [isInDarkMode, toggleDarkMode] = useToggle(false);

    const watchColorSchemeChanges = () => {
        if (window?.matchMedia) {
            const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            colorSchemeQuery.addEventListener('change', () => toggleDarkMode(getPreferredColorScheme()));
        }
    };

    useMount(() => {
        toggleDarkMode(getPreferredColorScheme());
        watchColorSchemeChanges();
    });

    /**
     * This will make sure I can also use the Tailwind dark mode all over the app. https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
     */
    const addDarkClassToHTMLElement = () => {
        if (isInDarkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    };

    useEffect(() => {
        addDarkClassToHTMLElement();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInDarkMode]);

    return (
        <div>
            <button
                onClick={toggleDarkMode}
                type="button"
                className="dark:hidden block font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none
                 focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                <span className="group inline-flex shrink-0 justify-center items-center size-9">
                    <svg
                        className="shrink-0 size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </span>
            </button>
            <button
                type="button"
                onClick={toggleDarkMode}
                className="dark:block hidden font-medium text-gray-900 rounded-full hover:bg-gray-400 focus:outline-none
                 focus:bg-gray-500 dark:text-black dark:hover:bg-neutral-400 dark:focus:bg-neutral-800">
                <span className="group inline-flex shrink-0 justify-center items-center size-9">
                    <svg
                        className="shrink-0 size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                </span>
            </button>
        </div>
    );
};
