"use client";

import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <motion.section
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
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center xl:text-left order-2 xl:order-none"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.55, duration: 0.4 }}
              className="flex justify-center xl:justify-start mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-accent border-accent/30 bg-accent/10 hover:bg-accent/20 transition-all duration-300"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for work
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="h1 mb-4 xl:mb-6"
            >
              <span className="text-white/60 text-xl xl:text-2xl font-normal block mb-2">
                Web Developer
              </span>
              <span className="text-4xl xl:text-6xl font-bold block">
                Hello I'm{" "}
                <span className="text-accent relative inline-block">
                  Soba Danu
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 h-[3px] bg-accent/50 rounded-full"
                  />
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.65, duration: 0.5 }}
              className="max-w-[600px] mx-auto xl:mx-0 mb-8 xl:mb-9 text-white/70 leading-relaxed text-justify xl:text-left"
            >
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies. With
              3+ years of experience, I transform complex problems into simple,
              beautiful, and intuitive solutions.
            </motion.p>

            {/* Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.5 }}
              className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8"
            >
              <Link href="/contact" className="w-full xl:w-auto">
                <Button
                  size="lg"
                  className="group relative w-full xl:w-auto bg-accent hover:bg-accent/90 text-primary font-medium px-8 py-6 rounded-lg transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Hire Me Now
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="group w-full xl:w-auto border-accent/30 hover:border-accent bg-transparent hover:bg-accent/10 text-white hover:text-accent px-8 py-6 rounded-lg transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <FiDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Button>

              <div className="xl:ml-4">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-11 h-11 border border-white/20 hover:border-accent rounded-lg flex justify-center items-center text-white/60 hover:text-accent text-lg hover:bg-accent/10 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              className="flex items-center gap-6 mt-10 justify-center xl:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">3+</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Years</p>
                  <p className="text-white/40 text-xs">Experience</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">20+</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Projects</p>
                  <p className="text-white/40 text-xs">Completed</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">100%</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Client</p>
                  <p className="text-white/40 text-xs">Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex justify-center xl:justify-end order-1 xl:order-none"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

              {/* Photo component */}
              <Photo />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Component */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.9, duration: 0.6, ease: "easeOut" }}
        className="w-full mt-12 xl:mt-16"
      >
        <Stats />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden xl:block"
      >
        {/* <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
        </div> */}
      </motion.div>
    </motion.section>
  );
};

export default Home;
