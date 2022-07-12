import React, { useEffect, useState } from 'react';
import { JSX } from '@babel/types';
import GraphemeSplitter from 'grapheme-splitter';
import Typewriter from 'typewriter-effect';

export const AboutMe = ({ className = '' }): JSX.Element => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []); // at init only

    const stringSplitter = (text: string): string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(text) as unknown as string;
    };

    return mounted ? (
        <div className={className}>
            <h1 className="mt-8 font-bold text-3xl md:text-6xl tracking-normal mb-4 text-black dark:text-white">
                Hey there — I&apos;m Janek.
            </h1>
            <div className="max-w-xl mt-5 text-xl mb-16">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'text-2xl md:text-3xl',
                        cursorClassName: 'text-2xl md:text-3xl',
                        delay: 100,
                        stringSplitter,
                        strings: [
                            'Frontend developer 👨‍💻',
                            'Tree planter 🌱🌳',
                            'Dutchie 🇳🇱 and European 🇪🇺',
                            'Avid hiker and runner 🏃‍💨',
                            'Tinkerer 🪛‍💻',
                            'Lover of peanut butter 🥜',
                            'DevOps enthusiast 🤖',
                            'PC gamer 🎮',
                            'CSS fan 🎨',
                            'Permaculture gardener 🌱',
                            'DJ  🎶',
                            'Fermenter 🍺',
                            'Cook 🍔',
                            'Petter of cats 🐱',
                            'Software engineer 👨‍💻',
                            'Music lover 🎵',
                        ],
                    }}
                />
            </div>
        </div>
    ) : null;
};
