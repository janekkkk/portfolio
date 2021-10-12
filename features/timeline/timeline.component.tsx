import React, { useState } from 'react';
import TimelineItem from '@/features/timeline/timeline-item/timeline-item.component';
import { timeline2018, timeline2019, timeline2020, timeline2021 } from '@/features/timeline/timline-lists.data';
import classNames from 'classnames';

export default function Timeline({ className = '' }): JSX.Element {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const toggle = (): void => {
        setIsHidden(!isHidden);
        window.location = `${('' + window.location).replace(/#[A-Za-z0-9_]*$/, '')}#timeline` as unknown as Location;
    };

    return (
        <div className={className} id="timeline">
            <h2 className="block text-2xl md:text-4xl">Timeline</h2>
            <p>
                You can also{' '}
                <a href="/CV.pdf" target="_blank">
                    download my resume
                </a>{' '}
                or contact me at <a href="mailto:iam@janekozga.nl">iam@janekozga.nl</a>
            </p>

            <div className="mt-5 block">
                <h3 className="block">2021</h3>

                <ul className="block">
                    {timeline2021.map((timelineItem, index) => (
                        <li key={index + timelineItem.date} className="pb-8 last:pb-0">
                            <TimelineItem timeline={timeline2021} timelineItem={timelineItem} index={index} />
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="border border-gray-200 dark:border-gray-600 w-full my-8" />

            <div>
                <h3 className="block">2020</h3>

                <ul>
                    {timeline2020.map((timelineItem, index) => (
                        <li key={index + timelineItem.date} className="pb-8 last:pb-0">
                            <TimelineItem timeline={timeline2020} timelineItem={timelineItem} index={index} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={'mt-4 ' + classNames({ hidden: !isHidden })} onClick={() => toggle()}>
                <p className="hover:cursor-pointer">Read all timelines {'->'}</p>
            </div>

            <div className={classNames({ hidden: isHidden })}>
                <hr className="border border-gray-200 dark:border-gray-600 w-full my-8" />

                <div>
                    <h3 className="block">2019</h3>

                    <ul>
                        {timeline2019.map((timelineItem, index) => (
                            <li key={index + timelineItem.date} className="pb-8 last:pb-0">
                                <TimelineItem timeline={timeline2019} timelineItem={timelineItem} index={index} />
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className="border border-gray-200 dark:border-gray-600 w-full my-8" />

                <div>
                    <h3 className="block">2018</h3>

                    <ul>
                        {timeline2018.map((timelineItem, index) => (
                            <li key={index + timelineItem.date} className="pb-8 last:pb-0">
                                <TimelineItem timeline={timeline2018} timelineItem={timelineItem} index={index} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={'mt-4 ' + classNames({ hidden: isHidden })} onClick={() => toggle()}>
                    <p className="hover:cursor-pointer">Hide timelines</p>
                </div>
            </div>
        </div>
    );
}
