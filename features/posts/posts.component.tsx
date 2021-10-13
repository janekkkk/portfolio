import React from 'react';
import { posts } from '@/features/posts/posts.data';
import LinesEllipsis from 'react-lines-ellipsis';

export default function Posts({ className = '' }): JSX.Element {
    return (
        <div className={`${className} block`}>
            <h2 className="block text-2xl md:text-4xl">On the web</h2>

            <div className="mt-6 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                    <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <a href={post.category.href}>{post.category.name}</a>
                                </p>
                                <a href={post.href} className="block mt-2">
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
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href={post.author.href}>
                                        <span className="sr-only">{post.author.name}</span>
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={post.author.imageUrl}
                                            alt="Portrait photo of Janek"
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href={post.author.href}>{post.author.name}</a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime={post.datetime}>{post.date}</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{post.readingTime} read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
