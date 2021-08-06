import Head from 'next/head'
import React = require('react');
import AboutMe from "@/components/about-me";
import Example from "@/components/content";
import Footer from "@/shared/core/footer";

export default () => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <AboutMe/>
            <Example/>
        </main>

        <Footer/>
    </div>
)
