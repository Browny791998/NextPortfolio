import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool,MdWork,Mdwork } from 'react-icons/md';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FC, ReactNode } from 'react';

export default function Timeline() {
    const timelineVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    // Custom Timeline Element component with in-view animation
    const AnimatedTimelineElement = ({ children, ...props }) => {
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
            <section className="bg-[linear-gradient(to_right,#EAEAEA,#DBDBDB,#F2F2F2,#ADA996)] dark:bg-[linear-gradient(to_right,#121212,#2C2C2C,#383838,#444444)]">
                <VerticalTimeline>
                    <AnimatedTimelineElement
                        visible={true}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'transparent',
                            color: '#fff',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                            border: '2px solid black',
                            boxShadow: '0 0 4px skyblue, 0 0 8px rgba(255, 255, 255, 0.5)',
                            marginBottom: '15px'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid black' }}

                        iconStyle={{
                            backgroundImage: "url('images/earth.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title text-black dark:text-white">
                        Dagon University (Computer Science Department)
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-black dark:text-white">
                        [2015-2019]
                        </h4>
                        <p className="text-black dark:text-white">
                        learn programming theory and frontend,backend languages
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
                            border: '2px solid black',
                            boxShadow: '0 0 4px skyblue, 0 0 8px rgba(255, 255, 255, 0.5)',
                            marginBottom: '15px'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid black' }}

                        iconStyle={{
                            backgroundImage: "url('images/space-planet-svg-bundle-space-planet_4.svg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-black dark:text-white">
                            Dagon University (Computer Science Department)
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-black dark:text-white">
                           [2015-2019]
                        </h4>
                        <p className="text-black dark:text-white">
                            learn programming theory and frontend,backend languages
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
                            border: '2px solid black',
                            boxShadow: '0 0 4px skyblue, 0 0 8px rgba(255, 255, 255, 0.5)',
                            marginBottom: '15px'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid black' }}

                        iconStyle={{
                            backgroundImage: "url('images/space-planet-svg-bundle-space-planet_3.svg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-black dark:text-white">
                            Dagon University (Computer Science Department)
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-black dark:text-white">
                           [2015-2019]
                        </h4>
                        <p className="text-black dark:text-white">
                            learn programming theory and frontend,backend languages
                        </p>
                    </AnimatedTimelineElement>
                </VerticalTimeline>
            </section>
        </>
    );
}
