import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { addCommentInSource, defaultLayoutMetaData, getDefaultPageURL } from '@/core/layout/layout.service';
import { AiOutlineRollback } from 'react-icons/ai';
import { Footer } from '@/core/footer.component';
import { useCoreState } from '@/core/useCoreState.hook';
import { useMount } from 'react-use';

export const BlogLayout = ({ children }): JSX.Element => {
    const router = useRouter();
    const pathName = router.pathname;
    const pageURL = getDefaultPageURL(pathName);
    const { isAppInitialized, setIsAppInitialized } = useCoreState();

    useMount(() => {
        if (!isAppInitialized) {
            addCommentInSource();
            setIsAppInitialized(true);
        }
    });

    return (
        <>
            <NextSeo
                title={defaultLayoutMetaData.title}
                description={defaultLayoutMetaData.description}
                canonical={pageURL}
                openGraph={{
                    type: 'website',
                    locale: 'en_US', //  Default is en_US
                    url: pageURL,
                    title: defaultLayoutMetaData.title,
                    description: defaultLayoutMetaData.description,
                    images: [
                        {
                            url: defaultLayoutMetaData.ogImageURL,
                            width: 1200,
                            height: 630,
                            alt: 'Janekozga.nl - personal site / portfolio',
                        },
                    ],
                    site_name: defaultLayoutMetaData.siteName,
                }}
                twitter={{
                    handle: defaultLayoutMetaData.twitterHandle,
                    site: defaultLayoutMetaData.twitterHandle,
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        property: 'author',
                        content: defaultLayoutMetaData.title,
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
                <header className="px-8 mb-6">
                    <button type="button" onClick={() => router.back()} className="flex items-center text-xl">
                        <AiOutlineRollback />
                        <span className="ml-2">Go back</span>
                    </button>
                </header>

                <div className="px-8">
                    <main className="flex flex-col w-full flex-1">
                        <article className="prose">{children}</article>
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
};