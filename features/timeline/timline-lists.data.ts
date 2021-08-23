import { BriefcaseIcon, CodeIcon, GlobeIcon, OfficeBuildingIcon, UserIcon } from '@heroicons/react/solid';
import { TimelineItemModel } from '@/features/timeline/timeline-item.model';

export const timeline2021: TimelineItemModel[] = [
    {
        content: 'Started building this',
        target: 'portfolio',
        date: 'August',
        icon: CodeIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        content: 'Helping improving the DAMP web app for',
        target: 'Ohra/Nationale Nederlanden',
        href: 'https://www.ohra.nl/',
        date: 'January',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
];

export const timeline2020: TimelineItemModel[] = [
    {
        content: 'Started learning',
        target: 'React',
        date: 'December',
        icon: CodeIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        content: 'Started',
        target: 'living together',
        date: 'September',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
        emoji: '🔑️',
    },
    {
        content: 'Helped improving the Magister.me web app for',
        target: 'Iddink',
        date: 'February',
        href: 'https://www.iddinkgroup.com/',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Created the new web app for',
        target: 'Link',
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
        href: 'https://www.bdrthermeagroup.com/',
        date: 'October',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Created the new hybrid app for',
        target: 'Jifeline',
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
        icon: GlobeIcon,
        iconBackground: 'bg-green-500',
    },
    {
        content: 'Helped building the Omons platform for',
        target: 'Omons/Alliander',
        href: 'https://www.luminis.eu/nl/cases/omons/',
        date: 'July',
        icon: BriefcaseIcon,
        iconBackground: 'bg-luminis',
    },
    {
        content: 'Created the HIMMS conference website for',
        target: 'Healthcare Information and Management Systems Society',
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
        icon: OfficeBuildingIcon,
        iconBackground: 'bg-han',
    },
];
