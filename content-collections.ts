import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

const blog = defineCollection({
    name: 'blog',
    directory: 'blog',
    include: '*.mdx',
    schema: (z) => ({
        title: z.string(),
        socialImage: z.string(),
        tags: z.array(z.string()),
        metaDesc: z.string(),
        date: z.string(),
        readingTime: z.string(),
    }),
    transform: async (document, context) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const mdx = await compileMDX(context, document);
        return {
            ...document,
            mdx,
        };
    },
});

export default defineConfig({
    collections: [blog],
});
