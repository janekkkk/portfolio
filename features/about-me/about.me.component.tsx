import React from 'react';
import { JSX } from '@babel/types';
import TypeWriterEffect from 'react-typewriter-effect';

const isBrowser = typeof window !== 'undefined';

export default function AboutMe({ className = '' }): JSX.Element {
    if (isBrowser) {
        return (
            <div className={className}>
                <h1 className="mt-1 font-bold text-3xl md:text-6xl tracking-normal mb-4 text-black dark:text-white">
                    Hey, I&apos;m Janek Ozga
                </h1>
                <div className="max-w-xl mt-5 text-xl mb-16">
                    <TypeWriterEffect
                        textStyle={{
                            fontSize: '1.5rem',
                            minHeight: '1.5rem',
                        }}
                        startDelay={0}
                        cursorColor="#3F3D56"
                        multiText={[
                            'Frontend developer',
                            'Tree planter',
                            'Avid runner',
                            'Tinkerer',
                            'Lover of peanut butter',
                            'DevOps enthousiast',
                            'Gamer',
                            'Software engineer',
                        ]}
                        multiTextDelay={3000}
                        typeSpeed={70}
                    />
                </div>
            </div>
        );
    } else {
        return null;
    }
}
