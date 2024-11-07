import md from 'markdown-it';
import { BlogLayout } from '@/core/layout/blog-layout';
import React, { ReactNode, useState } from 'react';
import { blogService } from '@/features/blog/blog.service';
import { PageTransition } from '@/shared/components/animations/PageTransition';
import Image from 'next/image';
import { useMount } from 'react-use';

export const getStaticPaths = (): { paths: { params: { slug: string } }[]; fallback: boolean } => {
    return {
        paths: blogService.getPaths(),
        fallback: false,
    };
};

export const getStaticProps = ({
    params: { slug },
}): { props: { frontmatter: { [p: string]: unknown }; content: string } } => {
    const { data: frontmatter, content } = blogService.getContent(slug);

    return {
        props: {
            frontmatter,
            content,
        },
    };
};

// eslint-disable-next-line react/display-name,import/no-anonymous-default-export
export default ({ frontmatter, content }): ReactNode => {
    const [mounted, setMounted] = useState(false);

    useMount(() => {
        setMounted(true);
    });

    if (mounted) {
        return (
            <PageTransition>
                <BlogLayout>
                    <div className="mx-auto">
                        <h1>{frontmatter.title}</h1>
                        <Image
                            width={0}
                            height={0}
                            loading={'lazy'}
                            className="h-48 w-full object-cover"
                            src={`/${frontmatter.socialImage}`}
                            alt={frontmatter.title}
                        />
                        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                    </div>
                </BlogLayout>
            </PageTransition>
        );
    }
    return null;
};
