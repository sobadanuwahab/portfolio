"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  BsArrowUpRight,
  BsGithub,
  BsCodeSlash,
  BsFillLightningFill,
} from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaChartBar,
  FaShoppingCart,
  FaTasks,
  FaCloud,
  FaUsers,
  FaFileAlt,
  FaPalette,
  FaServer,
  FaCube,
  FaPlug,
  FaCalendarAlt,
  FaDownload,
  FaChartLine,
  FaFilter,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiSocketdotio,
  SiChartdotjs,
  SiExpress,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce website with product filtering, cart management, and responsive design. Built with React and Redux for state management.",
    fullDescription: [
      "A fully responsive e-commerce platform with product catalog, shopping cart, and checkout flow.",
      "Implemented advanced filtering, search functionality, and wishlist features for optimal user experience.",
    ],
    stack: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
    features: [
      { name: "Product Filtering", icon: <FaFilter /> },
      { name: "Shopping Cart", icon: <FaShoppingCart /> },
      { name: "Wishlist", icon: <BsFillLightningFill /> },
      { name: "Responsive", icon: <FaPalette /> },
    ],
    image: "/assets/work/thumb4.PNG",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Task Management App",
    description:
      "Full-stack task management application with real-time updates, team collaboration, and progress tracking.",
    fullDescription: [
      "Complete task management system with user authentication, project boards, and real-time updates.",
      "Features include drag-and-drop tasks, file attachments, comments, and activity logs.",
    ],
    stack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
    ],
    features: [
      { name: "Real-time", icon: <BsFillLightningFill /> },
      { name: "Team Collab", icon: <FaUsers /> },
      { name: "Drag & Drop", icon: <FaCube /> },
      { name: "File Upload", icon: <FaFileAlt /> },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    num: "03",
    category: "frontend",
    title: "Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization, real-time charts, and customizable widgets.",
    fullDescription: [
      "Comprehensive analytics dashboard with multiple chart types and real-time data updates.",
      "Customizable widgets, date range picker, and export functionality for data analysis.",
    ],
    stack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Chart.js", icon: <SiChartdotjs className="text-pink-500" /> },
    ],
    features: [
      { name: "Data Viz", icon: <FaChartBar /> },
      { name: "Real-time", icon: <FaChartLine /> },
      { name: "Export", icon: <FaDownload /> },
      { name: "Date Range", icon: <FaCalendarAlt /> },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://example.com",
    github: "https://github.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.6, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-16 xl:py-20 relative overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5, ease: "easeOut" }}
          className="text-center xl:text-left mb-12 xl:mb-16 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.55, duration: 0.4 }}
          >
            {/* <Badge
              variant="outline"
              className="px-4 py-2 text-accent border-accent/30 bg-accent/10 hover:bg-accent/20 transition-all duration-300"
            >
              My Portfolio
            </Badge> */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.65, duration: 0.5 }}
            className="text-white/60 max-w-2xl mx-auto xl:mx-0 text-justify xl:text-left leading-relaxed"
          >
            Explore my latest work showcasing modern web development techniques,
            innovative solutions, and attention to detail in every project.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row xl:gap-[60px]">
          {/* Project Info Section - Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            className="w-full xl:w-[45%] flex flex-col order-2 xl:order-none"
          >
            <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none h-full">
              <CardContent className="p-6 xl:p-8 flex flex-col h-full">
                {/* Project Number with Gradient */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl xl:text-7xl font-black bg-gradient-to-r from-white/20 to-white/5 bg-clip-text text-transparent">
                    {project.num}
                  </span>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
                </div>

                {/* Category Badge */}
                <Badge
                  variant="outline"
                  className="w-fit px-4 py-2 mb-4 text-accent border-accent/30 bg-accent/10 capitalize flex items-center gap-2"
                >
                  <BsCodeSlash />
                  {project.category} Project
                </Badge>

                {/* Title */}
                <h3 className="text-2xl xl:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="space-y-3 mb-6">
                  {project.fullDescription.map((desc, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.8 + index * 0.1, duration: 0.5 }}
                      className="text-white/60 leading-relaxed text-justify xl:text-left text-sm"
                      style={{
                        textJustify: "inter-word",
                      }}
                    >
                      {desc}
                    </motion.p>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-white/80 font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    <BsFillLightningFill className="text-accent" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 2.9 + index * 0.05,
                          duration: 0.4,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="w-full bg-white/5 text-white/70 hover:bg-accent/20 hover:text-accent transition-all duration-300 border-none py-2 flex items-center gap-2 justify-start"
                        >
                          <span className="text-accent">{feature.icon}</span>
                          <span className="text-xs">{feature.name}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-white/80 font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    <FaCube className="text-accent" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 3.0 + index * 0.05,
                          duration: 0.4,
                        }}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-accent/20 rounded-lg transition-all duration-300 cursor-help group">
                                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                  {item.icon}
                                </span>
                                <span className="text-xs xl:text-sm text-white/70 group-hover:text-accent">
                                  {item.name}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="bg-[#2A2A33] border-white/10 text-white"
                            >
                              <p className="flex items-center gap-2">
                                {item.icon}
                                <span>{item.name}</span>
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Border */}
                <div className="border-t border-white/10 my-6" />

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  {/* Live Project Button */}
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => setHoveredButton("live")}
                            onHoverEnd={() => setHoveredButton(null)}
                            className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-accent/10 hover:bg-accent transition-all duration-300 flex justify-center items-center group cursor-pointer"
                          >
                            <FiExternalLink className="text-accent group-hover:text-primary text-xl xl:text-2xl transition-all duration-300 group-hover:rotate-12" />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-[#2A2A33] border-white/10 text-white"
                        >
                          <p>Live Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/* GitHub Button */}
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => setHoveredButton("github")}
                            onHoverEnd={() => setHoveredButton(null)}
                            className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white/5 hover:bg-accent transition-all duration-300 flex justify-center items-center group cursor-pointer"
                          >
                            <BsGithub className="text-white group-hover:text-primary text-xl xl:text-2xl transition-all duration-300" />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-[#2A2A33] border-white/10 text-white"
                        >
                          <p>View Code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/* Project Counter */}
                  <div className="ml-auto flex items-center gap-2 text-white/40">
                    <span className="text-accent font-bold text-xl">
                      {project.num}
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="text-white/60">0{projects.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Slider Section - Kanan (Hanya Image) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            className="w-full xl:w-[55%] mb-8 xl:mb-0"
          >
            {/* No Card, No Background - Just Image */}
            <div className="relative h-full">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={false}
                className="h-[300px] xl:h-[520px] rounded-xl overflow-hidden relative"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full h-full relative">
                    {/* Image Container - No Background */}
                    <div className="relative w-full h-full group/slide overflow-hidden rounded-xl">
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/slide:scale-110"
                          alt={project.title}
                        />
                      </div>

                      {/* Overlay gradient - muncul saat hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-500 z-10" />

                      {/* Content - muncul saat hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 xl:p-8 translate-y-8 opacity-0 group-hover/slide:translate-y-0 group-hover/slide:opacity-100 transition-all duration-500 z-20">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm"
                          >
                            {project.category}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-white/10 text-white/80 border-white/20 backdrop-blur-sm"
                          >
                            {project.num}
                          </Badge>
                        </div>

                        <h4 className="text-white font-bold text-lg xl:text-xl mb-2 drop-shadow-lg">
                          {project.title}
                        </h4>

                        <p className="text-white/80 text-xs xl:text-sm line-clamp-2 mb-3 drop-shadow">
                          {project.description}
                        </p>

                        {/* Tech Icons Preview */}
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {project.stack.slice(0, 3).map((tech, i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-sm"
                              >
                                <span className="text-white/90 text-sm">
                                  {tech.icon}
                                </span>
                              </div>
                            ))}
                          </div>
                          {project.stack.length > 3 && (
                            <span className="text-white/60 text-xs bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                              +{project.stack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-500 z-20">
                        <Badge className="bg-accent/80 text-white border-none backdrop-blur-sm">
                          View Project
                        </Badge>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Custom Slider Buttons */}
                <WorkSliderBtns
                  containerStyles="absolute bottom-4 right-4 flex gap-2 z-30"
                  btnStyles="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-accent/20 hover:bg-accent transition-all duration-300 flex justify-center items-center backdrop-blur-sm"
                  iconStyles="text-white text-lg xl:text-xl"
                />
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
