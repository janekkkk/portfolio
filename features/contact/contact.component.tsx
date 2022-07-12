import React from 'react';

interface ContactProps {
    className: string;
}

export const Contact = ({ className }: ContactProps): JSX.Element => (
    <div className={`${className} block`}>
        <h2 className="block text-2xl md:text-4xl">First things first</h2>
        <p>
            You can{' '}
            <a href="/CV.pdf" target="_blank">
                download my CV
            </a>{' '}
            or contact me at <a href="mailto:iam@janekozga.nl">iam@janekozga.nl</a>.
        </p>
    </div>
);
