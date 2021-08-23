import React from 'react';
import TimelineItem from '@/features/timeline/timeline-item/timeline-item.component';
import { timeline2018, timeline2019, timeline2020, timeline2021 } from '@/features/timeline/timline-lists.data';

export default function Timeline(): JSX.Element {
    return (
        <div className="flow-root">
            <h2 className="text-2xl md:text-4xl">Timeline</h2>

            <div>
                <h3>2021</h3>

                <ul className="-mb-8">
                    {timeline2021.map((timelineItem, index) => (
                        <li key={index + timelineItem.date}>
                            <TimelineItem timeline={timeline2021} timelineItem={timelineItem} index={index} />
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="border border-gray-200 dark:border-gray-600 w-full my-8" />

            <div>
                <h3>2020</h3>

                <ul className="-mb-8">
                    {timeline2020.map((timelineItem, index) => (
                        <li key={index + timelineItem.date}>
                            <TimelineItem timeline={timeline2020} timelineItem={timelineItem} index={index} />
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="border border-gray-200 dark:border-gray-600 w-full my-8" />

            <div>
                <h3>2019</h3>

                <ul className="-mb-8">
                    {timeline2019.map((timelineItem, index) => (
                        <li key={index + timelineItem.date}>
                            <TimelineItem timeline={timeline2019} timelineItem={timelineItem} index={index} />
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="border border-gray-200 dark:border-gray-600 w-full my-8" />

            <div>
                <h3>2018</h3>

                <ul className="-mb-8">
                    {timeline2018.map((timelineItem, index) => (
                        <li key={index + timelineItem.date}>
                            <TimelineItem timeline={timeline2018} timelineItem={timelineItem} index={index} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
