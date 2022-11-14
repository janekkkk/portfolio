import md from 'markdown-it';
import { BlogLayout } from '@/core/layout/blog-layout';
import React, { useEffect, useState } from 'react';
import { blogService } from '@/features/blog/blog.service';
import { PageTransition } from '@/shared/components/animations/PageTransition';

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
export default ({ frontmatter, content }): JSX.Element => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []); // at init only

    if (mounted) {
        return (
            <PageTransition>
                <BlogLayout>
                    <div className="mx-auto">
                        <h1>{frontmatter.title}</h1>
                        <img
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
