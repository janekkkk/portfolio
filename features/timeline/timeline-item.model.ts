import React from 'react';

export interface TimelineItemModel {
    content: string;
    target: string;
    href?: string;
    date: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    iconBackground: string; // tailwind class
    emoji?: string;
}
