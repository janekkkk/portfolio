import React from 'react';
import Posts from '@/features/posts/posts.component';
import AboutMe from '@/features/about-me/about.me.component';
import Layout from '@/core/layout/default-layout.component';
import Timeline from '@/features/timeline/timeline.component';

const Index = (): JSX.Element => (
    <Layout>
        <AboutMe className="mt-8 md:mt-12 mb-0" />
        <Timeline className="mt-4 md:mt-0" />
        <Posts className="mt-12 md:mt-14" />
    </Layout>
);

export default Index;
