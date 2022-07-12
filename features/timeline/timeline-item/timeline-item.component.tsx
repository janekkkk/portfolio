import React from 'react';
import { TimelineItemModel } from '@/features/timeline/timeline-item.model';

export const TimelineItem = ({ timeline, timelineItem, index }): JSX.Element => {
    const getPostfix = (item: TimelineItemModel): string => {
        if (item.postfix) {
            return ` ${item.postfix}`;
        }

        return '';
    };

    return (
        <div className="relative">
            {index !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
            ) : null}
            <div className="relative flex space-x-3">
                <div>
                    <span
                        className={`${timelineItem.iconBackground} h-8 w-8 rounded-full flex items-center justify-center
                         ring-8 ring-white`}>
                        <timelineItem.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                        <p className="text-sm text-gray-500">
                            {timelineItem.content}{' '}
                            {timelineItem.href ? (
                                <a
                                    href={timelineItem.href}
                                    target="_blank"
                                    className="font-medium text-gray-900"
                                    rel="noreferrer">
                                    {timelineItem.target}
                                </a>
                            ) : (
                                <span className="font-medium text-gray-900">{timelineItem.target}</span>
                            )}
                            {getPostfix(timelineItem)}
                        </p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={timelineItem.datetime}>{timelineItem.date}</time>
                    </div>
                </div>
            </div>
        </div>
    );
};
