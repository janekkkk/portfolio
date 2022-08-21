import fs from 'fs';
import matter from 'gray-matter';

export class BlogService {
    static getPaths(): { params: { slug: string } }[] {
        const files = fs.readdirSync('blog');

        return files.map((fileName) => ({
            params: {
                slug: fileName.replace('.md', ''),
            },
        }));
    }

    static getContent(slug: string): matter.GrayMatterFile<string> {
        const fileName = fs.readFileSync(`blog/${slug}.md`, 'utf-8');
        return matter(fileName);
    }

    static getBlogs(): { frontmatter: { [p: string]: any }; slug: string }[] {
        const files = fs.readdirSync('blog');

        return files.map((fileName) => {
            const slug = fileName.replace('.md', '');
            const readFile = fs.readFileSync(`blog/${fileName}`, 'utf-8');
            const { data: frontmatter } = matter(readFile);

            return {
                slug,
                frontmatter,
            };
        });
    }
}

export const blogService = BlogService;
