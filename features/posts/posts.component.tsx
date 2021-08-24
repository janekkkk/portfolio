import React from 'react';

const posts = [
    {
        title: 'Prettier Linting',
        href: 'https://medium.com/@janekkkk/prettier-linting-c2aa755e583b',
        category: { name: 'Article', href: 'https://medium.com/@janekkkk/prettier-linting-c2aa755e583b' },
        description:
            'Recently I’ve been getting into code quality tools as I’ve just started my graduation internship project. ' +
            'I wanted to save my findings for future reference but also share it with my new colleagues and the rest of the world.',
        date: '29 Nov, 2017',
        datetime: '2017-11-29',
        imageUrl: 'https://miro.medium.com/max/2000/1*n_AHPX0MrFPveTqDft9VpQ.jpeg',
        readingTime: '4 min',
        author: {
            name: 'Janek Ozga',
            href: 'https://medium.com/@janekkkk',
            imageUrl: 'https://miro.medium.com/fit/c/64/64/0*xVkUc83eWIWGw4uA.jpg',
        },
    },
];

export default function Posts({ className = '' }): JSX.Element {
    return (
        <div className={`${className} block`}>
            <div className="grid gap-5 lg:grid-cols-3 lg:max-w-none">
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
                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
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
