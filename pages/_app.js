import 'tailwindcss/tailwind.css';
import React from 'react';
import Head from 'next/head';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <script dangerouslySetInnerHTML={{ __html: '<!-- Checking out the source? Cool! -->' }} />

            <Component {...pageProps} />
        </React.Fragment>
    );
};

export default MyApp;
