"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building,
  Hammer,
  Users,
  Shield,
  Lightbulb,
  Target,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      y: -5,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-32 bg-gradient-to-br from-slate-950 to-slate-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-orange-500 blur-3xl"></div>
          <div className="absolute bottom-20 right-[10%] w-40 h-40 rounded-full bg-orange-600 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-orange-700 blur-3xl opacity-20"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-block rounded-lg bg-orange-600/30 px-3 py-1 text-sm text-orange-200 mb-3">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              Revolutionizing Construction
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
              Through machine-manufactured precision blocks with 10× the
              strength of conventional materials, we&apos;re transforming Africa&apos;s
              construction industry one building at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/bricks.webp"
                  alt="Brixel's machine-manufactured precision blocks production"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-semibold text-orange-300">
                    Precision Manufacturing
                  </div>
                  <div className="text-lg font-bold">
                    Machine-made blocks with unmatched quality
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 mb-2">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700 mb-4">
                  Building Stronger Futures
                </h2>
                <p className="text-slate-600 md:text-lg">
                  To revolutionize Africa&apos;s construction industry by providing
                  machine-manufactured precision blocks that are 10× stronger
                  than conventional materials. We merge superior craftsmanship
                  with digital innovation to deliver building solutions that
                  empower individuals, uplift communities, and accelerate
                  sustainable development.
                </p>
              </div>

              <div>
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 mb-2">
                  Our Vision
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Transforming Construction
                </h2>
                <p className="text-slate-600 md:text-lg">
                  To become Africa&apos;s leading construction technology
                  company—building not just structures, but dreams—through our
                  revolutionary machine-manufactured building materials,
                  intelligent systems, and technology-driven services that make
                  quality construction more accessible and affordable.
                </p>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button
                  asChild
                  className="bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-orange-500/30"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/contact">Connect With Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Advantage Section */}
      <section className="w-full py-16 md:py-24 bg-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Material Advantage
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Setting New Standards in Construction
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Our machine-manufactured precision blocks deliver unmatched
                quality, strength, and consistency, revolutionizing how Africa
                builds.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-3 bg-blue-500"></div>
              <div className="p-6">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Hammer className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Machine Precision
                </h3>
                <p className="text-slate-600">
                  Our blocks are manufactured using advanced machinery for
                  perfect dimensions and consistency. This precision ensures
                  faster construction with less waste and superior structural
                  integrity.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-3 bg-green-500"></div>
              <div className="p-6">
                <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">10× Stronger</h3>
                <p className="text-slate-600">
                  Our optimized cement-aggregate mixture and hydraulic
                  compaction process results in blocks that are 10 times
                  stronger than conventional options, creating buildings that
                  will stand the test of time.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-3 bg-orange-500"></div>
              <div className="p-6">
                <div className="h-14 w-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
                <p className="text-slate-600">
                  Our interlocking designs require up to 70% less cement during
                  installation, with faster construction timelines resulting in
                  significant cost savings without compromising on quality.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Machinery Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Technology
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Advanced Machinery for Precision Manufacturing
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Our state-of-the-art machinery ensures the production of
                high-quality, precision-engineered blocks and bricks, delivering
                unmatched strength, consistency, and efficiency for modern
                construction.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Concrete Block Machine */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/images/machines/concrete-block-machine.webp"
                  alt="Concrete Block Machine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Concrete Block Machine
                </h3>
                <p className="text-slate-600 mb-4">
                  Our high-capacity concrete block machines produce precision
                  blocks with perfect dimensions and superior strength, ensuring
                  consistency and durability for every project.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    Automated production for high output
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    Hydraulic compression for maximum strength
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    Energy-efficient operation
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Interlocking Brick Machine */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/images/machines/interlocking-brick-machine.jpg"
                  alt="Interlocking Brick Machine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Interlocking Brick Machine
                </h3>
                <p className="text-slate-600 mb-4">
                  Designed for efficiency, our interlocking brick machines
                  create bricks that reduce cement usage by up to 70%, enabling
                  faster and more cost-effective construction.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    Precision molding for interlocking design
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    High-speed production capabilities
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    Durable components for long-term use
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Concrete Mixer */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/images/machines/concrete-mixer-machine.png"
                  alt="Concrete Mixer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Concrete Mixer</h3>
                <p className="text-slate-600 mb-4">
                  Our robust concrete mixers ensure a uniform mix of materials,
                  optimizing the quality of our blocks and supporting efficient
                  on-site construction processes.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    High-capacity mixing for large projects
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    Consistent and uniform material blending
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    Easy-to-operate design
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-500/30"
            >
              <Link href="/contact">
                Learn More About Our Technology{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Core Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What Drives Us Forward
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Our values guide everything we do, from how we manufacture our
                precision blocks to how we interact with our customers and
                communities.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <Card className="border-none shadow-lg h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We are committed to delivering superior quality in every
                    product and service. Our machine-manufactured blocks set new
                    standards of excellence in the construction industry, with
                    precision and strength that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <Card className="border-none shadow-lg h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We believe in creating opportunities for local communities
                    and youth. By providing training in advanced construction
                    techniques using our precision blocks, we help people build
                    better futures with valuable, specialized skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <Card className="border-none shadow-lg h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We embrace technology to improve construction processes.
                    From our machine-manufactured blocks to our AI-powered
                    estimation tools, we combine traditional building methods
                    with digital innovation for more efficient, accurate, and
                    accessible construction solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <Card className="border-none shadow-lg h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We operate with transparency and trust in all our dealings.
                    When we say our blocks are 10× stronger and require 70% less
                    cement, those aren&apos;t just claims—they&apos;re measured, verified
                    facts that guide our commitment to honest business
                    practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <Card className="border-none shadow-lg h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-rose-100 flex items-center justify-center mb-2">
                    <Building className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We build to improve lives and futures. Our superior building
                    materials create structures that are more durable, more
                    affordable, and more sustainable, creating positive, lasting
                    change in the communities we serve through better
                    construction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <Card className="border-none shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 h-full">
                <CardHeader>
                  <CardTitle className="text-orange-700">
                    Join Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-6">
                    Become part of our journey to transform construction in
                    Africa through our revolutionary machine-manufactured
                    building materials.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-500/30"
                  >
                    <Link href="/contact">
                      Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Meet the Visionaries Behind Brixel
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Our talented team combines expertise in precision manufacturing,
                construction technology, and community development to drive our
                mission forward.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-60 w-full bg-slate-100">
                <Image
                  src="/images/team/ceo.jpg"
                  alt="Geitodyu Henrique Crusoe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">Geitodyu Henrique Crusoe</h3>
                <p className="text-orange-600 font-medium">Founder/CEO</p>
                <p className="text-sm text-slate-600 mt-2">
                  Visionary leader with extensive experience in construction and
                  manufacturing technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-60 w-full bg-slate-100 flex items-center justify-center">
                <Users className="h-20 w-20 text-slate-300" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">Head of Operations</h3>
                <p className="text-orange-600 font-medium">TBD</p>
                <p className="text-sm text-slate-600 mt-2">
                  Oversees precision block production, quality control, and
                  project management.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-60 w-full bg-slate-100 flex items-center justify-center">
                <Users className="h-20 w-20 text-slate-300" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">
                  Head of Digital & AI Systems
                </h3>
                <p className="text-orange-600 font-medium">TBD</p>
                <p className="text-sm text-slate-600 mt-2">
                  Leads technology development, digital estimation tools, and AI
                  integration.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-60 w-full bg-slate-100 flex items-center justify-center">
                <Users className="h-20 w-20 text-slate-300" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">Manufacturing Lead</h3>
                <p className="text-orange-600 font-medium">TBD</p>
                <p className="text-sm text-slate-600 mt-2">
                  Manages our precision block manufacturing processes and
                  production technology.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 text-center bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              We&apos;re looking for talented individuals who are passionate about
              precision manufacturing, construction technology, and making a
              positive impact in communities across Africa.
            </p>
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-500/30"
            >
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Story/Journey Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 mb-2">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700 mb-4">
                  A Journey of Manufacturing Innovation
                </h2>
                <p className="text-slate-600 md:text-lg">
                  Brixel was founded with a simple yet powerful vision: to
                  transform construction in Africa by bringing precision
                  manufacturing technology to building materials production.
                </p>
                <p className="text-slate-600 md:text-lg mt-4">
                  Our founder, Geitodyu Henrique Crusoe, recognized the
                  fundamental problems in the construction industry—inconsistent
                  quality of conventional blocks, inefficient building
                  processes, and structures that deteriorated too quickly. He
                  envisioned a company that would leverage machine manufacturing
                  to produce building blocks with 10× the strength of
                  conventional materials.
                </p>
                <p className="text-slate-600 md:text-lg mt-4">
                  What began as a precision block manufacturing operation has
                  evolved into a comprehensive construction technology company,
                  offering everything from machine-manufactured blocks to
                  AI-powered estimation tools and full construction services—all
                  built around our core material advantage.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-lg p-5">
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  Our Material Commitment
                </h3>
                <p className="text-orange-700">
                  As we grow, we remain committed to our founding principle:
                  building better through superior materials. Every block we
                  manufacture is produced with precision machinery to ensure
                  perfect dimensions, optimal strength, and consistent quality
                  that conventional handmade blocks simply cannot match.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                    <ArrowRight className="h-4 w-4 text-orange-600" />
                  </div>
                  Our Journey
                </h3>

                <div className="space-y-5">
                  <div className="flex bg-slate-50 p-3 rounded-lg">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Precision Manufacturing Vision
                      </h4>
                      <p className="text-sm text-slate-600">
                        Development of the Brixel concept focused on
                        machine-manufactured block production.
                      </p>
                    </div>
                  </div>

                  <div className="flex bg-slate-50 p-3 rounded-lg">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Launch of Precision Block Production
                      </h4>
                      <p className="text-sm text-slate-600">
                        Beginning of machine-manufacturing of high-quality
                        concrete blocks with superior strength.
                      </p>
                    </div>
                  </div>

                  <div className="flex bg-slate-50 p-3 rounded-lg">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Interlocking Block Innovation
                      </h4>
                      <p className="text-sm text-slate-600">
                        Development of interlocking block system that reduces
                        cement usage by 70% during installation.
                      </p>
                    </div>
                  </div>

                  <div className="flex bg-slate-50 p-3 rounded-lg">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Digital Transformation</h4>
                      <p className="text-sm text-slate-600">
                        Introduction of the Brixel Estimator tool and AI-powered
                        construction assistant to optimize building with our
                        blocks.
                      </p>
                    </div>
                  </div>

                  <div className="flex bg-slate-50 p-3 rounded-lg">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-medium">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Community Impact Initiatives
                      </h4>
                      <p className="text-sm text-slate-600">
                        Launch of affordable housing projects and training
                        programs showcasing our precision blocks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 text-white shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold text-xl mb-6 flex items-center text-orange-300">
                  <Building className="h-5 w-5 mr-2" />
                  Our Impact So Far
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-300">
                      5,000+
                    </div>
                    <p className="text-sm text-white/80">
                      Precision Blocks Produced
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-300">
                      10+
                    </div>
                    <p className="text-sm text-white/80">Projects Completed</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-300">
                      50+
                    </div>
                    <p className="text-sm text-white/80">Digital Estimates</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-300">3</div>
                    <p className="text-sm text-white/80">
                      Communities Impacted
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-300">
                      20+
                    </div>
                    <p className="text-sm text-white/80">Youth Trained</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-300">2</div>
                    <p className="text-sm text-white/80">NGO Partnerships</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/30 text-black hover:bg-white/10 hover:border-white"
                  >
                    <Link href="/impact">
                      Explore Our Impact{" "}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-orange-600 to-orange-700 text-white relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-10 right-[10%] w-72 h-72 rounded-full bg-white opacity-10"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <motion.h2
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
                Join Us in Building a Stronger Africa
              </motion.h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Whether as a customer, partner, or team member, become part of
                our mission to transform Africa&apos;s construction industry through
                our revolutionary machine-manufactured precision blocks.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-lg shadow-lg"
                >
                  <Link href="/contact">Contact Us</Link>
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
                  className="border-white text-black hover:bg-orange-700 hover:border-orange-700 px-8 py-6 text-lg rounded-lg shadow-lg"
                >
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
