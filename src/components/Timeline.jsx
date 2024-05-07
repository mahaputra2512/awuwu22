import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="16 Februari 2023"
                    iconStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Pembukaan Pendaftaran CTF dan Seminar</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                    date="4 April 2023"
                    iconStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Penutupan Pendaftaran CTF</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                    date="12 April 2023"
                    iconStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Penutupan Pendaftaran Seminar</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                    date="7 April 2023"
                    iconStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Technical Meeting Babak Penyisihan CTF</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                    date="8 April 2023"
                    iconStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Babak Penyisihan CTF</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                    date="6 Mei 2023"
                    iconStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Technical Meeting Babak Final CTF</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                    date="13 Mei 2023"
                    iconStyle={{ background: 'rgb(1, 200, 239)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Babak Final CTF</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                    date="14 Mei 2023"
                    iconStyle={{ background: 'rgb(229,19,118)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Seminar dan Awarding</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}

export default Timeline;