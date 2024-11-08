import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { addCommentInSource, defaultLayoutMetaData, getDefaultPageURL } from '@/core/layout/layout.service';
import { AiOutlineRollback } from 'react-icons/ai';
import { Footer } from '@/core/footer.component';
import { useCoreState } from '@/core/useCoreState.hook';
import { useMount } from 'react-use';
import { ColorSchemeToggle } from '@/features/dark-mode-toggle/ColorSchemeToggle';

export const BlogLayout = ({ children }): ReactNode => {
    const router = useRouter();
    const pathName = router.pathname;
    const pageURL = getDefaultPageURL(pathName);
    const { isAppInitialized, setIsAppInitialized } = useCoreState();

    useMount(() => {
        if (!isAppInitialized) {
            addCommentInSource();
            setIsAppInitialized();
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
                    locale: 'en_US',
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
                    siteName: defaultLayoutMetaData.siteName,
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

            <div className="absolute top-4 right-4">
                <ColorSchemeToggle />
            </div>

            <div className="flex flex-col justify-top items-center max-w-4xl mx-auto min-h-screen py-2 blog">
                <div className="px-8 mb-6 flex ">
                    <button type="button" onClick={() => router.back()} className="flex items-center text-xl">
                        <AiOutlineRollback />
                        <span className="ml-2">Go back</span>
                    </button>
                </div>

                <div className="px-4 sm:px-8 md:px-4">
                    <main className="flex flex-col w-full flex-1">
                        <article className="prose">{children}</article>
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
};
