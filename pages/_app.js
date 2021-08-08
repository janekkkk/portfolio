import React from 'react';
import '../features/core/layout/styles.scss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
    );
};

export default MyApp;
