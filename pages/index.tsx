import React from 'react';
import Posts from '@/features/posts/posts.component';
import AboutMe from '@/features/about-me/about.me.component';
import Layout from '@/core/layout/default-layout.component';

const Index = (): JSX.Element => (
    <Layout>
        <AboutMe />
        <Posts />
    </Layout>
);

export default Index;
