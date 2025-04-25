"use client";
import Link from "next/link";
import {
  Building,
  PieChart,
  Hammer,
  Brain,
  Users,
  ChevronRight,
  Star,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Home() {
  // Animation variants remain the same
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Create fixed position data rather than random to avoid hydration mismatch
  const particles = [
    { width: 35, height: 58, left: "7%", top: "20%" },
    { width: 50, height: 38, left: "19%", top: "19%" },
    { width: 37, height: 41, left: "54%", top: "44%" },
    { width: 42, height: 29, left: "56%", top: "19%" },
    { width: 29, height: 35, left: "64%", top: "65%" },
    { width: 14, height: 33, left: "95%", top: "80%" },
  ];

  const ctaParticles = [
    { width: 140, height: 233, left: "14%", top: "95%" },
    { width: 385, height: 225, left: "57%", top: "38%" },
    { width: 334, height: 353, left: "29%", top: "8%" },
    { width: 372, height: 226, left: "88%", top: "89%" },
    { width: 101, height: 222, left: "71%", top: "16%" },
    { width: 272, height: 357, left: "72%", top: "91%" },
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const heroRef = useRef(null);
  const [shouldAnimateParticles, setShouldAnimateParticles] = useState(false);

  const phrases = [
    "A vessel for transformation",
    "Building tomorrow's Liberia",
    "Innovation brick by brick",
    "Construction reimagined for Liberia",
    "Crafting Liberia's digital foundations",
  ];

  // Phrase cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  // Intersection observer for particles
  useEffect(() => {
    if (!window.IntersectionObserver) return;

    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldAnimateParticles(true);
        } else {
          setShouldAnimateParticles(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
    };
  }, []);

  // Service offerings data
  const services = [
    {
      icon: <Building className="h-5 w-5 text-orange-600" aria-hidden="true" />,
      title: "Brixel Blocks",
      description:
        "High-quality concrete and interlocking bricks, produced with precision for Liberia's unique building needs.",
    },
    {
      icon: <PieChart className="h-5 w-5 text-orange-600" aria-hidden="true" />,
      title: "Brixel Estimator",
      description:
        "AI-powered tool customized for Liberian construction that accurately estimates material needs, cost, and layout visuals.",
    },
    {
      icon: <Hammer className="h-5 w-5 text-orange-600" aria-hidden="true" />,
      title: "Brixel Build",
      description:
        "Full-service construction from foundation to finish—residential, commercial, and community-focused projects across Liberia.",
    },
    {
      icon: <Brain className="h-5 w-5 text-orange-600" aria-hidden="true" />,
      title: "Brixel AI",
      description:
        "Virtual construction assistant offering quotations, site planning advice, and real-time support optimized for Liberian building codes.",
    },
    {
      icon: <Users className="h-5 w-5 text-orange-600" aria-hidden="true" />,
      title: "Brixel Impact",
      description:
        "Social initiative focusing on affordable housing, youth training, and partnerships with local Liberian NGOs and government projects.",
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      quote:
        "Brixel's AI estimator saved us 20% on material costs for our community center project in Monrovia. Their approach to construction is truly innovative.",
      author: "Sarah Johnson",
      title: "Project Manager, Liberia Community Development",
      rating: 5,
    },
    {
      quote:
        "The quality of their interlocking bricks is unmatched. We've reduced construction time by 30% on our latest housing development in Buchanan.",
      author: "Michael Wilson",
      title: "Lead Architect, Urban Housing Solutions Liberia",
      rating: 5,
    },
    {
      quote:
        "Brixel's commitment to training local youth has transformed our community in Gbarnga. They're not just building structures, they're building futures.",
      author: "Amina Cooper",
      title: "Director, Youth Empowerment Initiative",
      rating: 5,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question:
        "How accurate is the Brixel Estimator tool for Liberian construction projects?",
      answer:
        "Our AI-powered estimator tool is 95% accurate for standard construction projects in Liberia. It accounts for local variations in material costs and building standards across different counties of Liberia.",
    },
    {
      question:
        "Do you offer training for local construction teams in Liberia?",
      answer:
        "Yes, through our Brixel Impact initiative, we provide comprehensive training programs for Liberian construction workers, focusing on modern building techniques and sustainable practices suitable for the local environment.",
    },
    {
      question:
        "What makes Brixel Blocks different from traditional bricks used in Liberia?",
      answer:
        "Brixel Blocks are manufactured with precision machinery to ensure consistent dimensions and strength, unlike many traditional options available in Liberia. They're also designed for interlocking, which reduces mortar usage by up to 70% and speeds up construction.",
    },
    {
      question: "Can Brixel handle projects in remote areas of Liberia?",
      answer:
        "Absolutely. We've developed logistics solutions specifically for challenging rural environments in Liberia, including mobile production units that can manufacture Brixel Blocks on-site in remote locations throughout the country.",
    },
  ];

  // Impact metrics
  const impactMetrics = [
    { metric: "30+", description: "Projects Completed in Liberia" },
    { metric: "500+", description: "Liberian Youth Trained" },
    { metric: "40%", description: "Average Cost Reduction" },
    { metric: "15", description: "Counties Served in Liberia" },
  ];

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative overflow-hidden"
        aria-label="Hero section"
      >
        {/* Animated background particles with fixed positions - only animate when visible */}
        <div className="absolute inset-0">
          {shouldAnimateParticles &&
            particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute bg-orange-500 rounded-full opacity-20"
                style={{
                  width: particle.width,
                  height: particle.height,
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  y: [0, -100],
                  x: [0, 25],
                  opacity: [0.2, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.5,
                }}
                aria-hidden="true"
              />
            ))}
        </div>

        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16 relative z-10">
          <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <motion.div
              className="flex flex-col justify-center space-y-6 pt-8 md:pt-0" // Added more space on mobile
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                {" "}
                {/* Increased spacing */}
                <div className="relative inline-block">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    key={currentPhraseIndex}
                    aria-label={phrases[currentPhraseIndex]}
                  >
                    <span className="inline-block">
                      {Array.from(phrases[currentPhraseIndex]).map(
                        (char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 0.5 + index * 0.05,
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        )
                      )}
                    </span>
                  </motion.h1>

                  <motion.span
                    className="absolute w-[4px] bg-orange-400"
                    style={{
                      top: "0",
                      right: "-18px",
                      height: "100%",
                    }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    aria-hidden="true"
                  />
                </div>
                <motion.p
                  className="max-w-[600px] text-slate-300 md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Every brick with precision, every future with purpose.
                  Revolutionizing Liberia&apos;s construction industry through
                  digital innovation.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-3 min-[400px]:flex-row mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none"
                  aria-label="Try our estimator tool"
                >
                  <Link href="/estimator">Try Estimator Tool</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-black hover:bg-slate-700 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none"
                  aria-label="View our services"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="flex justify-center md:justify-start mt-8 md:mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    })
                  }
                  aria-label="Scroll down to see more"
                >
                  <span className="text-sm text-slate-400 mb-2">Scroll</span>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown className="h-6 w-6 text-slate-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center pl-4 md:pl-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500/30 to-orange-500/20 blur-[100px]"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  aria-hidden="true"
                ></motion.div>
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/hero.jpg"
                    alt="Construction workers using Brixel technology on a building site in Liberia"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="w-full py-8 md:py-12 bg-orange-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {impactMetrics.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                variants={fadeInVariants}
              >
                <motion.span
                  className="text-3xl md:text-5xl font-bold text-orange-600 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {item.metric}
                </motion.span>
                <span className="text-sm md:text-base text-slate-700">
                  {item.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
        aria-labelledby="services-heading"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Our Offerings
              </motion.div>
              <h2
                id="services-heading"
                className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800"
              >
                Building the Future of Liberia
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We merge precision craftsmanship with digital innovation to
                provide comprehensive building solutions tailored for Liberia.
              </p>
            </div>
          </motion.div>

          {/* Redesigned Services Cards */}
          <LazyMotion features={domAnimation}>
            <m.div
              className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {services.map((service, index) => (
                <m.div key={index} variants={cardVariants} whileHover="hover">
                  <Card className="h-full transition-all border-none shadow-lg overflow-hidden relative group">
                    {/* Background gradient that changes on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50 group-hover:to-orange-100 transition-colors duration-300"></div>

                    {/* Decorative corner elements */}
                    <div
                      className="absolute top-0 left-0 w-16 h-16 bg-orange-100/50 rounded-br-[50px] group-hover:bg-orange-200/50 transition-colors duration-300"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 w-12 h-12 bg-orange-100/30 rounded-tl-[30px] group-hover:bg-orange-200/30 transition-colors duration-300"
                      aria-hidden="true"
                    ></div>

                    <CardHeader className="relative z-10">
                      <m.div
                        className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mb-4 shadow-md group-hover:shadow-orange-200/50 transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </m.div>
                      <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 text-base mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="relative z-10">
                      <Button
                        variant="ghost"
                        className="text-orange-600 hover:text-orange-700 group px-0 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        <Link
                          href={`/services#${service.title
                            .toLowerCase()
                            .replace("brixel ", "")}`}
                        >
                          <span className="border-b-2 border-transparent group-hover:border-orange-600 transition-all duration-300">
                            Learn More
                          </span>
                          <ChevronRight
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                          />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </m.div>
              ))}
            </m.div>
          </LazyMotion>
        </div>
      </section>

      {/* Feature Section with Scroll Reveal */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
        aria-labelledby="features-heading"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Why Choose Us
              </div>
              <h2
                id="features-heading"
                className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800"
              >
                Building With Purpose in Liberia
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Brixel, we&apos;re passionate about merging traditional
                construction excellence with cutting-edge technology tailored
                for Liberia&apos;s needs. Our approach combines quality materials,
                digital innovation, and social responsibility.
              </p>
              <motion.ul
                className="grid gap-3 py-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {[
                  "Superior quality building materials suited for Liberia's climate",
                  "AI-powered construction planning customized for local conditions",
                  "Community-focused building initiatives throughout Liberia",
                  "Transparent and fair pricing for Liberian markets",
                  "Skilled local workforce development in all 15 counties",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                  >
                    <motion.div
                      className="rounded-full bg-green-500/20 p-1"
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "rgba(34, 197, 94, 0.3)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-600"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                    <span className="text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  asChild
                  className="bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-orange-500/30 transition-all duration-300 text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  aria-label="Learn about our company values"
                >
                  <Link href="/about">Learn About Our Values</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/10 blur-[100px]"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  aria-hidden="true"
                ></motion.div>
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/feature.jpg"
                    alt="Workers installing Brixel blocks on a construction site in Liberia"
                    fill
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    aria-hidden="true"
                  ></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="w-full py-12 md:py-24 bg-white"
        aria-labelledby="testimonials-heading"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Success Stories
              </motion.div>
              <h2
                id="testimonials-heading"
                className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800"
              >
                What Our Liberian Clients Say
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-slate-50 p-6 rounded-lg shadow-md relative"
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="absolute -top-4 -left-4 bg-orange-100 rounded-full p-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600"
                    aria-hidden="true"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 0-1-1"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1"></path>
                  </svg>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="w-full py-12 md:py-24 bg-slate-50"
        aria-labelledby="faq-heading"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Have Questions?
              </motion.div>
              <h2
                id="faq-heading"
                className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800"
              >
                Frequently Asked Questions
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeInVariants}>
                  <AccordionItem
                    value={`item-${i}`}
                    className="border-b border-slate-200"
                  >
                    <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-orange-600 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Pulse Animation and Fixed Particle Positions */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-600 to-orange-700 text-white relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <LazyMotion features={domAnimation}>
          <m.div
            className="absolute inset-0 bg-orange-500"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            aria-hidden="true"
          >
            {ctaParticles.map((particle, i) => (
              <m.div
                key={i}
                className="absolute bg-white rounded-full opacity-10"
                style={{
                  width: particle.width,
                  height: particle.height,
                  left: particle.left,
                  top: particle.top,
                  transformOrigin: "center",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            ))}
          </m.div>
        </LazyMotion>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-3">
              <motion.h2
                id="cta-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0.3)",
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 0px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to Build Liberia&apos;s Future?
              </motion.h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Take the first step with our AI-powered material estimator or
                contact us to discuss your construction project in Liberia.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-3 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-100 shadow-lg transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 focus:outline-none"
                  aria-label="Try our AI-powered estimator tool"
                >
                  <Link href="/estimator">Try Estimator Tool</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-orange-700 hover:border-orange-700 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 focus:outline-none"
                  aria-label="Contact our team"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
