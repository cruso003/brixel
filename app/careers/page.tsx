"use client";

import Link from "next/link";
import { Building, Hammer, Brain, Briefcase, ChevronRight, Check, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

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


export default function Careers() {

  // Job listings data
  const jobListings = [
    {
      id: "production-technician",
      title: "Precision Block Production Technician",
      department: "Manufacturing",
      location: "Monrovia, Liberia",
      type: "Full-time",
      description: "Operate and maintain our advanced block manufacturing machinery to produce precision blocks with consistent quality and superior strength.",
      responsibilities: [
        "Operate block manufacturing machinery with attention to quality and precision",
        "Monitor production process to ensure blocks meet our 10× strength standards",
        "Maintain equipment and perform basic troubleshooting",
        "Record production data and quality control measurements",
        "Assist in optimizing the production process for maximum efficiency",
        "Ensure workplace safety protocols are followed at all times"
      ],
      requirements: [
        "High school diploma or equivalent",
        "1+ years of experience in manufacturing or construction (preferred)",
        "Mechanical aptitude and attention to detail",
        "Ability to follow precise technical procedures",
        "Basic computer skills for production tracking",
        "Physical stamina and ability to lift up to 50 lbs"
      ],
      icon: <Hammer className="h-5 w-5 text-blue-600" />
    },
    {
      id: "construction-supervisor",
      title: "Construction Supervisor",
      department: "Construction",
      location: "Monrovia, Liberia",
      type: "Full-time",
      description: "Lead construction projects utilizing our precision-manufactured blocks, ensuring efficient installation and superior build quality.",
      responsibilities: [
        "Supervise construction crews working with our precision interlocking blocks",
        "Ensure proper installation techniques that capitalize on our blocks' unique properties",
        "Manage project timelines and resource allocation",
        "Perform quality control inspections throughout the building process",
        "Train workers on specialized techniques for our innovative building materials",
        "Coordinate with clients and project managers"
      ],
      requirements: [
        "3+ years of experience in construction supervision",
        "Strong knowledge of building techniques and standards",
        "Leadership skills with ability to manage diverse teams",
        "Problem-solving ability and attention to detail",
        "Basic computer skills for project documentation",
        "Certification in construction management (preferred)"
      ],
      icon: <Building className="h-5 w-5 text-green-600" />
    },
    {
      id: "digital-specialist",
      title: "Construction Technology Specialist",
      department: "Digital Systems",
      location: "Monrovia, Liberia",
      type: "Full-time",
      description: "Support and enhance our digital tools that help customers plan, estimate, and visualize construction projects using our precision blocks.",
      responsibilities: [
        "Support customers using our digital estimation and planning tools",
        "Gather user feedback to improve digital product features",
        "Create accurate material estimates for construction projects",
        "Develop digital content showing best practices for our building systems",
        "Assist in training customers on digital tools",
        "Collaborate with development team on new features"
      ],
      requirements: [
        "Bachelor's degree in construction management, engineering, or related field",
        "Experience with construction estimation software",
        "Strong digital literacy and problem-solving skills",
        "Excellent communication abilities",
        "Understanding of building materials and construction processes",
        "Ability to translate technical concepts for non-technical audiences"
      ],
      icon: <Brain className="h-5 w-5 text-purple-600" />
    },
    {
      id: "impact-coordinator",
      title: "Community Impact Coordinator",
      department: "Brixel Impact",
      location: "Monrovia, Liberia",
      type: "Full-time",
      description: "Coordinate our community initiatives that demonstrate how our superior building materials can create positive social impact through better construction.",
      responsibilities: [
        "Manage affordable housing projects using our precision blocks",
        "Coordinate youth training programs in advanced construction techniques",
        "Develop relationships with NGOs and community organizations",
        "Track and report on community impact metrics",
        "Identify new opportunities for positive community impact",
        "Represent Brixel at community events and meetings"
      ],
      requirements: [
        "Bachelor's degree in social work, community development, or related field",
        "2+ years experience in community development or NGO work",
        "Strong project management skills",
        "Excellent communication and relationship-building abilities",
        "Passion for sustainable development and community empowerment",
        "Experience in construction or building projects (preferred)"
      ],
      icon: <Users className="h-5 w-5 text-rose-600" />
    }
  ];

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
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              Build Your Career With Us
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
              Be part of revolutionizing Africa&apos;s construction industry through our 
              machine-manufactured precision blocks and innovative building solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
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
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 mb-2">
                Why Join Brixel
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700 mb-4">
                Be Part of the Construction Revolution
              </h2>
              <p className="text-slate-600 md:text-lg">
                At Brixel, we&apos;re not just building structures—we&apos;re transforming how Africa builds.
                Our machine-manufactured precision blocks are creating a new standard in construction,
                and we need passionate, talented individuals to help drive this revolution forward.
              </p>
              
              <div className="space-y-5 mt-8">
                <motion.div 
                  className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Meaningful Work</h3>
                    <p className="text-slate-600">
                      Help create buildings that last generations with our 10× stronger blocks,
                      making quality construction more accessible across Africa.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Innovation & Growth</h3>
                    <p className="text-slate-600">
                      Work with cutting-edge manufacturing technology and digital tools in 
                      a company that&apos;s constantly evolving and expanding.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-full bg-green-500/20 p-3 mr-4 mt-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Skills Development</h3>
                    <p className="text-slate-600">
                      Gain specialized knowledge in advanced construction techniques and
                      precision manufacturing processes that set you apart in the industry.
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
                  src="/images/careers/team-working.jpg" 
                  alt="Brixel team members working with precision manufacturing equipment" 
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-semibold text-orange-300">Our Team</div>
                  <div className="text-lg font-bold">Passionate professionals driving construction innovation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Employee Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What We Offer
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                We value our team members and offer a range of benefits to support your growth,
                wellbeing, and contribution to our mission.
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Specialized training in precision manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Clear advancement pathways</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cross-departmental learning opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Leadership development programs</span>
                  </li>
                </ul>
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Compensation & Wellbeing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Competitive salary and performance bonuses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Health and wellness benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Flexible work arrangements where possible</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Paid time off and holidays</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-3 bg-purple-500"></div>
              <div className="p-6">
                <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Company Culture</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Collaborative innovation-focused environment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regular team building activities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recognition for exceptional contributions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Direct impact on company growth and vision</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
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
                Current Openings
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Join Our Growing Team
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Explore our open positions and find where your skills and passion 
                can contribute to revolutionizing construction in Africa.
              </p>
            </div>
          </motion.div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-100 p-1 rounded-full overflow-hidden">
                <TabsTrigger 
                  value="all" 
                  className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  All Departments
                </TabsTrigger>
                <TabsTrigger 
                  value="manufacturing" 
                  className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Manufacturing
                </TabsTrigger>
                <TabsTrigger 
                  value="construction" 
                  className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Construction
                </TabsTrigger>
                <TabsTrigger 
                  value="digital" 
                  className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Digital
                </TabsTrigger>
                <TabsTrigger 
                  value="impact" 
                  className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Impact
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <motion.div 
                className="grid gap-6 md:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {jobListings.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="manufacturing">
              <motion.div 
                className="grid gap-6 md:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {jobListings
                  .filter(job => job.department === "Manufacturing")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="construction">
              <motion.div 
                className="grid gap-6 md:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {jobListings
                  .filter(job => job.department === "Construction")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="digital">
              <motion.div 
                className="grid gap-6 md:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {jobListings
                  .filter(job => job.department === "Digital Systems")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="impact">
              <motion.div 
                className="grid gap-6 md:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {jobListings
                  .filter(job => job.department === "Brixel Impact")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process Section */}
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
                Application Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                How to Join Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Our streamlined application process is designed to find the best talent
                to help drive our mission forward.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute left-[29px] top-0 bottom-0 w-1 bg-orange-200"></div>
              
              <div className="space-y-12">
                <motion.div 
                  className="relative pl-16"
                  variants={fadeIn}
                >
                  <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Application Submission</h3>
                    <p className="text-slate-600 mb-4">
                      Browse our open positions and submit your application through our online portal.
                      Include your resume and a cover letter explaining why you&apos;re excited about joining
                      our mission to revolutionize construction with precision-manufactured blocks.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <h4 className="font-medium text-orange-700 mb-2">Tips for a Strong Application</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                      <li className="flex items-start">
                          <Check className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Highlight any experience with advanced manufacturing or precision building</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Showcase your interest in construction innovation</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Explain what motivates you about our mission</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Be specific about how your skills align with the position</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative pl-16"
                  variants={fadeIn}
                >
                  <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Initial Interview</h3>
                    <p className="text-slate-600 mb-4">
                      If your application aligns with our needs, we&apos;ll invite you for an initial interview
                      to learn more about your experience, skills, and passion for revolutionizing
                      construction through precision manufacturing and innovation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Interview Format</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>30-45 minute conversation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>In-person or video call</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Discussion of background and experience</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">What We&apos;re Looking For</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Alignment with our values</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Passion for innovation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Problem-solving abilities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative pl-16"
                  variants={fadeIn}
                >
                  <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Skills Assessment</h3>
                    <p className="text-slate-600 mb-4">
                      Depending on the role, we may ask you to complete a practical assessment to
                      demonstrate your technical skills and problem-solving abilities. For manufacturing
                      roles, this might include demonstrating your understanding of precision processes.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-700 mb-2">Assessment Examples</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                        <div>
                          <span className="font-medium">Manufacturing Roles:</span>
                          <p>Quality control exercises and machinery operation simulation</p>
                        </div>
                        <div>
                          <span className="font-medium">Construction Roles:</span>
                          <p>Building technique demonstration and project planning</p>
                        </div>
                        <div>
                          <span className="font-medium">Digital Roles:</span>
                          <p>Software tool usage and estimation challenges</p>
                        </div>
                        <div>
                          <span className="font-medium">Impact Roles:</span>
                          <p>Community engagement scenarios and program planning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative pl-16"
                  variants={fadeIn}
                >
                  <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Final Interview & Offer</h3>
                    <p className="text-slate-600 mb-4">
                      Successful candidates will be invited for a final interview with senior team members
                      to discuss specific role expectations, company culture, and your career goals.
                      If there&apos;s a strong mutual fit, we&apos;ll extend an offer to join our team.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <h4 className="font-medium text-green-700 mb-2">What to Expect in Your Offer</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Competitive compensation package</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Benefits overview</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Start date and onboarding information</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <h4 className="font-medium text-orange-700 mb-2">Onboarding Preview</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Comprehensive orientation to our material technology</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Team integration activities</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Role-specific training</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
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
                FAQs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                Find answers to common questions about careers at Brixel.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-orange-600 transition-colors">
                  What kind of background do I need to work at Brixel?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We look for candidates with diverse backgrounds who share our passion for
                  revolutionizing construction through precision manufacturing and innovation.
                  While experience in construction, manufacturing, or technology is valuable for many
                  roles, we also value transferable skills, a growth mindset, and alignment with
                  our mission. Each position has specific requirements outlined in the job description.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-orange-600 transition-colors">
                  Do you offer internships or entry-level positions?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, we believe in growing talent and regularly offer internships and entry-level
                  positions across our departments, particularly in manufacturing and construction.
                  These opportunities are perfect for those looking to begin careers in innovative
                  construction technology. Check our current openings or contact us directly to
                  inquire about upcoming opportunities.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-orange-600 transition-colors">
                  What is the work environment like at Brixel?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our work environment blends manufacturing precision with innovation energy.
                  Depending on your role, you might work in our production facility with our
                  block manufacturing machinery, at construction sites, or in our office environment.
                  All locations emphasize collaboration, continuous improvement, and our mission to
                  revolutionize construction through superior building materials.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-orange-600 transition-colors">
                  How long does the application process typically take?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our application process typically takes 2-4 weeks from application to offer.
                  We strive to be respectful of your time and communicate clearly throughout
                  the process. The timeline may vary based on the position, number of applicants,
                  and scheduling factors.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-orange-600 transition-colors">
                  Can I apply for multiple positions at once?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, you&apos;re welcome to apply for multiple positions that match your skills and
                  interests. We encourage you to focus on roles where you have relevant qualifications
                  and explain in your cover letter why you&apos;re interested in each position and how
                  your background aligns with them.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-orange-600 transition-colors">
                  Are there opportunities for career advancement?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Absolutely! As a growing company revolutionizing construction through our
                  precision-manufactured blocks, we&apos;re committed to developing our team members.
                  We offer clear advancement pathways, cross-training opportunities, and leadership
                  development. Many of our supervisory and management positions are filled through
                  internal promotion as team members grow their expertise in our innovative
                  building systems.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                Ready to Build the Future of Construction?
              </motion.h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Join our team and be part of revolutionizing Africa&apos;s construction industry
                through our machine-manufactured precision blocks and innovative building solutions.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row mt-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-lg shadow-lg">
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-700 hover:border-orange-700 px-8 py-6 text-lg rounded-lg shadow-lg">
                  <Link href="/contact?subject=Careers">Contact Recruitment</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Job Card Component
type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  icon: React.ReactNode;
};

function JobCard({ job }: { job: Job }) {
  const { title, department, location, type, description, responsibilities, requirements, icon, id } = job;
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-none shadow-md overflow-hidden h-full">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 pb-4">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white shadow-sm mr-2">
              {icon}
            </div>
            <span className="text-sm font-medium text-slate-600">{department}</span>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="flex items-center text-xs text-slate-500 bg-white px-2 py-1 rounded-full shadow-sm">
              <MapPin className="h-3 w-3 mr-1" /> {location}
            </div>
            <div className="flex items-center text-xs text-slate-500 bg-white px-2 py-1 rounded-full shadow-sm">
              <Briefcase className="h-3 w-3 mr-1" /> {type}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-slate-600 mb-4">
            {description}
          </p>
          
          {isOpen ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">Key Responsibilities</h3>
                <ul className="space-y-1 text-slate-600">
                  {responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Requirements</h3>
                <ul className="space-y-1 text-slate-600">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white mt-2">
                <Link href={`/contact?job=${id}`}>Apply for This Position</Link>
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              className="w-full hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
              onClick={() => setIsOpen(true)}
            >
              View Details <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
