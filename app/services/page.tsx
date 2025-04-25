"use client";
import Link from "next/link";
import {
  Building,
  PieChart,
  Users,
  ChevronRight,
  Hammer,
  School,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("blocks");

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
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    // Check for URL hash and select the correct tab
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (
        hash &&
        ["blocks", "estimator", "build", "ai", "impact"].includes(hash)
      ) {
        setActiveTab(hash);
      }
    }
  }, []);

  return (
    <main className="flex-1">
      {/* Hero Section with Parallax */}
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
              Our Offerings
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              Comprehensive Services
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
              From precision machine-manufactured materials to AI-powered
              construction, we deliver innovative solutions tailored for your
              building needs.
            </p>
            <motion.div
              className="flex flex-wrap gap-3 justify-center mt-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {["Blocks", "Estimator", "Build", "AI", "Impact"].map(
                (service, i) => (
                  <motion.div key={i} variants={fadeIn} className="mt-2">
                    <Button
                      onClick={() => setActiveTab(service.toLowerCase())}
                      className={`${
                        activeTab === service.toLowerCase()
                          ? "bg-orange-600 text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      } backdrop-blur-sm border border-white/10`}
                    >
                      {service}
                    </Button>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-3xl grid-cols-5 bg-slate-100 p-1 rounded-full overflow-hidden">
                {["blocks", "estimator", "build", "ai", "impact"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "bg-orange-600 border-orange-600 text-black shadow-lg"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Brixel Blocks */}
            <TabsContent value="blocks">
              <motion.div
                className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div className="space-y-6" variants={fadeIn}>
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Brixel Blocks
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700">
                    Machine-Made Precision Building Materials
                  </h2>
                  <p className="text-slate-600 md:text-lg leading-relaxed">
                    Our blocks are machine-manufactured with precision to ensure
                    perfect dimensions and unmatched strength. Unlike
                    conventional blocks, we use an optimized mix ratio of
                    premium cement and aggregate dust (crushed rock dust),
                    resulting in blocks that are
                    <span className="font-bold text-orange-700">
                      {" "}
                      10 times stronger
                    </span>{" "}
                    than what&apos;s typically available in the market.
                  </p>

                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-5 mt-2">
                    <h3 className="text-lg font-semibold text-orange-800 flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Our Quality Advantage:
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                        <span>
                          Hydraulic machine compaction for superior density and
                          strength
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                        <span>
                          Perfect dimensional accuracy for faster, easier
                          construction
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                        <span>
                          Scientifically calculated cement-to-aggregate ratio
                          for optimal strength
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-5 mt-8">
                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          10x Superior Strength
                        </h3>
                        <p className="text-slate-600">
                          Our blocks exceed standard compression strength
                          requirements due to our optimized cement-aggregate
                          mixture and hydraulic compaction process, resulting in
                          blocks that are 10 times stronger than conventional
                          options.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Machine Precision
                        </h3>
                        <p className="text-slate-600">
                          Manufactured using advanced machinery to ensure exact
                          specifications, resulting in blocks with perfect
                          dimensions that enable faster, easier construction
                          with minimal waste.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Cement-Saving Interlocking Design
                        </h3>
                        <p className="text-slate-600">
                          Our interlocking bricks require significantly less
                          cement when laid, as they interlock perfectly without
                          needing mortar between each brick, saving you money
                          and speeding up construction time.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8"
                  >
                    <Button
                      asChild
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-orange-500/30"
                    >
                      <Link href="/contact">Request Quotation</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-8" variants={fadeIn}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      variants={cardHover}
                    >
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-60 w-full bg-slate-100">
                          <Image
                            src="/images/blocks/hollow-blocks.jpeg"
                            alt="Machine-Made Hollow Blocks"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <CardTitle className="text-xl text-white">
                              Hollow Blocks
                            </CardTitle>
                            <p className="text-sm text-white/80 mt-1">
                              Machine-manufactured for perfection
                            </p>
                          </div>
                        </div>
                        <CardContent className="pt-6">
                          <ul className="space-y-3">
                            <li className="flex items-center">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                              <span className="font-medium">Sizes:</span>
                              <span className="ml-2 text-slate-600">
                                6&quot;, 8&quot;
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                              <span className="font-medium">Strength:</span>
                              <span className="ml-2 text-slate-600">
                                10× stronger than market standard
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                              <span className="font-medium">Material:</span>
                              <span className="ml-2 text-slate-600">
                                Premium cement & aggregate dust
                              </span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      variants={cardHover}
                    >
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-60 w-full bg-slate-100">
                          <Image
                            src="/images/blocks/interlocking-bricks.png"
                            alt="Cement-Saving Interlocking Blocks"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <CardTitle className="text-xl text-white">
                              Interlocking Blocks
                            </CardTitle>
                            <p className="text-sm text-white/80 mt-1">
                              No mortar needed between blocks
                            </p>
                          </div>
                        </div>
                        <CardContent className="pt-6">
                          <ul className="space-y-3">
                            <li className="flex items-center">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                              <span className="font-medium">Dimensions:</span>
                              <span className="ml-2 text-slate-600">
                                300×150×100mm
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                              <span className="font-medium">Savings:</span>
                              <span className="ml-2 text-slate-600">
                                70% less cement required
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                              <span className="font-medium">Speed:</span>
                              <span className="ml-2 text-slate-600">
                                3× faster construction
                              </span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    variants={cardHover}
                  >
                    <Card className="border-none shadow-lg bg-gradient-to-br from-slate-50 to-orange-50">
                      <CardHeader className="border-b border-slate-100 pb-4">
                        <CardTitle className="text-xl flex items-center">
                          <PieChart className="h-5 w-5 text-orange-600 mr-2" />
                          Block Pricing
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-1">
                          {[
                            { name: `6"; Hollow Blocks`, price: "$2.50/unit" },
                            { name: `8" Hollow Blocks`, price: "$3.20/unit" },
                            {
                              name: "Interlocking Bricks",
                              price: "$2.80/unit",
                            },
                            {
                              name: "Flooring Interlocking Tiles",
                              price: "$2.80/unit",
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex justify-between py-3 border-b border-slate-100"
                            >
                              <span className="font-medium text-slate-800">
                                {item.name}
                              </span>
                              <span className="font-bold text-orange-600">
                                {item.price}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm text-orange-800">
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Bulk discounts available. Delivery charged
                            separately based on location.
                          </p>
                        </div>

                        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                          <h4 className="font-medium text-green-800 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Total Cost Savings:
                          </h4>
                          <p className="text-sm text-green-700 mt-2">
                            While our blocks may cost slightly more per unit
                            than standard blocks, they provide significant total
                            cost savings through:
                          </p>
                          <ul className="text-sm text-green-700 mt-2 space-y-1">
                            <li className="flex items-start">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2 mt-1.5"></span>
                              <span>
                                Reduced cement usage (especially with
                                interlocking designs)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2 mt-1.5"></span>
                              <span>
                                Faster construction time (lower labor costs)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2 mt-1.5"></span>
                              <span>
                                Greater durability (lower maintenance costs)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Brixel Estimator */}
            <TabsContent value="estimator">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Brixel Estimator
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    AI-Powered Construction Planning
                  </h2>
                  <p className="text-slate-500 md:text-lg">
                    Our digital estimator takes the guesswork out of
                    construction planning, providing accurate material
                    quantities, cost estimates, and visual representations of
                    your project.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="rounded-full bg-green-500/20 p-1 mr-3 mt-1">
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
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">
                          Precise Material Calculations
                        </h3>
                        <p className="text-slate-500">
                          Get exact quantities of blocks, cement, sand, and
                          other materials needed for your project.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="rounded-full bg-green-500/20 p-1 mr-3 mt-1">
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
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Cost Transparency</h3>
                        <p className="text-slate-500">
                          Detailed breakdown of material costs, labor expenses,
                          and total project budget.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="rounded-full bg-green-500/20 p-1 mr-3 mt-1">
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
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Visual Representation</h3>
                        <p className="text-slate-500">
                          Visualize your building with 3D models and
                          construction simulations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-orange-600 hover:bg-orange-700 mt-4"
                  >
                    <Link href="/estimator">Try Estimator Now</Link>
                  </Button>
                </div>

                <div className="bg-slate-100 rounded-lg p-6">
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h3 className="font-medium mb-4">Estimator Features</h3>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <PieChart className="h-8 w-8 text-orange-500 mr-4" />
                        <div>
                          <h4 className="font-medium">Material Calculator</h4>
                          <p className="text-sm text-slate-500">
                            Automatic calculation of all required construction
                            materials.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Hammer className="h-8 w-8 text-orange-500 mr-4" />
                        <div>
                          <h4 className="font-medium">Cost Estimator</h4>
                          <p className="text-sm text-slate-500">
                            Detailed budget breakdowns with current material
                            prices.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Building className="h-8 w-8 text-orange-500 mr-4" />
                        <div>
                          <h4 className="font-medium">3D Visualization</h4>
                          <p className="text-sm text-slate-500">
                            Visual representation of your building project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-medium mb-2">Free vs. Premium</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Free</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <ul className="space-y-2">
                            <li>Basic material estimates</li>
                            <li>Simple cost calculations</li>
                            <li>Standard building types</li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="w-full">
                            <Link href="/estimator">Try Free</Link>
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Premium</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <ul className="space-y-2">
                            <li>Detailed material breakdowns</li>
                            <li>Advanced 3D visualization</li>
                            <li>Custom building designs</li>
                            <li>Exportable reports</li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button asChild variant="outline" className="w-full">
                            <Link href="/contact">Contact Sales</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Brixel Build */}
            <TabsContent value="build">
              <motion.div
                className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div className="space-y-6" variants={fadeIn}>
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Brixel Build
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700">
                    Full-Service Construction
                  </h2>
                  <p className="text-slate-600 md:text-lg leading-relaxed">
                    From foundation to finish, our experienced construction
                    teams deliver high-quality buildings for residential,
                    commercial, and community projects. Using our machine-made
                    precision blocks ensures your structure will be built to
                    last.
                  </p>

                  <div className="space-y-5 mt-6">
                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          End-to-End Management
                        </h3>
                        <p className="text-slate-600">
                          Complete project management from planning and design
                          to construction and finishing, with emphasis on using
                          our superior building materials for the highest
                          quality results.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Quality Craftsmanship
                        </h3>
                        <p className="text-slate-600">
                          Skilled teams of masons, carpenters, and other
                          construction professionals who are specifically
                          trained to work with our precision-manufactured
                          blocks.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Transparent Process
                        </h3>
                        <p className="text-slate-600">
                          Clear timelines, regular updates, and milestone-based
                          payment schedules to ensure your project proceeds
                          smoothly from start to finish.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8"
                  >
                    <Button
                      asChild
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-orange-500/30"
                    >
                      <Link href="/contact">Request Construction Quote</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-8" variants={fadeIn}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      variants={cardHover}
                    >
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-60 w-full bg-slate-100">
                          <Image
                            src="/images/build/residential.webp"
                            alt="Residential Construction"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <CardTitle className="text-xl text-white">
                              Residential
                            </CardTitle>
                            <p className="text-sm text-white/80 mt-1">
                              Homes built to last generations
                            </p>
                          </div>
                        </div>
                        <CardContent className="pt-6">
                          <p className="text-slate-600 mb-4">
                            Custom homes, apartments, and housing developments
                            designed for comfort and durability, utilizing our
                            machine-manufactured blocks for superior structural
                            integrity.
                          </p>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            <Link href="/projects?category=residential">
                              Learn More
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      variants={cardHover}
                    >
                      <Card className="overflow-hidden border-none shadow-lg h-full">
                        <div className="relative h-60 w-full bg-slate-100">
                          <Image
                            src="/images/build/commercial.jpg"
                            alt="Commercial Construction"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <CardTitle className="text-xl text-white">
                              Commercial
                            </CardTitle>
                            <p className="text-sm text-white/80 mt-1">
                              Professional spaces built for success
                            </p>
                          </div>
                        </div>
                        <CardContent className="pt-6">
                          <p className="text-slate-600 mb-4">
                            Shops, offices, and mixed-use buildings designed for
                            functionality and visibility, constructed with our
                            premium quality blocks for long-term durability.
                          </p>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            <Link href="/projects?category=commercial">
                              Learn More
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    variants={cardHover}
                  >
                    <Card className="border-none shadow-lg">
                      <CardHeader className="border-b border-slate-100 pb-4">
                        <CardTitle className="text-xl flex items-center">
                          <Hammer className="h-5 w-5 text-orange-600 mr-2" />
                          Our Construction Process
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-5">
                          <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                              <span className="text-orange-600 font-medium">
                                1
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-lg">
                                Planning & Design
                              </h4>
                              <p className="text-slate-500">
                                Detailed blueprints and material specifications,
                                with emphasis on optimal use of our
                                machine-manufactured blocks for structural
                                strength.
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                              <span className="text-orange-600 font-medium">
                                2
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-lg">
                                Foundation Work
                              </h4>
                              <p className="text-slate-500">
                                Site preparation and solid foundation
                                construction, ensuring a strong base for your
                                structure built with our premium blocks.
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                              <span className="text-orange-600 font-medium">
                                3
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-lg">
                                Structure & Roofing
                              </h4>
                              <p className="text-slate-500">
                                Wall construction using our
                                precision-manufactured blocks and efficient
                                interlocking systems, followed by quality roof
                                installation.
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                              <span className="text-orange-600 font-medium">
                                4
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-lg">
                                Finishing & Handover
                              </h4>
                              <p className="text-slate-500">
                                Interior finishing, thorough inspection, and
                                project completion, ensuring every aspect meets
                                our high-quality standards.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Brixel AI */}
            <TabsContent value="ai">
              <motion.div
                className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div className="space-y-6" variants={fadeIn}>
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Brixel AI
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700">
                    Virtual Construction Assistant
                  </h2>
                  <p className="text-slate-600 md:text-lg leading-relaxed">
                    Our AI-powered assistant offers real-time construction
                    advice, quotations, and support through chat interfaces on
                    WhatsApp and our web platform, including specific expertise
                    on our premium machine-manufactured blocks.
                  </p>

                  <div className="space-y-5 mt-6">
                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          24/7 Construction Support
                        </h3>
                        <p className="text-slate-600">
                          Get answers to your construction questions anytime,
                          anywhere, including specific guidance on working with
                          our precision-engineered blocks and interlocking
                          bricks.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Instant Quotations
                        </h3>
                        <p className="text-slate-600">
                          Quick price estimates for our machine-made blocks,
                          other materials, and construction services, with
                          transparent calculations showing your savings.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Technical Guidance
                        </h3>
                        <p className="text-slate-600">
                          Expert advice on construction techniques, materials,
                          and best practices, especially focusing on how to
                          maximize the benefits of our interlocking brick system
                          to reduce cement usage.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8"
                  >
                    <Button
                      asChild
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-orange-500/30"
                    >
                      <Link href="#">Chat With Brixel AI</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <div className="bg-slate-900 rounded-lg p-6 text-white overflow-hidden shadow-xl">
                    <div className="mb-4">
                      <h3 className="font-medium mb-1">Brixel AI Assistant</h3>
                      <p className="text-sm text-slate-300">
                        Ask me anything about our construction materials and
                        services
                      </p>
                    </div>

                    <div className="space-y-4 mb-4">
                      <div className="flex justify-end">
                        <div className="bg-orange-600 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                          <p className="text-sm">
                            How many blocks do I need for a 10m × 8m house?
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="bg-slate-700 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                          <p className="text-sm">
                            For a standard 10m × 8m house with 3m height, you
                            would need approximately 1,600-2,000 of our
                            machine-made hollow blocks (6&quot;) for the walls,
                            assuming standard window and door openings.
                          </p>
                          <p className="text-sm mt-2">
                            Would you like a more detailed estimate with other
                            materials included?
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="bg-orange-600 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                          <p className="text-sm">
                            Yes, please. And how much would that cost? Would I
                            save money using your interlocking blocks instead?
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="bg-slate-700 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                          <p className="text-sm">
                            Here&apos;s a basic estimate with our hollow blocks:
                          </p>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• 1,800 hollow blocks: $4,500</li>
                            <li>• 40 bags of cement: $500</li>
                            <li>• 2 truckloads of sand: $240</li>
                            <li>• Estimated labor: $2,000</li>
                          </ul>
                          <p className="text-sm mt-2 font-medium">
                            Total estimate: $7,240 for basic wall construction.
                          </p>
                          <p className="text-sm mt-3">
                            Using our interlocking blocks would be more
                            cost-effective:
                          </p>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• 1,760 interlocking blocks: $4,928</li>
                            <li>• 12 bags of cement (70% less): $150</li>
                            <li>• 1 truckload of sand: $120</li>
                            <li>• Reduced labor (30% faster): $1,400</li>
                          </ul>
                          <p className="text-sm mt-2 font-medium text-green-400">
                            Total with interlocking: $6,598 — saving you $642!
                          </p>
                          <p className="text-sm mt-3">
                            Would you like to try our full estimator tool for a
                            more comprehensive quote?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex">
                        <Input
                          placeholder="Type your construction question..."
                          className="bg-slate-800 border-slate-700 text-white"
                        />
                        <Button className="ml-2 bg-orange-600 hover:bg-orange-700">
                          Send
                        </Button>
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        Connect with Brixel AI on WhatsApp: +231 555 123 4567
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Brixel Impact */}
            <TabsContent value="impact">
              <motion.div
                className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div className="space-y-6" variants={fadeIn}>
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Brixel Impact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700">
                    Building Communities, Transforming Lives
                  </h2>
                  <p className="text-slate-600 md:text-lg leading-relaxed">
                    Our social initiative focuses on affordable housing, youth
                    training in construction skills, and partnerships with NGOs
                    and government agencies for community development, all
                    powered by our revolutionary machine-manufactured building
                    blocks.
                  </p>

                  <div className="space-y-5 mt-6">
                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Affordable Housing
                        </h3>
                        <p className="text-slate-600">
                          Developing low-cost housing solutions using our
                          cement-saving interlocking blocks, making quality
                          homes more affordable without compromising on
                          durability or safety.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Skills Development
                        </h3>
                        <p className="text-slate-600">
                          Training programs that equip young people with
                          valuable construction skills, including specialized
                          training on working with our machine-manufactured
                          blocks and interlocking brick systems.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
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
                          className="h-5 w-5 text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Community Projects
                        </h3>
                        <p className="text-slate-600">
                          Working with partners to build schools, clinics, and
                          other essential facilities using our high-strength,
                          precision blocks for structures that will serve
                          communities for generations.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8"
                  >
                    <Button
                      asChild
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-orange-500/30"
                    >
                      <Link href="/impact">Explore Our Impact</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-8" variants={fadeIn}>
                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    variants={cardHover}
                  >
                    <Card className="border-none shadow-lg overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                        <CardTitle className="text-xl">
                          Current Initiatives
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <Building className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Hope Village Project
                              </h4>
                              <p className="text-sm text-slate-500 mb-2">
                                Affordable housing development with 20 units for
                                low-income families, built using our
                                cement-saving interlocking blocks.
                              </p>
                              <Button
                                asChild
                                variant="link"
                                className="px-0 text-orange-600 hover:text-orange-700 group"
                              >
                                <Link href="/projects?category=residential#hope-village">
                                  <span className="inline-flex items-center border-b border-transparent group-hover:border-orange-600 transition-all duration-300">
                                    Learn More{" "}
                                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                  </span>
                                </Link>
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <Users className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Youth Builder Program
                              </h4>
                              <p className="text-sm text-slate-500 mb-2">
                                Training 50 young people annually in
                                construction skills with job placement, focusing
                                on our machine-manufactured block installation
                                techniques.
                              </p>
                              <Button
                                asChild
                                variant="link"
                                className="px-0 text-orange-600 hover:text-orange-700 group"
                              >
                                <Link href="/projects?category=impact#youth-builder">
                                  <span className="inline-flex items-center border-b border-transparent group-hover:border-orange-600 transition-all duration-300">
                                    Learn More{" "}
                                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                  </span>
                                </Link>
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <School className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                School Building Initiative
                              </h4>
                              <p className="text-sm text-slate-500 mb-2">
                                Partnership with NGOs to build and renovate
                                educational facilities using our high-strength,
                                precision-manufactured blocks for durable
                                structures.
                              </p>
                              <Button
                                asChild
                                variant="link"
                                className="px-0 text-orange-600 hover:text-orange-700 group"
                              >
                                <Link href="/projects?category=projects#future-leaders-academy">
                                  <span className="inline-flex items-center border-b border-transparent group-hover:border-orange-600 transition-all duration-300">
                                    Learn More{" "}
                                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                  </span>
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    variants={cardHover}
                  >
                    <Card className="bg-gradient-to-br from-slate-50 to-orange-50 border-dashed border-2 border-orange-200">
                      <CardHeader>
                        <CardTitle className="text-xl text-slate-800">
                          Partner With Us
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">
                          We&apos;re looking for organizations and individuals who
                          share our vision of transforming communities through
                          better construction using our revolutionary
                          machine-manufactured blocks. Join us as a:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                            <span className="text-slate-700">
                              Financial partner or donor
                            </span>
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                            <span className="text-slate-700">
                              Implementation partner (NGOs, government)
                            </span>
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                            <span className="text-slate-700">
                              Technical or knowledge partner
                            </span>
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                            <span className="text-slate-700">
                              Volunteer or skills contributor
                            </span>
                          </li>
                        </ul>
                        <Button
                          asChild
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-500/30"
                        >
                          <Link href="/contact">Become a Partner</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
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
                Ready to Build with Superior Materials?
              </motion.h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Our team is ready to help you bring your construction vision to
                life with our machine-manufactured precision blocks, innovative
                digital tools, and expert services.
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
                  <Link href="/estimator">Try Estimator</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
