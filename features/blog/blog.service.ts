import fs from 'fs';

class BlogService {
    public getPaths(): { params: { slug: string } }[] {
        const files = fs.readdirSync('blog');

        return files.map((fileName) => ({
            params: {
                slug: fileName.replace('.mdx', ''),
            },
        }));
    }
}

export const blogService = new BlogService();
