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

        <div className="mt-4 flex gap-6">
            <SocialIcons />
        </div>
    </div>
);
