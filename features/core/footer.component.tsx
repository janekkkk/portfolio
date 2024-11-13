import React, { ReactNode } from 'react';
import { CurrentlyPlaying } from '@/features/currently-playing/currently-playing.component';
import { SocialIcons } from '../contact/SocialIcons';

export const Footer = (): ReactNode => (
    <footer className="w-full">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
                <SocialIcons />
            </div>
            <div className="mt-8 md:mt-0 md:order-1 mr-2">
                <CurrentlyPlaying />
            </div>
        </div>
    </footer>
);
