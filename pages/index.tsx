import React from 'react';
import Posts from '@/features/posts/posts.component';
import AboutMe from '@/features/about-me/about.me.component';
import Layout from '@/core/layout/default-layout.component';
import Timeline from '@/features/timeline/timeline.component';

const Index = (): JSX.Element => (
    <Layout>
        <div>
            <AboutMe className="mt-8 md:mt-12 mb-0" />
        </div>
        <div>
            <Timeline className="mt-8 md:mt-12 mb-0" />
        </div>
        <div>
            <Posts className="mt-12 md:mt-14" />
        </div>
    </Layout>
);

export default Index;
