import React, { useEffect, useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Link from 'next/link';
import Image from 'next/image';

export const Blogs = ({ className = '', posts }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []); // at init only

    if (mounted) {
        return (
            <div className={`${className} block`}>
                <h2 className="block text-2xl md:text-4xl">Blog</h2>

                <div className="mt-6 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                    {posts.map(({ slug, frontmatter }) => (
                        <div
                            key={slug}
                            className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer h-full">
                            <Link href={`/blog/${slug}`} as={`/blog/${slug}`} className="h-full flex flex-col">
                                <div className="flex-shrink-0">
                                    <Image
                                        width={0}
                                        height={0}
                                        loading={'lazy'}
                                        className="h-48 w-full object-cover"
                                        src={`/${frontmatter.socialImage}`}
                                        alt={frontmatter.title}
                                    />
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-blue-600">
                                            {frontmatter.tags?.map((tag: string) => {
                                                return <span key={tag}>{tag} </span>;
                                            })}
                                        </p>
                                        <a className="flex flex-col mt-2">
                                            <div className="text-xl font-semibold text-gray-900">
                                                <LinesEllipsis
                                                    text={frontmatter.title}
                                                    maxLine="3"
                                                    ellipsis="..."
                                                    trimRight
                                                    basedOn="letters"
                                                />
                                            </div>
                                            <div className="mt-3 text-base text-gray-500 min-h-max">
                                                <LinesEllipsis
                                                    text={frontmatter.metaDesc}
                                                    maxLine="6"
                                                    ellipsis="..."
                                                    trimRight
                                                    basedOn="letters"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <span className="sr-only">Janek Ozga</span>
                                            <Image
                                                width={0}
                                                height={0}
                                                loading={'lazy'}
                                                className="h-10 w-10 rounded-full"
                                                src="/images/janek-cropped.jpg"
                                                alt="Portrait photo of Janek"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Janek Ozga</p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime={frontmatter.date}>{frontmatter.date}</time>
                                                <span aria-hidden="true">&middot;</span>
                                                <span>{frontmatter.readingTime} read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};
