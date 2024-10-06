"use client"
import Image from "next/image";
import styles from "./home.module.scss";
import Typewriter from 'typewriter-effect';
import ParticleBackground from "@/components/ParticleBackground";
import { fadeIn } from "@/app/lib/variants";
import { motion, useInView } from "framer-motion";
import Preloader from "@/components/PreLoader";
import About from "./pages/about";
import Timeline from "./pages/timeline";
import Work from "./pages/work";
import { useRef } from "react";
export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <Preloader />
      {/* Home Section */}
      <section id="home" className={`pt-40 lg:h-[50vh]  h-[90vh] overflow-hidden ${styles.mask1}`}>
        <ParticleBackground />
        <div className="text-center w-[50%] mx-auto my-0 ">
          <motion.h1 
           ref={ref}
           initial={{ opacity: 0, y: 50 }}  
           animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }} className="dark:text-white sm:text-lg text-4xl font-extrabold m-10">Ye Htet Aung - <span className='text-pink-700'>Web Developer</span></motion.h1>

          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Enjoy coding and Exploring new Techs')
                .callFunction(() => {
                })
                .deleteAll()
                .callFunction(() => {
                })
                .start();
            }}
          />
        </div>
        <Image src="/images/half-planet.png" alt="" width='850' height='700' className="relative -bottom-50 mx-auto sm:mt-48" />
      </section>
      {/* Home Section */}

      {/* About Section */}
      <About />
      {/* About Section */}

      {/* Timeline Section */}
      <Timeline />
      {/* Timeline Section */}
      {/* Work Section */}
      <Work />
      {/* Work Section */}
    </>
  );
}
