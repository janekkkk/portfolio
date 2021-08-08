import React from 'react';
import Link from 'next/link';

export default function AboutMe(): JSX.Element {
    return (
        <div className="bg-white">
            <div className="max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <p className="mt-1 font-bold text-3xl md:text-5xl tracking-normal mb-4 text-black dark:text-white">
                    Hey, I&apos;m Janek Ozga
                </p>
                <p className="max-w-xl mt-5 text-xl prose text-gray-600 dark:text-white dark:text-gray-400 mb-16">
                    Front-end developer, JavaScript enthusiast, tree hugger and avid runner.{' '}
                    <Link href={'/about'}>Learn more about me.</Link>
                </p>
            </div>
        </div>
    );
}
