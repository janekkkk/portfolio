import Head from 'next/head';
import React from 'react';
import Posts from '@/features/posts/posts.component';
import AboutMe from '@/features/about-me/about.me.component';
import Footer from '@/core/footer.component';

const Index = (): JSX.Element => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <AboutMe />
            <Posts />
        </main>

        <Footer />
    </div>
);

export default Index;
