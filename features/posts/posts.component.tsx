import React, { ReactNode } from 'react';
import { posts } from '@/features/posts/posts.data';
import LinesEllipsis from 'react-lines-ellipsis';
import Image from 'next/image';

export const Posts = ({ className = '' }): ReactNode => (
    <div className={`${className} block`}>
        <h2 className="block text-2xl md:text-4xl">On the web</h2>

        {/*ToDo refactor to posts and post components*/}
        <div className="mt-6 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
                <a
                    key={post.title}
                    href={post.href}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:border-none grow">
                    <div className="flex-shrink-0">
                        <Image
                            loading="lazy"
                            width="0"
                            height="0"
                            className="h-48 w-full object-cover"
                            src={post.imageUrl}
                            alt=""
                        />
                    </div>

                    <div className="bg-white p-6 flex flex-col justify-between flex-grow">
                        <div className="">
                            <p className="text-sm font-medium text-blue-600">{post.category.name}</p>
                            <div className="mt-2">
                                <div className="text-xl font-semibold text-gray-900">
                                    <LinesEllipsis
                                        text={post.title}
                                        maxLine="3"
                                        ellipsis="..."
                                        trimRight
                                        basedOn="letters"
                                    />
                                </div>
                                <div className="mt-3 text-base text-gray-500">
                                    <LinesEllipsis
                                        text={post.description}
                                        maxLine="6"
                                        ellipsis="..."
                                        trimRight
                                        basedOn="letters"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <span className="sr-only">{post.author.name}</span>
                                <Image
                                    width={0}
                                    height={0}
                                    loading={'lazy'}
                                    className="h-10 w-10 rounded-full"
                                    src={post.author.imageUrl}
                                    alt="Portrait photo of Janek"
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                    <time dateTime={post.datetime}>{post.date}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{post.readingTime} read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
);
