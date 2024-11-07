import fs from 'fs';
import matter from 'gray-matter';

class BlogService {
    public getPaths(): { params: { slug: string } }[] {
        const files = fs.readdirSync('blog');

        return files.map((fileName) => ({
            params: {
                slug: fileName.replace('.md', ''),
            },
        }));
    }

    public getContent(slug: string): matter.GrayMatterFile<string> {
        const fileName = fs.readFileSync(`blog/${slug}.md`, 'utf-8');
        return matter(fileName);
    }

    public getBlogs(): { slug: string; frontmatter: { [key: string]: unknown } }[] {
        const files = fs.readdirSync('blog');

        return files
            .map((fileName) => {
                if (fileName.includes('.md')) {
                    const slug = fileName.replace('.md', '');
                    const readFile = fs.readFileSync(`blog/${fileName}`, 'utf-8');
                    const { data: frontmatter } = matter(readFile);

                    return {
                        slug,
                        frontmatter,
                    };
                }
            })
            .filter((blog) => blog !== undefined);
    }
}

export const blogService = new BlogService();
