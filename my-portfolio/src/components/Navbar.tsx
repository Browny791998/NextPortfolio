"use client"
import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "@next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsTwitterX, BsLink } from "react-icons/bs";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
})

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

const navLinks = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/work", title: "My Work" },
    { url: "/contact", title: "Contact" },
];
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return <>


        <nav className="fixed flex justify-between  w-full  backdrop-filter backdrop-blur-md px-4 py-1 z-50 align-items-center">
            {/* <Link href="/"><Image src="/images/yha-logo.png" alt="My Logo" className=" inline-block mr-4 bg-slate-950 rounded-full dark:bg-transparent dark:rounded-none" width="95" height="95" /></Link> */}
            <Link href="/"><Image src="/images/yha-logo-edit.png" alt="My Logo" className=" inline-block mr-4" width="50" height="50" /></Link>

            <motion.button onClick={handleClick}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundImage: `url('/images/earth.png')` }}
                className={`flex-col justify-center items-center w-10 h-10 mt-2  rounded-full bg-center bg-repeat bg-contain sm:flex hidden z-50`}
            >
                <span className={`bg-gray-50 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} ></span>
                <span className={`bg-gray-50 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                        'opacity-0' : 'opacity-100'
                    }`} ></span>
                <span className={`bg-gray-50 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} ></span>

            </motion.button>

            <ul className={`flex items-center gap-10 justify-end ${spaceGrotesk.className} sm:hidden`}>
                <li className="mr-4"><Link href="#" className="dark:text-white font-bold hover:underline underline-offset-8 decoration-pink-700">Home</Link></li>
                <li className="mr-4"><Link href="#about" className="dark:text-white font-bold hover:underline underline-offset-8 decoration-pink-700">About</Link></li>
                <li className="mr-4"><Link href="#work" className="dark:text-white font-bold hover:underline underline-offset-8 decoration-pink-700">My Work</Link></li>
                <li><a href="#contact" className="dark:text-white font-bold hover:underline underline-offset-8 decoration-pink-700">Contact</a></li>
            </ul>
            <ul className={`flex items-center gap-10 justify-end ${spaceGrotesk.className} sm:hidden`}>
                <li><Link href="#" ><BsLinkedin className="hover:text-[#0077b5] text-xl" /></Link></li>
                <li><Link href="#" ><BsGithub className="hover:text-gray-400 text-xl" /></Link></li>
                <li><Link href="#" ><BsFacebook className="hover:text-[#3b5998] text-xl" /></Link></li>
                <li><Link href="#" ><BsTwitterX className="hover:text-gray-400 text-xl" /></Link></li>
            </ul>

            {
                isOpen && (
                    <>
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="sm:block absolute bg-gray-950 w-[100%]  backdrop-filter backdrop-blur-md top-0 right-0  px-8 py-20 uppercase  hidden">
                            <ul className={`flex flex-col items-center justify-between min-h-[380px] ${spaceGrotesk.className}`}>
                                <li onClick={()=> setIsOpen(false)} className="flex gap-2 transition-all">
                                    <motion.span whileHover={{ rotate: 360 }} transition={{ ease: 'easeInOut', duration: 1 }}><Image width='20' height='20' src="/images/space-planet-svg-bundle-space-planet_2.svg" alt="" /></motion.span><Link href="#" className="text-white font-bold ">Home</Link></li>
                                <li onClick={()=> setIsOpen(false)} className="flex gap-2"><Link href="#about" className="text-white font-bold">About</Link><motion.span whileHover={{ rotate: 360 }} transition={{ ease: 'easeInOut', duration: 1 }}><Image width='20' height='20' src="/images/space-planet-svg-bundle-space-planet_7.svg" alt="" /></motion.span></li>
                                <li onClick={()=> setIsOpen(false)} className="flex gap-2"><motion.span whileHover={{ rotate: 360 }} transition={{ ease: 'easeInOut', duration: 1 }}><Image width='20' height='20' src="/images/space-planet-svg-bundle-space-planet_9.svg" alt="" /></motion.span><Link href="#work" className="text-white font-bold">My Work</Link></li>
                                <li onClick={()=> setIsOpen(false)} className="flex gap-2"><a href="#contact" className="text-white font-bold">Contact</a><motion.span whileHover={{ rotate: 360 }} transition={{ ease: 'easeInOut', duration: 1 }}><Image width='20' height='20' src="/images/space-planet-svg-bundle-space-planet_11.svg" alt="" /></motion.span></li>
                            </ul>

                            <ul className={`flex items-center mt-16 justify-center gap-5 ${spaceGrotesk.className}`}>
                                <li><Link href="#" ><BsLinkedin className="hover:text-[#0077b5] text-xl text-white" /></Link></li>
                                <li><Link href="#" ><BsGithub className="hover:text-gray-400 text-xl text-white" /></Link></li>
                                <li><Link href="#" ><BsFacebook className="hover:text-[#3b5998] text-xl text-white" /></Link></li>
                                <li><Link href="#" ><BsTwitterX className="hover:text-gray-400 text-xl text-white" /></Link></li>
                            </ul>
                        </motion.div>
                    </>
                )
            }

        </nav>
    </>
}