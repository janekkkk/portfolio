import Footer from '@/core/footer.component';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export default function DefaultLayout({ children }): JSX.Element {
    const title = 'Janek Ozga';
    const description =
        "I'm a frontend developer, tree planter, and a fun guy to hang around with. " + 'I like to build things.';

    const siteURL = 'https://janekozga.nl';
    const ogImageURL = '/og.png';
    const pathName = useRouter().pathname;
    const pageURL = pathName === '/' ? siteURL : siteURL + pathName;
    const twitterHandle = '@janekofoz';
    const siteName = 'Janekozga.nl';

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        addCommentInSource();
    }, []);

    const addCommentInSource = (): void => {
        if (typeof window !== 'undefined') {
            const c = document.createComment(
                '\n\n👋 Checking out the source? 👨‍💻 Cool! 😎 It might be easier to read on GitHub though 😉 -> https://github.com/janekkkk/portfolio \n\n'
            );
            document.appendChild(c);
        }
    };

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={pageURL}
                openGraph={{
                    type: 'website',
                    locale: 'en_US', //  Default is en_US
                    url: pageURL,
                    title,
                    description,
                    images: [
                        {
                            url: ogImageURL,
                            width: 1200,
                            height: 630,
                            alt: 'Janekozga.nl - personal site / portfolio',
                        },
                    ],
                    site_name: siteName,
                }}
                twitter={{
                    handle: twitterHandle,
                    site: twitterHandle,
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        property: 'author',
                        content: title,
                    },
                ]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon.ico',
                    },
                    {
                        rel: 'manifest',
                        href: '/site.webmanifest',
                    },
                ]}
            />

            <div className="flex flex-col justify-center items-start max-w-4xl mx-auto min-h-screen py-2">
                <div className="px-8">
                    <main className="flex flex-col w-full flex-1">{children}</main>

                    <Footer />
                </div>
            </div>
        </>
    );
}
