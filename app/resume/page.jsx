"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDocker,
  FaLaravel,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaCode,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaSkype,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description: [
    "I am a Web Developer with a strong interest in building functional, responsive web applications that provide an optimal user experience. Experienced in developing modern interfaces and integrating systems with APIs, I am accustomed to working in a detailed, structured, and solution-oriented manner.",
    "I always strive to write clean, maintainable, and efficient code to ensure applications run stably and scalably. With a strong commitment to continuous learning, I stay updated on the latest technological advancements to enhance development quality and deliver the best results in every project.",
  ],
  info: [
    {
      icon: <FaUser />,
      fieldName: "Name",
      fieldValue: "Soba Danu Wahab",
    },
    {
      icon: <FaPhone />,
      fieldName: "Phone",
      fieldValue: "(+62) 813 1433 3352",
    },
    {
      icon: <FaBriefcase />,
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      icon: <FaSkype />,
      fieldName: "Skype",
      fieldValue: "danu.14",
    },
    {
      icon: <FaGlobe />,
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      icon: <FaEnvelope />,
      fieldName: "Email",
      fieldValue: "sdanuw@gmail.com",
    },
    {
      icon: <FaCode />,
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      icon: <FaGlobe />,
      fieldName: "Languages",
      fieldValue: "Bahasa, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Journey",
  subtitle: "Experience",
  description: [
    "I am a Web Developer with experience in designing and developing end-to-end web applications. I am accustomed to integrating modern frontends with structured backends, implementing authentication, data management, and interactive dashboards.",
    "I am solution-oriented, focused on code quality and user needs, ensuring that every project delivers optimal performance and scalability.",
  ],
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
      type: "Full Time",
      location: "Remote",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "2020 - 2021",
      type: "Internship",
      location: "Hybrid",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
      type: "Freelance",
      location: "Remote",
    },
    {
      company: "Platform e-ticket event",
      position: "Front-End Developer Intern",
      duration: "2025 - 2026",
      type: "Internship",
      location: "On-site",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
      type: "Full Time",
      location: "On-site",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Academic Background",
  subtitle: "Education",
  description: [
    "My education has been the main foundation in developing my analytical, technical, and professional skills. I combine theoretical understanding with practical experience to produce effective and adaptive solutions.",
    "This balanced approach allows me to adapt quickly to technological developments and deliver innovative solutions that meet industry standards and user expectations.",
  ],
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2022",
      grade: "Advanced",
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track",
      duration: "2021",
      grade: "Professional",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2019 - 2020",
      grade: "Intermediate",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2016 - 2018",
      grade: "Professional",
    },
    {
      institution: "University Sultan Ageng Tirtayasa",
      degree: "Electrical Engineering",
      duration: "2012 - 2016",
      grade: "Bachelor Degree",
    },
  ],
};

// skills data
const skills = {
  title: "Technical Expertise",
  subtitle: "Skills",
  description: [
    "I have expertise in end-to-end web application development, from interface design to backend system integration. Experienced in using modern JavaScript frameworks to build interactive UIs, manage state, and connect applications with RESTful APIs.",
    "My technical stack includes both frontend and backend technologies, allowing me to build complete, scalable web applications that meet modern web standards and user expectations.",
  ],
  categories: [
    {
      name: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", level: 90 },
        { icon: <FaCss3 />, name: "CSS3", level: 85 },
        { icon: <FaJs />, name: "JavaScript", level: 88 },
        { icon: <SiTypescript />, name: "TypeScript", level: 80 },
        { icon: <FaReact />, name: "React.js", level: 85 },
        { icon: <SiNextdotjs />, name: "Next.js", level: 82 },
        { icon: <SiRedux />, name: "Redux", level: 78 },
        { icon: <SiTailwindcss />, name: "TailwindCSS", level: 90 },
      ],
    },
    {
      name: "Backend & Database",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", level: 80 },
        { icon: <SiExpress />, name: "Express.js", level: 78 },
        { icon: <FaLaravel />, name: "Laravel", level: 75 },
        { icon: <SiMongodb />, name: "MongoDB", level: 82 },
        { icon: <SiMysql />, name: "MySQL", level: 80 },
        { icon: <SiPostgresql />, name: "PostgreSQL", level: 75 },
        { icon: <SiPrisma />, name: "Prisma", level: 70 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { icon: <FaFigma />, name: "Figma", level: 85 },
        { icon: <FaDocker />, name: "Docker", level: 70 },
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

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

  // Component untuk menampilkan description dengan format yang rapi
  const Description = ({ paragraphs }) => (
    <div className="space-y-4 max-w-[700px] mx-auto xl:mx-0">
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-white/60 leading-relaxed text-justify xl:text-left"
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            hyphens: "auto",
          }}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.6, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-16 xl:py-20 relative overflow-hidden"
    >
      {/* Background Gradient Effect - Sama seperti Services */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <Tabs
          defaultValue="experience"
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]"
        >
          {/* Custom Tabs List */}
          <TabsList className="flex flex-row xl:flex-col w-full xl:w-[280px] h-fit bg-transparent gap-3 p-1">
            {[
              {
                value: "experience",
                label: "Experience",
              },
              {
                value: "education",
                label: "Education",
              },
              { value: "skills", label: "Skills" },
              { value: "about", label: "About Me" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full px-6 py-4 bg-[#1E1E24] hover:bg-[#2A2A33] data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:border-l-4 data-[state=active]:border-accent rounded-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl group-data-[state=active]:text-accent transition-colors">
                    {tab.icon}
                  </span>
                  <span className="font-medium">{tab.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content Area */}
          <div className="flex-1 min-h-[70vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* Experience Tab */}
                <TabsContent value="experience" className="w-full mt-0">
                  <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-accent border-accent/30 bg-accent/10"
                        >
                          {experience.subtitle}
                        </Badge>
                      </div>
                      <h3 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {experience.title}
                      </h3>
                      <Description paragraphs={experience.description} />
                    </div>

                    <ScrollArea className="h-[450px] pr-4">
                      <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                      >
                        {experience.items.map((item, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group"
                          >
                            <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                              <CardContent className="p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-3 flex-wrap">
                                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                        {item.duration}
                                      </span>
                                      <span className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-sm">
                                        {item.type}
                                      </span>
                                      <span className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-sm flex items-center gap-1">
                                        <FaMapMarkerAlt className="text-xs" />
                                        {item.location}
                                      </span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                                      {item.position}
                                    </h4>
                                    <div className="flex items-center gap-2 text-white/60">
                                      <FaBriefcase className="text-sm" />
                                      <span>{item.company}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education" className="w-full mt-0">
                  <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-accent border-accent/30 bg-accent/10"
                        >
                          {education.subtitle}
                        </Badge>
                      </div>
                      <h3 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {education.title}
                      </h3>
                      <Description paragraphs={education.description} />
                    </div>

                    <ScrollArea className="h-[450px] pr-4">
                      <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                      >
                        {education.items.map((item, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                              <CardContent className="p-6">
                                <div className="space-y-3">
                                  <div className="flex items-center gap-3 flex-wrap">
                                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                      {item.duration}
                                    </span>
                                    <Badge
                                      variant="secondary"
                                      className="bg-white/5 text-white/70 hover:bg-white/10"
                                    >
                                      {item.grade}
                                    </Badge>
                                  </div>
                                  <h4 className="text-xl font-semibold text-white">
                                    {item.degree}
                                  </h4>
                                  <p className="text-white/60 flex items-center gap-2">
                                    <FaGraduationCap className="text-accent" />
                                    {item.institution}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="skills" className="w-full mt-0">
                  <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-accent border-accent/30 bg-accent/10"
                        >
                          {skills.subtitle}
                        </Badge>
                      </div>
                      <h3 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {skills.title}
                      </h3>
                      <Description paragraphs={skills.description} />
                    </div>

                    <ScrollArea className="h-[450px] pr-4">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                      >
                        {skills.categories.map((category, idx) => (
                          <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="space-y-4"
                          >
                            <h4 className="text-lg font-semibold text-white/90 border-l-4 border-accent pl-3">
                              {category.name}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                              {category.skills.map((skill, index) => (
                                <TooltipProvider
                                  key={index}
                                  delayDuration={100}
                                >
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <motion.div
                                        whileHover={{ y: -5 }}
                                        className="group relative"
                                      >
                                        <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none hover:bg-accent/5 transition-all duration-300 cursor-pointer">
                                          <CardContent className="p-6 flex flex-col items-center gap-3">
                                            <div className="text-4xl text-white/80 group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                                              {skill.icon}
                                            </div>
                                            <span className="text-sm font-medium capitalize text-white/70 group-hover:text-accent">
                                              {skill.name}
                                            </span>
                                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                              <motion.div
                                                initial={{ width: 0 }}
                                                animate={{
                                                  width: `${skill.level}%`,
                                                }}
                                                transition={{
                                                  duration: 1,
                                                  delay: index * 0.1,
                                                }}
                                                className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
                                              />
                                            </div>
                                            <span className="text-xs text-white/40">
                                              {skill.level}%
                                            </span>
                                          </CardContent>
                                        </Card>
                                      </motion.div>
                                    </TooltipTrigger>
                                    <TooltipContent
                                      side="top"
                                      className="bg-[#2A2A33] border-white/10 text-white"
                                    >
                                      <p className="font-medium">
                                        {skill.name}
                                      </p>
                                      <p className="text-xs text-white/60">
                                        Proficiency: {skill.level}%
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* About Tab */}
                <TabsContent value="about" className="w-full mt-0">
                  <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-accent border-accent/30 bg-accent/10"
                        >
                          Get to know me
                        </Badge>
                      </div>
                      <h3 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {about.title}
                      </h3>
                      <Description paragraphs={about.description} />
                    </div>

                    <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none">
                      <CardContent className="p-8">
                        <motion.ul
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          {about.info.map((item, index) => (
                            <motion.li
                              key={index}
                              variants={itemVariants}
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                            >
                              <div className="text-2xl bg-accent/10 p-3 rounded-lg text-accent">
                                {item.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm text-white/50">
                                  {item.fieldName}
                                </span>
                                <span className="font-medium text-white">
                                  {item.fieldValue}
                                </span>
                              </div>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>

        {/* CTA Section - Sama seperti Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="mt-16 xl:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-br from-[#232329] to-[#1A1A1F] rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-white/70 text-sm sm:text-base">
                Interested in working together?
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2 whitespace-nowrap">
                Open to opportunities
              </Badge>
              <Link
                href="/contact"
                className="group px-6 py-2 bg-accent text-primary rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Hire Me Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
