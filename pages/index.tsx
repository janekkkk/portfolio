import Head from 'next/head'
import React = require('react');
import Posts from "@/features/posts/posts.component";
import AboutMe from "@/features/about-me/about.me.component";
import Footer from "@/core/footer.component";

export default () => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <AboutMe/>
            <Posts/>
        </main>

        <Footer/>
    </div>
)
