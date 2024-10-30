import React, { ReactNode } from 'react';

export interface TimelineItemModel {
    content: string;
    postfix?: string;
    target: string;
    href?: string;
    date: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => ReactNode;
    iconBackground: string; // tailwind class
    emoji?: string;
}
