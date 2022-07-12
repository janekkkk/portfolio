import React from 'react';
import { Posts } from '@/features/posts/posts.component';
import { AboutMe } from '@/features/about-me/about.me.component';
import { DefaultLayout } from '@/core/layout/default-layout.component';
import { Timeline } from '@/features/timeline/timeline.component';
import { Contact } from '@/features/contact/contact.component';

const Index = (): JSX.Element => (
    <DefaultLayout>
        <div>
            <AboutMe className="mt-8 md:mt-12 mb-0" />
        </div>
        <div>
            <Contact className="mt-8 md:mt-12 mb-0" />
        </div>
        <div>
            <Timeline className="mt-8 md:mt-12 mb-0" />
        </div>
        <div>
            <Posts className="mt-12 md:mt-14" />
        </div>
    </DefaultLayout>
);

export default Index;
