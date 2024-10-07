import Image from "next/image"
import { motion } from "framer-motion";
import styles from "./about.module.scss";
export default function About() {
  return (
    <>
      <section className="flex flex-row pt-16 justify-evenly md:flex-col md:items-center gap-2" id="about" >
        <div className="w-2/5 md:hidden">
          {/* Image container */}
          <motion.div >
            <Image src="/images/aboutImg.png" className={styles.aboutImage} alt="Your Image" width={450} height={450} />
          </motion.div>
        </div>
        <div className="w-3/5 mt-14 relative">
          <motion.div animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}><Image src='/images/space-planet-svg-bundle-space-planet_10.svg' alt="plant-image" width={80} height={80} className="absolute right-12 md:hidden" /></motion.div>
          {/* Paragraph container */}
          <motion.div >
            <h1 className="font-extrabold text-3xl my-3 md:text-center text-pink-700">About Me</h1>
            <p className="mt-3 leading-8 mb-5  md:text-sm">
              A Web Developer with over two years of experience in both frontend and backend development, skilled in PHP, Laravel, Python, Flask, Angular, Vue, and building dynamic, scalable web applications. Proficient in C# and Java, with experience creating projects independently using React, Next.js, and Node.js. Familiar with design tools like Figma and Adobe XD, and have a working knowledge of Docker. Always eager to learn new technologies and collaborate on user-centric solutions. Seeking opportunities to apply my experience as a frontend or backend developer.

            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}