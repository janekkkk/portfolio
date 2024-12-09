import React, { ReactNode } from 'react';
import { SocialIcons } from '@/features/contact/SocialIcons';

interface ContactProps {
    className: string;
}

export const Contact = ({ className }: ContactProps): ReactNode => (
    <div className={`${className}`}>
        <h2 className="block text-2xl md:text-4xl">First things first</h2>
        <p>
            You can{' '}
            <a href="/CV.pdf" target="_blank">
                download my CV
            </a>{' '}
            or contact me at <a href="mailto:iam@janekozga.nl">iam@janekozga.nl</a>.
        </p>

        <div className="flex gap-6 mt-8">
            <SocialIcons />

            <a href="/CV.pdf" target="_blank" className="border-none">
                <button
                    type="button"
                    className="rounded bg-gray-400 px-2 py-1 text-sm font-semibold text-white shadow-sm
                    hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-gray-600">
                    Download CV
                </button>
            </a>
            <a href="mailto:iam@janekozga.nl" className="border-none">
                <button
                    type="button"
                    className="rounded bg-gray-400 px-2 py-1 text-sm font-semibold text-white shadow-sm
                    hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-gray-600">
                    Contact me
                </button>
            </a>
        </div>
    </div>
);
