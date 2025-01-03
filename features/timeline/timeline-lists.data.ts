import {
    BriefcaseIcon,
    CodeBracketIcon,
    GlobeEuropeAfricaIcon,
    BuildingOfficeIcon,
    UsersIcon,
    HomeIcon,
    SunIcon,
} from '@heroicons/react/24/solid';
import { TimelineItemModel } from '@/features/timeline/timeline-item.model';

export const timeline2023: TimelineItemModel[] = [
    {
        content: 'Bought our',
        target: 'first house',
        date: 'May',
        icon: HomeIcon,
        iconBackground: 'bg-blue-600',
    },
    {
        content: 'Adopted two',
        target: 'cats',
        date: 'December',
        icon: SunIcon,
        iconBackground: 'bg-blue-600',
        emoji: '🐈🐈‍⬛',
    },
];

export const timeline2022: TimelineItemModel[] = [
    {
        content: 'Started a new job with',
        target: 'Kate Innovations',
        postfix: 'as a frontend developer',
        href: 'https://kateinnovations.com/',
        date: 'February',
        icon: BriefcaseIcon,
        iconBackground: 'bg-kate',
    },
    {
        content: 'Became frontend lead at',
        target: 'Kate Innovations',
        href: 'https://kateinnovations.com/',
        date: 'October',
        icon: BriefcaseIcon,
        iconBackground: 'bg-kate',
    },
];

export const timeline2021: TimelineItemModel[] = [
    {
        content: 'Started building this',
        target: 'portfolio',
        href: 'https://github.com/janekkkk/portfolio',
        date: 'August',
        icon: CodeBracketIcon,
        iconBackground: 'bg-blue-600',
    },
    {
        content: 'Helping improving the DAMP web app for',
        target: 'Ohra/Nationale Nederlanden',
        postfix: 'for Luminis',
        href: 'https://www.ohra.nl/',
        date: 'January',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
];

export const timeline2020: TimelineItemModel[] = [
    {
        content: 'Started',
        target: 'living together',
        date: 'September',
        icon: UsersIcon,
        iconBackground: 'bg-blue-600',
        emoji: '🔑️',
    },
    {
        content: 'Helped improving the Magister.me web app for',
        target: 'Iddink',
        postfix: 'for Luminis',
        date: 'February',
        href: 'https://www.iddinkgroup.com/',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Created the new web app for',
        target: 'Link',
        postfix: 'for Luminis',
        date: 'January',
        href: 'https://www.linknederland.nl/',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
];

export const timeline2019: TimelineItemModel[] = [
    {
        content: 'Helped improving the hybrid app for',
        target: 'Remeha/BDR',
        postfix: 'for Luminis',
        href: 'https://www.bdrthermeagroup.com/',
        date: 'October',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Created the new hybrid app for',
        target: 'Jifeline',
        postfix: 'for Luminis',
        href: 'https://www.jifeline.com/',
        date: 'January',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
];

export const timeline2018: TimelineItemModel[] = [
    {
        content: 'Started my own company',
        target: 'Browsy',
        href: 'https://www.browsy.nl/',
        date: 'September',
        icon: GlobeEuropeAfricaIcon,
        iconBackground: 'bg-green-500',
    },
    {
        content: 'Helped building the Omons platform for',
        target: 'Omons/Alliander',
        postfix: 'for Luminis',
        href: 'https://www.luminis.eu/nl/cases/omons/',
        date: 'July',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Created the HIMMS conference website for',
        target: 'Healthcare Information and Management Systems Society',
        postfix: 'for Luminis',
        href: 'https://www.himss.org/',
        date: 'June',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Started my software engineer/consultant career at',
        target: 'Luminis',
        href: 'https://www.luminis.eu/',
        date: 'June',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Finished my bachelor degree at',
        target: 'HAN University of Applied Sciences',
        href: 'https://www.han.nl/',
        date: 'May',
        icon: BuildingOfficeIcon,
        iconBackground: 'bg-han',
    },
];
