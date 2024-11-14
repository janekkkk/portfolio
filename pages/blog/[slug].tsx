import { BlogLayout } from '@/core/layout/blog-layout';
import React, { useState } from 'react';
import { blogService } from '@/features/blog/blog.service';
import { PageTransition } from '@/shared/components/animations/PageTransition';
import Image from 'next/image';
import { useMount } from 'react-use';
import { MDXContent } from '@content-collections/mdx/react';
import { allBlogs } from 'content-collections';
import { useRouter } from 'next/router';

export const getStaticPaths = (): { paths: { params: { slug: string } }[]; fallback: boolean } => {
    return {
        paths: blogService.getPaths(),
        fallback: false,
    };
};

export const getStaticProps = ({ params: { slug } }): { props: { slug: string } } => {
    return {
        props: {
            slug: slug,
        },
    };
};

export default function BlogPostPage() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const blog = allBlogs.find((post) => post._meta.path === router.query.slug);

    useMount(async () => {
        setMounted(true);
    });

    if (mounted) {
        return (
            <PageTransition>
                <BlogLayout>
                    <div className="mx-auto">
                        <h1>{blog.title}</h1>
                        <Image
                            width={0}
                            height={0}
                            loading={'lazy'}
                            className="h-48 w-full object-cover"
                            src={`/${blog.socialImage}`}
                            alt={blog.title}
                        />
                        <MDXContent code={blog.mdx} />
                    </div>
                </BlogLayout>
            </PageTransition>
        );
    }
    return null;
}
