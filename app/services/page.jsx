"use client";

import { BsArrowUpRight } from "react-icons/bs";
import {
  HiOutlineDesktopComputer,
  HiOutlineCube,
  HiOutlineCode,
  HiOutlineServer,
} from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    num: "01",
    title: "Website Development",
    description: [
      "Creation of modern, responsive websites tailored to personal and business needs.",
      "Built with best practices for performance, SEO, and user experience.",
    ],
    href: "",
    icon: <HiOutlineDesktopComputer className="text-3xl" />,
    color: "from-blue-500/20 to-cyan-500/20",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    num: "02",
    title: "Web Application",
    description: [
      "Development of web-based applications such as admin dashboards, reporting systems, and data management systems.",
      "Scalable architecture with real-time updates and complex data visualization.",
    ],
    href: "",
    icon: <HiOutlineCube className="text-3xl" />,
    color: "from-purple-500/20 to-pink-500/20",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    num: "03",
    title: "Frontend Development",
    description: [
      "Building an interface using React with a clean and user-friendly design.",
      "Focus on component reusability, state management, and responsive layouts.",
    ],
    href: "",
    icon: <HiOutlineCode className="text-3xl" />,
    color: "from-green-500/20 to-emerald-500/20",
    technologies: ["React", "Redux", "TypeScript", "TailwindCSS"],
  },
  {
    num: "04",
    title: "Backend Development",
    description: [
      "API and backend system development using Laravel / Node.js with a neat and secure structure.",
      "Implementation of authentication, database optimization, and cloud deployment.",
    ],
    href: "",
    icon: <HiOutlineServer className="text-3xl" />,
    color: "from-orange-500/20 to-red-500/20",
    technologies: ["Node.js", "Laravel", "PostgreSQL", "Docker"],
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

// Component untuk menampilkan description dengan format yang rapi
const Description = ({ paragraphs }) => (
  <div className="space-y-4 max-w-[700px] mx-auto xl:mx-0">
    {paragraphs.map((paragraph, index) => (
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3 + index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
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

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
            <Badge
              variant="outline"
              className="px-4 py-2 text-accent border-accent/30 bg-accent/10 hover:bg-accent/20 transition-all duration-300"
            >
              What I Offer
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
          >
            My Services
          </motion.h2>

          <Description
            paragraphs={[
              "I provide comprehensive web development solutions tailored to your specific needs. From responsive websites to complex web applications, I ensure high-quality results with modern technologies and best practices.",
            ]}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02 }}
              className="group relative h-full"
            >
              {/* Gradient Background on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl`}
              />

              <Card className="relative h-full bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 xl:p-8 flex flex-col h-full">
                  {/* Header with Number and Icon */}
                  <div className="flex justify-between items-start mb-4 xl:mb-6">
                    <div className="flex items-center gap-3 xl:gap-4">
                      <span className="text-4xl xl:text-6xl font-black bg-gradient-to-r from-white/20 to-white/5 bg-clip-text text-transparent group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300">
                        {service.num}
                      </span>
                      <div className="text-2xl xl:text-4xl text-white/60 group-hover:text-accent transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                    <Link
                      href={service.href || "#"}
                      className="w-10 h-10 xl:w-14 xl:h-14 rounded-full bg-white/5 group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:rotate-45"
                    >
                      <BsArrowUpRight className="text-white group-hover:text-primary text-lg xl:text-2xl" />
                    </Link>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl xl:text-2xl font-bold text-white mb-3 xl:mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <div className="space-y-2 mb-4 xl:mb-6 flex-grow">
                    {service.description.map((paragraph, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 2.7 + index * 0.1 + i * 0.1,
                          duration: 0.5,
                        }}
                        className="text-white/60 leading-relaxed text-justify xl:text-left text-xs xl:text-sm"
                        style={{
                          textJustify: "inter-word",
                        }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 xl:gap-2 mb-3 xl:mb-4">
                      {service.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 2.8 + index * 0.1 + i * 0.05,
                            duration: 0.4,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-white/5 text-white/70 hover:bg-accent/20 hover:text-accent transition-all duration-300 border-none text-xs xl:text-sm px-2 py-0.5 xl:px-2.5 xl:py-1"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      className="h-[1px] xl:h-[2px] bg-gradient-to-r from-accent to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 xl:w-32 xl:h-32 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 xl:w-40 xl:h-40 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6, ease: "easeOut" }}
          className="mt-16 xl:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-br from-[#232329] to-[#1A1A1F] rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-white/70 text-sm sm:text-base">
                Available for freelance work
              </span>
            </div>
            <Link
              href="/contact"
              className="group px-6 py-2 bg-accent text-primary rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 text-sm xl:text-base flex items-center gap-2"
            >
              Start a Project
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
