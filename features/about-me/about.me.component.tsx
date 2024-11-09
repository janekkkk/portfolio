import React, { useEffect, useState } from 'react';
import GraphemeSplitter from 'grapheme-splitter';
import Typewriter from 'typewriter-effect';
import { DarkModeToggle } from '@/features/dark-mode-toggle/DarkModeToggle';

export const AboutMe = ({ className = '' }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []); // at init only

    const stringSplitter = (text: string): string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(text) as unknown as string;
    };

    return mounted ? (
        <div className={className}>
            <h1 className="mt-8 font-bold text-3xl md:text-6xl tracking-normal mb-4 text-black">
                Hey there — I&apos;m Janek.
            </h1>
            <div className="max-w-xl mt-5 text-xl mb-12">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'text-2xl md:text-3xl',
                        cursorClassName: 'text-2xl md:text-3xl',
                        delay: 100,
                        stringSplitter,
                        strings: [
                            'Frontend developer <span class="emoji">👨‍💻</span>',
                            'Tree planter <span class="emoji">🌱🌳</span>',
                            'Dutch <span class="emoji">🇳🇱</span> European <span class="emoji">🇪🇺</span>',
                            'Avid hiker and runner <span class="emoji">🏃‍💨</span>',
                            'Tinkerer <span class="emoji">🪛‍💻</span>',
                            'Lover of peanut butter <span class="emoji">🥜</span>',
                            'DevOps enthusiast <span class="emoji">🤖</span>',
                            'PC gamer <span class="emoji">🎮</span>',
                            'CSS fan <span class="emoji">🎨</span>',
                            'Permaculture gardener <span class="emoji">🌱🌳</span>',
                            'DJ <span class="emoji">🎶</span>',
                            'Fermenter <span class="emoji">🍺</span>',
                            'Cook <span class="emoji">🥗🥘🍲</span>',
                            'Petter of cats <span class="emoji">🐱</span>',
                            'Software engineer <span class="emoji">👨‍💻</span>',
                            'Music lover <span class="emoji">🎵</span>',
                        ],
                    }}
                />
            </div>
        </div>
    ) : null;
};
