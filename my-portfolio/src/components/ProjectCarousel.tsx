'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeft, ChevronRight, Github, Info } from 'lucide-react'
import Link from 'next/link'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import Image from 'next/image';

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  detailedDescription: string
  challenges: string[]
  outcomes: string[]
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    detailedDescription: "This e-commerce platform provides a comprehensive solution for online retail. It features a responsive front-end built with React, a robust back-end powered by Node.js and Express, and uses MongoDB for data storage. The platform includes user authentication, product catalog management, shopping cart functionality, and secure payment processing through Stripe integration.",
    challenges: [
      "Implementing secure user authentication and authorization",
      "Designing a scalable database schema for products and orders",
      "Integrating and testing the Stripe payment gateway",
    ],
    outcomes: [
      "Increased conversion rates by 25% through an optimized checkout process",
      "Reduced server response times by 40% through efficient database queries",
      "Successfully processed over 10,000 orders within the first month of launch",
    ],
  },
  {
    title: "Task Management App",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    detailedDescription: "This task management application enables teams to collaborate effectively by providing real-time updates on task progress. Built with Vue.js and Firebase, it offers a responsive and intuitive interface for creating, assigning, and tracking tasks. The app utilizes Vuex for state management and Tailwind CSS for a clean, modern design.",
    challenges: [
      "Implementing real-time synchronization of task updates across multiple clients",
      "Designing an intuitive user interface for complex task relationships",
      "Optimizing performance for large numbers of tasks and users",
    ],
    outcomes: [
      "Increased team productivity by 30% through improved task visibility and collaboration",
      "Reduced project completion times by 20% due to more efficient task allocation",
      "Achieved a 95% user satisfaction rate based on post-implementation surveys",
    ],
  },
  {
    title: "Weather Forecast Dashboard",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Redux", "D3.js", "OpenWeatherMap API"],
    githubUrl: "https://github.com/yourusername/weather-forecast-dashboard",
    detailedDescription: "This weather forecast dashboard offers users a comprehensive view of current and future weather conditions. Built with React and Redux, it fetches data from the OpenWeatherMap API and presents it through interactive charts and graphs created with D3.js. Users can view detailed forecasts, historical weather data, and custom alerts for specific locations.",
    challenges: [
      "Integrating and optimizing calls to the OpenWeatherMap API",
      "Creating responsive and interactive data visualizations with D3.js",
      "Implementing efficient state management for large amounts of weather data",
    ],
    outcomes: [
      "Achieved 99.9% uptime and real-time data updates",
      "Increased user engagement by 40% through interactive weather visualizations",
      "Expanded the user base to over 100,000 active monthly users",
    ],
  },
]

function ProjectDialog({ project }: { project: Project }) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="hover:bg-slate-400">
            Details
          </Button>
        </DialogTrigger>
  
        {/* Customized DialogContent */}
        <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
          <DialogHeader className="mb-4">
            
            <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
              {project.description}
            </DialogDescription>
          
            <DialogClose asChild>
            <Button className="text-gray-500 dark:text-white p-3 absolute right-2 -top-1 hover:bg-slate-300 dark:hover:bg-black rounded-full">
              ✕
            </Button>
          </DialogClose>
          </DialogHeader>
  
          {/* Content with spacing and customization */}
          <div className="grid gap-4 py-4">
            <div>
              <h4 className="mb-2 font-medium text-gray-800 dark:text-gray-100">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
  
            <div>
              <h4 className="mb-2 font-medium text-gray-800 dark:text-gray-100">Detailed Description:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{project.detailedDescription}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  

  export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextProject = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === projects.length ? 0 : prevIndex + 1
      );
    };
  
    const prevProject = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
      );
    };
  
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     nextProject();
    //   }, 3000);
    //   return () => clearInterval(interval);
    // }, [currentIndex]);
  
    return (
      <div className="mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="mr-4 rounded-full shadow-sm"
            onClick={prevProject}
          >
            <BsArrowLeftCircleFill className="hover:text-[#0077b5] text-xl text-black dark:text-white" />
          </Button>
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 } }}
              >
                <Card className="h-full py-4">
                  <CardHeader>
                    <div className="mb-4">
                      <Image
                        src="/images/test.jpg"
                        alt="my project"
                        height="900"
                        width="900"
                        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </div>
                    <CardTitle>{projects[currentIndex].title}</CardTitle>
                    <CardDescription>{projects[currentIndex].description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-white text-black shadow-sm dark:bg-black dark:text-white dark:shadow-neutral-500"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-5">
                    <Button variant="outline" asChild>
                      <Link href={projects[currentIndex].githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </Link>
                    </Button>
                    <ProjectDialog project={projects[currentIndex]} />
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="ml-4 rounded-full shadow-sm"
            onClick={nextProject}
          >
            <BsArrowRightCircleFill className="hover:text-[#0077b5] text-xl text-black dark:text-white" />
          </Button>
        </div>
      </div>
    );
  }