export const defaultLayoutMetaData = {
    title: 'Janek Ozga',
    description: "I'm a frontend developer, tree planter, and a fun guy to hang around with. I like to build things.",
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
