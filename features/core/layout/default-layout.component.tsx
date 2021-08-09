import Head from 'next/head';
import Footer from '@/core/footer.component';
import React from 'react';

class Layout extends React.Component<{ children: unknown; title: string; description: string }> {
    static defaultProps = {
        title: 'Janek Ozga - Software Engineer',
        description: 'Front-end developer, JavaScript enthusiast, tree hugger and avid runner.',
    };

    private addCommentInSource(): void {
        if (typeof window !== 'undefined') {
            const c = document.createComment(
                '\n\n👋 Checking out the source? 👨‍💻 Cool! 😎 It might be easier to read on GitHub though 😉 -> https://github.com/janekkkk/portfolio \n\n'
            );
            document.appendChild(c);
        }
    }

    componentDidMount(): void {
        this.addCommentInSource();
    }

    render(): JSX.Element {
        const { children, title, description } = this.props;

        return (
            <div className="flex flex-col justify-center items-start max-w-4xl mx-auto min-h-screen py-2">
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex flex-col w-full flex-1 px-20">{children}</main>

                <Footer />
            </div>
        );
    }
}

export default Layout;
