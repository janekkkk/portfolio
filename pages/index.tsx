import React from 'react';
import { Posts } from '@/features/posts/posts.component';
import { AboutMe } from '@/features/about-me/about.me.component';
import { DefaultLayout } from '@/core/layout/default-layout.component';
import { Timeline } from '@/features/timeline/timeline.component';
import { Contact } from '@/features/contact/contact.component';
import { blogService } from '@/features/blog/blog.service';
import { Blogs } from '@/features/blog/blogs';
import { PageTransition } from '@/features/animations/PageTransition';

export const getStaticProps = () => {
    const posts = blogService.getBlogs();

    return {
        props: {
            posts,
        },
    };
};

export const Index = ({ posts }): JSX.Element => {
    return (
        <PageTransition>
            <DefaultLayout>
                <div>
                    <AboutMe className="mt-8 md:mt-12 mb-0" />
                </div>
                <div>
                    <Contact className="mt-8 md:mt-12 mb-0" />
                </div>
                <div>
                    <Timeline className="mt-8 md:mt-12 mb-0" />
                </div>
                <div>
                    <Blogs className="mt-8 md:mt-12 mb-0" posts={Array.from(posts)} />
                </div>
                <div>
                    <Posts className="mt-12 md:mt-14" />
                </div>
            </DefaultLayout>
        </PageTransition>
    );
};

export default Index;
