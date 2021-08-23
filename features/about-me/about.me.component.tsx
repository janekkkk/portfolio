import React from 'react';
import Link from 'next/link';

export default function AboutMe({ className = '' }): JSX.Element {
    return (
        <div className={className}>
            <h1 className="mt-1 font-bold text-3xl md:text-5xl tracking-normal mb-4 text-black dark:text-white">
                Hey, I&apos;m Janek Ozga
            </h1>
            <p className="max-w-xl mt-5 text-xl mb-16">
                Front-end developer, JavaScript enthusiast, tree hugger and avid runner.{' '}
                <Link href={'/about'}>Learn more about me.</Link>
            </p>
        </div>
    );
}
