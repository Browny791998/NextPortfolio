import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FC, ReactNode } from 'react';

export default function Timeline() {
    const timelineVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    interface AnimatedTimelineElementProps {
        children: ReactNode;
      }

    // Custom Timeline Element component with in-view animation
    const AnimatedTimelineElement: FC<AnimatedTimelineElementProps> = ({ children, ...props }) => {
        const [ref, inView] = useInView({
            triggerOnce: true, // Animates only once when the element comes into view
            threshold: 0.2, // Trigger the animation when 20% of the element is visible
        });

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={timelineVariants}
            >
                <VerticalTimelineElement {...props}>
                    {children}
                </VerticalTimelineElement>
            </motion.div>
        );
    };

    return (
        <>
            <section className="bg-stone-600 dark:bg-transparent">
                <VerticalTimeline>
                    <AnimatedTimelineElement
                    visible={true}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                            border: '2px solid #fff',
                            boxShadow: '0 0 4px skyblue, 0 0 8px rgba(255, 255, 255, 0.5)'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{
                            backgroundImage: "url('images/earth.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </AnimatedTimelineElement>

                    <AnimatedTimelineElement
                    position="right"
                    visible={true}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                            border: '2px solid #fff',
                            boxShadow: '0 0 4px skyblue, 0 0 8px rgba(255, 255, 255, 0.5)'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{
                            backgroundImage: "url('images/earth.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </AnimatedTimelineElement>

                    <AnimatedTimelineElement
                    visible={true}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                            border: '2px solid #fff',
                            boxShadow: '0 0 4px skyblue, 0 0 8px rgba(255, 255, 255, 0.5)'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{
                            backgroundImage: "url('images/earth.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </AnimatedTimelineElement>
                </VerticalTimeline>
            </section>
        </>
    );
}
