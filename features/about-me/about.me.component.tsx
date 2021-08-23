import React from 'react';
import { JSX } from '@babel/types';
import dynamic from 'next/dynamic';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TypeWriterEffectNoSSR = dynamic(() => import('react-typewriter-effect'), { ssr: false }) as any;

export default function AboutMe({ className = '' }): JSX.Element {
    if (process.browser) {
        return (
            <div className={className}>
                <h1 className="mt-1 font-bold text-3xl md:text-6xl tracking-normal mb-4 text-black dark:text-white">
                    Hey, I&apos;m Janek Ozga
                </h1>
                <div className="max-w-xl mt-5 text-xl mb-16">
                    <TypeWriterEffectNoSSR
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
