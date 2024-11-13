export const defaultLayoutMetaData = {
    title: 'Janek Ozga',
    description:
        "Welcome to my portfolio! I'm a frontend developer who loves crafting web experiences, exploring tech, and sharing my journey. Check out my projects, blog posts on coding, and experiments with fermenting, plant care, cooking and other interests.",
    siteURL: 'https://janekozga.nl',
    ogImageURL: '/og.png',
    twitterHandle: '@janekofoz',
    siteName: 'Janekozga.nl',
};

export const getDefaultPageURL = (pathName: string): string => {
    return pathName === '/' ? defaultLayoutMetaData.siteURL : defaultLayoutMetaData.siteURL + pathName;
};

export const addCommentInSource = (): void => {
    if (typeof window !== 'undefined') {
        const comment = document.createComment(
            '\n\n👋 Checking out the source? 👨‍💻 Cool! 😎 It might be easier to read on GitHub though 😉 -> https://github.com/janekkkk/portfolio \n\n'
        );

        document.appendChild(comment);
    }
};
