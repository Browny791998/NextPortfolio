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
          <Image src="/images/aboutImg.png" className={styles.aboutImage}  alt="Your Image" width={450} height={450} />
        </motion.div>
      </div>
      <div className="w-3/5 mt-14 relative">
       <motion.div  animate={{ y: [0, -3,0] }}
  transition={{ repeat: Infinity, duration: 2 }}><Image  src='/images/space-planet-svg-bundle-space-planet_10.svg' alt="plant-image" width={80} height={80} className="absolute right-12 md:hidden" /></motion.div> 
        {/* Paragraph container */}
        <motion.div >
            <h1 className="font-extrabold text-3xl my-3 md:text-center text-pink-700">About Me</h1>
          <p className="mt-3 leading-8 md:text-center md:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti sapiente minus aliquam voluptatibus molestias blanditiis nam architecto, error, laudantium vel maiores in similique eos aut distinctio. Consequatur, aut dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti sapiente minus aliquam voluptatibus molestias blanditiis nam architecto, error, laudantium vel maiores in similique eos aut distinctio. Consequatur, aut dolorum.</p>
        </motion.div>
      </div>
    </section>
    </>
 )
}