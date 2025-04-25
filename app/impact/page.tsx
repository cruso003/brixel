"use client";

import Link from "next/link";
import { Building, Users, School, Heart, HandHeart, Lightbulb, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Impact() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      y: -5,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
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
              Our Social Initiative
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              Brixel Impact
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
              Building communities, transforming lives. Our initiative leverages our precision-manufactured
              building materials to create affordable housing and sustainable infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Impact Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700">
                Building Hope Through Quality Homes
              </h2>
              <p className="text-slate-600 md:text-lg">
                Brixel Impact is our dedicated social initiative that channels our construction expertise
                and machine-manufactured precision blocks into projects that create lasting positive change 
                in communities across Liberia.
              </p>
              <p className="text-slate-600 md:text-lg">
                We believe that quality construction is not just about buildings—it&apos;s about building futures.
                By utilizing our superior building materials, we&apos;re able to create affordable housing and
                community infrastructure that is both higher quality and more cost-effective than
                traditional construction methods.
              </p>
              
              <div className="space-y-5 mt-8">
                <motion.div 
                  className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
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
                    <h3 className="font-semibold text-lg">Community-Centered Design</h3>
                    <p className="text-slate-600">
                      We develop solutions using our machine-manufactured blocks that address the specific 
                      needs of each community while providing the durability needed for generations to come.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
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
                    <h3 className="font-semibold text-lg">Sustainability Focus</h3>
                    <p className="text-slate-600">
                      Our cement-saving interlocking blocks require 70% less mortar during installation,
                      reducing both costs and environmental impact while providing superior strength.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
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
                    <h3 className="font-semibold text-lg">Skills Transfer</h3>
                    <p className="text-slate-600">
                      We equip local communities with construction skills for working with our 
                      machine-manufactured blocks, creating employment opportunities and ensuring
                      long-term self-sufficiency.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/images/impact/community-building.jpg" 
                  alt="Building hope through quality construction in Liberian communities" 
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-semibold text-orange-300">Brixel Impact Project</div>
                  <div className="text-lg font-bold">Building stronger communities with precision-manufactured blocks</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials Advantage Section */}
      <section className="w-full py-12 md:py-20 bg-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
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
                Building Better Lives with Better Materials
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Our social impact is amplified by the unique advantages of our machine-manufactured precision blocks,
                allowing us to build higher quality structures at lower costs.
              </p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-slate-600">
                Our interlocking designs require up to 70% less cement during installation, making quality
                housing more affordable for low-income communities and stretching donor funds further.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">10× Stronger</h3>
              <p className="text-slate-600">
                Our machine-made blocks provide 10 times the strength of conventional materials, ensuring
                community buildings have greater durability and longevity with minimal maintenance costs.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Faster Construction</h3>
              <p className="text-slate-600">
                The precision dimensions of our machine-manufactured blocks allow for faster construction,
                reducing labor costs and enabling us to complete more community projects in less time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Initiatives
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                How We&apos;re Making a Difference
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Our impact initiatives focus on three key areas where our precision-manufactured
                building materials create meaningful change.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
              <Card className="border-none shadow-lg h-full overflow-hidden">
                <div className="h-2 bg-blue-500"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Affordable Housing</CardTitle>
                  <CardDescription>
                    Building quality homes that are accessible and affordable for all
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">
                    We design and build affordable housing developments using our machine-manufactured
                    interlocking blocks, which reduce construction costs by requiring 70% less cement
                    during installation while providing homes that are 10 times stronger than
                    conventional construction.
                  </p>
                  <div className="space-y-2">
                    <div className="font-medium">Current Focus:</div>
                    <ul className="text-sm text-slate-600 space-y-1 pl-5 list-disc">
                      <li>Hope Village: 20-unit affordable housing development built with our precision blocks</li>
                      <li>Low-cost housing design research optimized for our interlocking block system</li>
                      <li>Pay-as-you-go home ownership models with reduced maintenance costs</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full hover:bg-blue-50 hover:text-blue-600">
                    <Link href="/projects?category=residential">
                      View Housing Projects <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
              <Card className="border-none shadow-lg h-full overflow-hidden">
                <div className="h-2 bg-green-500"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Skills Development</CardTitle>
                  <CardDescription>
                    Training the next generation of construction professionals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">
                    Our training programs equip young people with specialized skills for working
                    with our machine-manufactured precision blocks. These advanced construction
                    techniques create higher-value employment opportunities and help spread our
                    innovative building methods throughout the region.
                  </p>
                  <div className="space-y-2">
                    <div className="font-medium">Current Focus:</div>
                    <ul className="text-sm text-slate-600 space-y-1 pl-5 list-disc">
                      <li>Youth Builder Program: Training 50 young people annually in precision block installation</li>
                      <li>Construction apprenticeships focused on our advanced building techniques</li>
                      <li>Digital construction skills workshops including our AI Estimator tool</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full hover:bg-green-50 hover:text-green-600">
                    <Link href="/contact">
                      Learn About Training <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
              <Card className="border-none shadow-lg h-full overflow-hidden">
                <div className="h-2 bg-purple-500"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                    <School className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Community Infrastructure</CardTitle>
                  <CardDescription>
                    Building essential facilities that strengthen communities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">
                    We partner with NGOs and government agencies to build essential community
                    infrastructure using our high-strength machine-manufactured blocks. These
                    superior materials ensure schools, clinics, and markets are built to last
                    generations with minimal maintenance requirements.
                  </p>
                  <div className="space-y-2">
                    <div className="font-medium">Current Focus:</div>
                    <ul className="text-sm text-slate-600 space-y-1 pl-5 list-disc">
                      <li>School Building Initiative: Constructing educational facilities with our precision blocks</li>
                      <li>Healthcare facility improvements with specialized acoustic and insulation properties</li>
                      <li>Water and sanitation infrastructure built for superior durability</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full hover:bg-purple-50 hover:text-purple-600">
                    <Link href="/projects?category=institutional">
                      View Community Projects <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Creating Measurable Change
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                We measure our success by the positive impact our precision-manufactured
                building materials create in communities across Liberia.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md space-y-2"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-orange-600">20+</div>
              <div className="font-medium text-lg">Affordable Homes</div>
              <p className="text-sm text-slate-600">Built with our precision blocks for superior durability</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md space-y-2"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-orange-600">50+</div>
              <div className="font-medium text-lg">Youth Trained</div>
              <p className="text-sm text-slate-600">In advanced construction techniques with our materials</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md space-y-2"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-orange-600">3</div>
              <div className="font-medium text-lg">Community Buildings</div>
              <p className="text-sm text-slate-600">Constructed with 10× stronger precision blocks</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md space-y-2"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-orange-600">5</div>
              <div className="font-medium text-lg">NGO Partnerships</div>
              <p className="text-sm text-slate-600">Leveraging our superior materials for greater impact</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 border border-orange-200 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">Our Impact Journey</h3>
                <p className="text-orange-700 mb-6">
                  We&apos;re just getting started. Our vision is to expand our impact initiatives and our
                  precision-manufactured building materials to reach more communities across Liberia
                  and eventually throughout West Africa.
                </p>
                <div className="space-y-5">
                  <div className="flex bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-200 flex items-center justify-center mr-3">
                      <span className="text-orange-700 font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Phase 1: Monrovia Area (Current)</h4>
                      <p className="text-sm text-orange-700/80">
                        Focusing our precision block construction projects in and around the capital city
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-200 flex items-center justify-center mr-3">
                      <span className="text-orange-700 font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Phase 2: Expanding to Key Counties</h4>
                      <p className="text-sm text-orange-700/80">
                        Bringing our machine-manufactured blocks and expertise to more regions across Liberia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-200 flex items-center justify-center mr-3">
                      <span className="text-orange-700 font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Phase 3: West Africa Expansion</h4>
                      <p className="text-sm text-orange-700/80">
                        Sharing our precision block manufacturing technology and impact model with neighboring countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-orange-600 mr-2" />
                  Get Involved
                </h3>
                <p className="text-slate-600 mb-6">
                  There are many ways you can support our impact initiatives and help us create
                  positive change through our superior building materials:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-orange-50 transition-colors duration-200">
                    <HandHeart className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span>
                      <span className="font-medium">Partner with us:</span> Collaborate on community projects using our precision blocks
                    </span>
                  </li>
                  
                  <li className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-orange-50 transition-colors duration-200">
                    <Lightbulb className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span>
                      <span className="font-medium">Share expertise:</span> Volunteer your skills to help us optimize our building systems
                    </span>
                  </li>
                  
                  <li className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-orange-50 transition-colors duration-200">
                    <Building className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span>
                      <span className="font-medium">Fund projects:</span> Support our affordable housing initiatives with machine-made blocks
                    </span>
                  </li>
                  
                  <li className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-orange-50 transition-colors duration-200">
                    <Users className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span>
                      <span className="font-medium">Spread the word:</span> Help us reach more communities with our innovative building solutions
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-500/30">
                    <Link href="/contact">Become a Partner</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Lives Transformed Through Our Premium Materials
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Behind every project built with our machine-manufactured blocks are real people 
                whose lives have been positively impacted by superior construction.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
              <Card className="border-none shadow-lg overflow-hidden h-full">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/images/projects/residential-1.jpg" 
                    alt="Hope Village Affordable Housing Project" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-semibold text-orange-300">Affordable Housing</div>
                    <div className="text-lg font-bold">Hope Village Community</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Hope Village Community</CardTitle>
                  <CardDescription>Built with our machine-manufactured precision blocks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-4">
                    <p className="text-sm text-orange-700">
                      <span className="font-semibold">Materials used:</span> Precision-manufactured interlocking blocks with 10× the strength of conventional materials, requiring 70% less cement during installation
                    </p>
                  </div>
                  <p className="text-slate-600">
                    &lquot;The Hope Village project has completely transformed our lives. Before this, we were living in
                    an unsafe structure with leaks and poor insulation. Now, we have a solid, comfortable home that
                    we can afford. The Brixel blocks make our home feel so sturdy and secure, unlike anything else in our area.&rquot;
                  </p>
                  <div className="mt-4 text-sm font-medium">
                    - Sarah Johnson, Hope Village Resident
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full hover:bg-orange-50 hover:text-orange-600">
                    <Link href="/projects?category=residential#hope-village">
                      View Project Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
              <Card className="border-none shadow-lg overflow-hidden h-full">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/images/projects/youth-builder-detail-2.jpg" 
                    alt="Youth Builder Program" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-semibold text-orange-300">Skills Development</div>
                    <div className="text-lg font-bold">Youth Builder Program</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Youth Builder Program</CardTitle>
                  <CardDescription>Training in precision block installation techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-4">
                    <p className="text-sm text-orange-700">
                      <span className="font-semibold">Skills taught:</span> Machine-manufactured block installation, interlocking brick systems, advanced construction techniques for superior building quality
                    </p>
                  </div>
                  <p className="text-slate-600">
                    &lquot;Before joining the Youth Builder Program, I had no clear path. The training in working with Brixel&apos;s
                    precision blocks gave me specialized skills that are in high demand. Now, I&apos;m employed full-time
                    earning twice what conventional masons make because I know how to build with these superior materials.&rquot;
                  </p>
                  <div className="mt-4 text-sm font-medium">
                    - James Cooper, Program Graduate
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full hover:bg-orange-50 hover:text-orange-600">
                    <Link href="/projects?category=impact#youth-builder">
                      View Program Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
              <Card className="border-none shadow-lg overflow-hidden h-full">
                <div className="relative h-60 w-full">
                  <Image 
                    src="/images/projects/institutional-1.jpg" 
                    alt="Future Leaders Academy" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-semibold text-orange-300">Community Infrastructure</div>
                    <div className="text-lg font-bold">Future Leaders Academy</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Future Leaders Academy</CardTitle>
                  <CardDescription>Built with high-strength precision blocks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-4">
                    <p className="text-sm text-orange-700">
                      <span className="font-semibold">Materials used:</span> Special acoustic hollow blocks manufactured with our precision machinery, providing superior sound insulation between classrooms and 10× the durability
                    </p>
                  </div>
                  <p className="text-slate-600">
                    &lquot;Our community had been trying to build a proper school for years. The partnership with
                    Brixel and their amazing precision blocks made it possible. Now, our children have a safe,
                    well-designed learning environment that will last for generations with minimal maintenance costs.&rquot;
                  </p>
                  <div className="mt-4 text-sm font-medium">
                    - Principal David Wilson, Future Leaders Academy
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full hover:bg-orange-50 hover:text-orange-600">
                    <Link href="/projects?category=institutional#future-leaders-academy">
                      View Project Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
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
                Join Us in Building a Better Future
              </motion.h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Together, we can create meaningful change through our machine-manufactured
                precision blocks that provide superior quality construction for communities in need.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row mt-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-lg shadow-lg">
                  <Link href="/contact">Become a Partner</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-700 hover:border-orange-700 px-8 py-6 text-lg rounded-lg shadow-lg">
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
