import React from 'react';
import Posts from '@/features/posts/posts.component';
import AboutMe from '@/features/about-me/about.me.component';
import Layout from '@/core/layout/default-layout.component';
import Timeline from '@/features/timeline/timeline.component';

const Index = (): JSX.Element => (
    <Layout>
        <AboutMe className="py-12" />
        <Timeline />
        <Posts />
    </Layout>
);

export default Index;
