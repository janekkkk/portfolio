import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

interface Props extends LinkProps {
    children: ReactNode;
}

export const NoScrollLink = ({ children, href, passHref }: Props): ReactNode => (
    <Link href={href} passHref={passHref} scroll={false}>
        {children}
    </Link>
);
