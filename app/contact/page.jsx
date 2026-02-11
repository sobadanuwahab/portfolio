"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaGlobe,
  FaSkype,
} from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Contact info data
const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-2xl" />,
    label: "Location",
    value: "Jakarta, Indonesia",
    detail: "Available for remote work worldwide",
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    label: "Email",
    value: "sdanuw@gmail.com",
    detail: "Response within 24 hours",
    href: "mailto:sdanuw@gmail.com",
  },
  {
    icon: <FaPhone className="text-2xl" />,
    label: "Phone",
    value: "(+62) 813 1433 3352",
    detail: "Mon-Fri 9AM-6PM WIB",
    href: "tel:+6281314333352",
  },
  {
    icon: <FaClock className="text-2xl" />,
    label: "Working Hours",
    value: "Mon - Fri, 9AM - 6PM",
    detail: "Weekend by appointment",
  },
  {
    icon: <FaSkype className="text-2xl" />,
    label: "Skype",
    value: "danu.14",
    detail: "Live chat available",
    href: "skype:danu.14?chat",
  },
  {
    icon: <FaGlobe className="text-2xl" />,
    label: "Languages",
    value: "Bahasa, English",
    detail: "Professional working proficiency",
  },
];

// Embed URL for Jakarta map (using OpenStreetMap)
const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=106.80000305175781%2C-6.211544410516488%2C106.88000106811525%2C-6.1713888888888895&amp;layer=mapnik&amp;marker=-6.191666666666667%2C106.84000000000003";

// Static map image fallback (using OpenStreetMap static map)
const mapImageUrl =
  "https://staticmap.openstreetmap.de/staticmap.php?center=-6.1917,106.8400&zoom=12&size=600x400&maptype=mapnik&markers=-6.1917,106.8400,lightblue1";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
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
            <Badge
              variant="outline"
              className="px-4 py-2 text-accent border-accent/30 bg-accent/10 hover:bg-accent/20 transition-all duration-300"
            >
              Get In Touch
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.65, duration: 0.5 }}
            className="text-white/60 max-w-2xl mx-auto xl:mx-0 text-justify xl:text-left leading-relaxed"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities and creative
            ideas.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]">
          {/* Left Column - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            className="w-full xl:w-[45%] space-y-6"
          >
            {/* Contact Info Cards */}
            <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none">
              <CardContent className="p-6 xl:p-8">
                <h3 className="text-xl xl:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <BsFillLightningFill className="text-accent" />
                  Contact Information
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-accent/10 transition-all duration-300 group"
                    >
                      <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/50 text-xs uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-white font-medium text-sm xl:text-base hover:text-accent transition-colors duration-300 truncate block"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-white font-medium text-sm xl:text-base truncate">
                            {info.value}
                          </p>
                        )}
                        <p className="text-white/40 text-xs mt-1">
                          {info.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* Map Location */}
            <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none overflow-hidden group">
              <CardContent className="p-0 relative">
                <div className="relative h-[300px] xl:h-[350px] w-full overflow-hidden">
                  {/* Map iframe */}
                  <iframe
                    src={mapEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0 filter grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jakarta Location Map"
                  />

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Map Footer */}
                <div className="p-4 border-t border-white/10 bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <FaMapMarkerAlt className="text-accent" />
                      <span>Based in Tangerang, available worldwide</span>
                    </div>
                    <Link
                      href="https://www.openstreetmap.org/?mlat=-6.1917&mlon=106.8400#map=12/-6.1917/106.8400"
                      target="_blank"
                      className="text-accent hover:text-accent/80 text-sm flex items-center gap-1 transition-colors duration-300"
                    >
                      View Larger Map
                      <span className="text-xs">↗</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            className="w-full xl:w-[55%]"
          >
            <Card className="bg-gradient-to-br from-[#232329] to-[#1A1A1F] border-none h-full">
              <CardContent className="p-6 xl:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl xl:text-2xl font-bold text-white flex items-center gap-2">
                    <FaPaperPlane className="text-accent" />
                    Send Me a Message
                  </h3>

                  {/* Availability Status */}
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="text-white/40 text-xs hidden sm:inline">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-accent/20 border border-accent/30 rounded-lg flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-accent text-xl" />
                    <p className="text-white/90 text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-white/60 text-sm flex items-center gap-2">
                        <FaUser className="text-accent" />
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/60 text-sm flex items-center gap-2">
                        <FaEnvelope className="text-accent" />
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm flex items-center gap-2">
                      <FaPaperPlane className="text-accent" />
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration, Job Opportunity, etc."
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm flex items-center gap-2">
                      <FaClock className="text-accent" />
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-accent focus:ring-accent/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-white/40 text-xs">
                      * I usually respond within 24 hours
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-8 py-6 bg-accent hover:bg-accent/90 text-primary font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Button>
                  </div>
                </form>

                {/* Additional Contact Options */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-white/40 text-sm">
                        Quick connect:
                      </span>
                      <Link
                        href="mailto:sdanuw@gmail.com"
                        className="text-white/60 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-1"
                      >
                        <FaEnvelope className="text-xs" />
                        Email
                      </Link>
                      <Link
                        href="tel:+6281314333352"
                        className="text-white/60 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-1"
                      >
                        <FaPhone className="text-xs" />
                        Call
                      </Link>
                      <Link
                        href="skype:danu.14?chat"
                        className="text-white/60 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-1"
                      >
                        <FaSkype className="text-xs" />
                        Skype
                      </Link>
                    </div>

                    <Badge
                      variant="outline"
                      className="border-accent/30 text-accent/80"
                    >
                      Response time &lt; 24h
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
