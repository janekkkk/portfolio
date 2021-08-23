import React from 'react';
import { JSX } from '@babel/types';
import GraphemeSplitter from 'grapheme-splitter';
import Typewriter from 'typewriter-effect';

export default function AboutMe({ className = '' }): JSX.Element {
    const stringSplitter = (text: string): string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(text) as unknown as string;
    };

    if (process.browser) {
        return (
            <div className={className}>
                <h1 className="mt-8 font-bold text-3xl md:text-6xl tracking-normal mb-4 text-black dark:text-white">
                    Hey, I&apos;m Janek Ozga
                </h1>
                <div className="max-w-xl mt-5 text-xl mb-16">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'text-3xl',
                            cursorClassName: 'text-3xl',
                            delay: 100,
                            stringSplitter,
                            strings: [
                                'Frontend developer 👨‍💻',
                                'Tree planter 🌱🌳',
                                'Avid runner 🏃‍💨',
                                'Tinkerer ‍💻',
                                'Lover of peanut butter 🥜',
                                'DevOps enthousiast 👨‍💻',
                                'Gamer 🎮',
                                'Software engineer 👨‍💻',
                            ],
                        }}
                    />
                </div>
            </div>
        );
    } else {
        return null;
    }
}
