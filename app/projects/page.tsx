"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building,
  Calendar,
  MapPin,
  ChevronRight,
  ArrowLeft,
  Filter,
  Clock,
  Hammer,
  Trophy,
  Home,
  Store,
  School,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define TypeScript interfaces for our project data
interface Project {
  id: string;
  title: string;
  location: string;
  date: string;
  category: "residential" | "commercial" | "institutional" | "impact";
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  materials: string;
  brixelMaterials: string; // Highlight Brixel materials used
  status: "completed" | "in-progress";
  duration: string;
  imageUrl: string;
  galleryImages?: string[];
}

// Sample project data with enhanced material descriptions
const projects: Project[] = [
  {
    id: "hope-village",
    title: "Hope Village Community Housing",
    location: "Monrovia, Liberia",
    date: "Completed June 2024",
    category: "residential",
    tags: ["Affordable Housing", "Community Development", "Multi-Unit"],
    description:
      "A community housing development featuring 20 affordable units built with our machine-manufactured precision blocks. This project showcases how our superior building materials can make quality housing more accessible.",
    challenge:
      "Creating affordable housing without compromising on quality or durability, while working within strict budget constraints.",
    solution:
      "Utilized Brixel's interlocking blocks to reduce construction time and costs by 30%. Our machine-made blocks with optimized cement-aggregate ratio provided 10x the strength of conventional blocks while requiring less cement during installation.",
    impact:
      "Provided safe, sustainable housing for 20 families, created 35 construction jobs, and established a model for affordable housing that's both higher quality and more cost-effective than traditional construction methods.",
    materials: "Interlocking blocks, sustainable timber, local materials",
    brixelMaterials:
      "Machine-manufactured interlocking blocks with precision dimensions, reducing mortar usage by 70% and providing 10x the strength of conventional blocks",
    status: "completed",
    duration: "8 months (30% faster than traditional methods)",
    imageUrl: "/images/projects/residential-1.jpg",
    galleryImages: [
      "/images/projects/residential-detail-1.jpg",
      "/images/projects/residential-detail-2.jpg",
    ],
  },
  {
    id: "liberty-plaza",
    title: "Liberty Commercial Plaza",
    location: "Buchanan, Liberia",
    date: "Completed March 2024",
    category: "commercial",
    tags: ["Commercial Space", "Retail", "Urban Development"],
    description:
      "A modern commercial complex featuring 8 retail spaces and offices, built with our machine-manufactured high-strength blocks to ensure superior durability and structural integrity for these business establishments.",
    challenge:
      "Creating a versatile commercial space that could accommodate various businesses while maintaining structural integrity and sound isolation between units.",
    solution:
      "Designed flexible retail units using our precision-manufactured blocks for perfect dimensions and superior sound isolation. Our machine-made blocks provided exceptional structural strength for commercial applications at lower overall cost.",
    impact:
      "Created space for 8 local businesses, generated 15 permanent jobs, and established a commercial hub with significantly lower maintenance requirements due to the superior strength of our building materials.",
    materials:
      '6" and 8" hollow concrete blocks, reinforced concrete, commercial-grade fixtures',
    brixelMaterials:
      "Machine-manufactured hollow blocks with optimized cement-aggregate ratio providing 10x strength compared to standard blocks, ensuring long-term durability for commercial applications",
    status: "completed",
    duration: "10 months",
    imageUrl: "/images/projects/commercial-1.jpg",
    galleryImages: [
      "/images/projects/commercial-2.jpg",
      "/images/projects/commercial-3.jpg",
    ],
  },
  {
    id: "future-leaders-academy",
    title: "Future Leaders Academy",
    location: "Gbarnga, Bong County, Liberia",
    date: "Completed December 2023",
    category: "institutional",
    tags: ["Education", "Community Facility", "Rural Development"],
    description:
      "An educational facility with 6 classrooms, administrative block, and multi-purpose hall, all constructed with our machine-made precision blocks to ensure a durable, long-lasting structure for generations of students.",
    challenge:
      "Building a durable, functional educational facility in a rural area with limited access to materials and skilled labor.",
    solution:
      "Transported our premium machine-manufactured blocks to the site, which allowed for faster construction and superior structural integrity. Trained local workers in our efficient installation techniques, reducing overall labor costs despite the remote location.",
    impact:
      "Provided educational space for 240 students with a building that will require minimal maintenance due to the superior quality of our blocks. Trained 12 local residents in advanced construction skills using our materials.",
    materials:
      "Special acoustic hollow blocks, reinforced concrete, locally-sourced wood",
    brixelMaterials:
      "Machine-made acoustic hollow blocks with optimized cement-aggregate mix, providing superior sound insulation between classrooms while maintaining structural strength",
    status: "completed",
    duration: "12 months",
    imageUrl: "/images/projects/institutional-1.jpg",
    galleryImages: [
      "/images/projects/institutional-detail-1.jpg",
      "/images/projects/institutional-detail-2.png",
    ],
  },
  {
    id: "riverside-health-clinic",
    title: "Riverside Health Clinic",
    location: "Harper, Maryland County, Liberia",
    date: "Completed November 2023",
    category: "institutional",
    tags: ["Healthcare", "Community Facility", "Coastal"],
    description:
      "A community healthcare facility built to withstand coastal conditions using our machine-manufactured high-strength blocks, ensuring that this critical infrastructure will serve the community for decades.",
    challenge:
      "Creating a medical facility that could withstand harsh coastal weather while meeting healthcare infrastructure requirements with limited resources.",
    solution:
      "Utilized our precision-manufactured blocks with 10x the strength of conventional materials to create a structure resistant to coastal conditions. The dimensional accuracy of our machine-made blocks accelerated construction while ensuring perfect execution of the design.",
    impact:
      "Provided healthcare access for approximately 5,000 residents with a facility that will require minimal maintenance despite challenging coastal conditions, thanks to the superior quality of our building materials.",
    materials:
      "Reinforced concrete structure with special insulation, medical-grade fixtures",
    brixelMaterials:
      "Precision-manufactured hollow blocks with special coastal-formulation, providing 10x strength and superior resistance to salt air and humidity",
    status: "completed",
    duration: "9 months",
    imageUrl: "/images/projects/healthcare-1.png",
    galleryImages: [
      "/images/projects/healthcare-detail-1.png",
      "/images/projects/healthcare-detail-2.jpg",
    ],
  },
  {
    id: "youth-builder",
    title: "Youth Builder Training Program",
    location: "Monrovia, Liberia",
    date: "Ongoing since January 2024",
    category: "impact",
    tags: ["Skills Development", "Youth Employment", "Construction Training"],
    description:
      "An intensive training program that equips young Liberians with specialized construction skills focused on installation and building techniques using our machine-manufactured precision blocks.",
    challenge:
      "Addressing youth unemployment in Liberia while meeting the growing demand for skilled workers who can properly install our high-performance building materials.",
    solution:
      "Developed a comprehensive 3-month training curriculum that combines classroom theory with hands-on practice. Participants learn proper installation techniques for our precision blocks, with emphasis on the specialized methods needed for our interlocking systems.",
    impact:
      "Trained 50 young people in the first cohort with a 85% job placement rate. Graduates earn 40% more than conventional construction workers due to their specialized skills. The program has created a pipeline of skilled labor for our growing construction projects.",
    materials:
      "Training facility, precision block demonstration models, construction tools, safety equipment",
    brixelMaterials:
      "Machine-manufactured blocks for training purposes, including cutaway models showing internal structure and various types of interlocking systems for different applications",
    status: "in-progress",
    duration: "Ongoing program with quarterly cohorts of 15-20 participants",
    imageUrl: "/images/projects/youth-builder-1.jpg",
    galleryImages: [
      "/images/projects/youth-builder-detail-1.jpg",
      "/images/projects/youth-builder-detail-2.jpg",
    ],
  },
  {
    id: "green-valley-residences",
    title: "Green Valley Residential Development",
    location: "Paynesville, Monrovia, Liberia",
    date: "In Progress - Phase 1 (2025)",
    category: "residential",
    tags: ["Residential", "Sustainable", "Development"],
    description:
      "A modern residential development featuring 30 units of various sizes, designed with sustainability and community in mind. All units are being constructed with our machine-manufactured interlocking blocks for superior quality and reduced cement usage.",
    challenge:
      "Creating a sustainable residential community that balances modern amenities with environmental responsibility and affordability.",
    solution:
      "Implementing our cement-saving interlocking block system that requires 70% less mortar during construction. The precision of our machine-made blocks is allowing for faster construction timelines while ensuring superior structural integrity for all units.",
    impact:
      "Will provide quality housing for 30 families with homes that are stronger, more durable, and more energy-efficient than conventional construction, all while reducing construction waste and cement usage.",
    materials:
      "Combination of Brixel blocks, sustainable materials, renewable energy systems",
    brixelMaterials:
      "Machine-manufactured interlocking blocks requiring 70% less cement during installation, with perfect dimensional accuracy ensuring faster construction and superior wall alignment",
    status: "in-progress",
    duration: "24 months (planned)",
    imageUrl: "/images/projects/residential-2.jpg",
    galleryImages: [
      "/images/projects/residential-detail-3.jpg",
      "/images/projects/residential-detail-4.jpg",
    ],
  },
  {
    id: "community-market",
    title: "Central Community Market",
    location: "Kakata, Liberia",
    date: "In Progress (2025)",
    category: "commercial",
    tags: ["Market", "Community", "Economic Development"],
    description:
      "A purpose-built market facility with 40 vendor stalls, constructed with our machine-manufactured high-strength blocks to ensure durability in this high-traffic commercial environment.",
    challenge:
      "Designing a market facility that meets the needs of various vendors while ensuring durability, sanitation, and easy maintenance.",
    solution:
      "Creating modular vendor stalls with Brixel's machine-made precision blocks, which provide 10x the strength of conventional materials, ensuring the facility will withstand heavy daily use while requiring minimal maintenance.",
    impact:
      "Will support 40+ small businesses with a facility built to last generations, thanks to the superior quality of our building materials. The precision of our blocks is also allowing for perfect implementation of drainage systems for improved sanitation.",
    materials: "Hollow blocks, steel framing, durable commercial surfaces",
    brixelMaterials:
      "High-strength machine-manufactured hollow blocks with optimized cement-aggregate mix providing 10x the durability of conventional blocks, perfect for high-traffic commercial applications",
    status: "in-progress",
    duration: "14 months (planned)",
    imageUrl: "/images/projects/commercial-2.jpg",
    galleryImages: [
      "/images/projects/commercial-detail-3.jpg",
      "/images/projects/commercial-detail-4.jpg",
    ],
  },
];

// Types for filtering
type FilterType =
  | "all"
  | "residential"
  | "commercial"
  | "institutional"
  | "completed"
  | "in-progress";

// Animation variants
const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, type: "tween" },
  },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: { duration: 0.3, type: "tween" },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");

  // Handle URL parameters for direct linking from services page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get("category");
      if (
        category &&
        ["residential", "commercial", "institutional", "impact"].includes(
          category
        )
      ) {
        setFilter(category as FilterType);
      }

      // Check for project ID in URL hash
      const hash = window.location.hash.replace("#", "");
      if (hash && projects.some((p) => p.id === hash)) {
        setSelectedProject(hash);
      }
    }
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      filter === "all" ||
      project.category === filter ||
      project.status === filter
  );

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


  return (
    <main className="flex-1">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDetail
              project={projects.find((p) => p.id === selectedProject) || null}
              onBack={() => setSelectedProject(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="project-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
                    Our Portfolio
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                    Projects Built to Last
                  </h1>
                  <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
                    Explore our portfolio of residential, commercial, and
                    community projects across Liberia, all built with our
                    machine-manufactured precision blocks for superior quality
                    and durability.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="w-full py-16 md:py-24 bg-white">
              <div className="container px-4 md:px-6 mx-auto">
                <Tabs
                  value={filter}
                  onValueChange={(value) => setFilter(value as FilterType)}
                  className="w-full"
                >
                  <div className="flex justify-center mb-10">
                    <TabsList className="bg-slate-100 p-1 rounded-full overflow-hidden">
                      <TabsTrigger
                        value="all"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                      >
                        All Projects
                      </TabsTrigger>
                      <TabsTrigger
                        value="residential"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                      >
                        <Home className="h-4 w-4 mr-1" />
                        Residential
                      </TabsTrigger>
                      <TabsTrigger
                        value="commercial"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                      >
                        <Store className="h-4 w-4 mr-1" />
                        Commercial
                      </TabsTrigger>
                      <TabsTrigger
                        value="institutional"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                      >
                        <School className="h-4 w-4 mr-1" />
                        Institutional
                      </TabsTrigger>
                      <TabsTrigger
                        value="impact"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                      >
                        <Building className="h-4 w-4 mr-1" />
                        Impact
                      </TabsTrigger>
                      <TabsTrigger
                        value="completed"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                      >
                        <Trophy className="h-4 w-4 mr-1" />
                        Completed
                      </TabsTrigger>
                      <TabsTrigger
                        value="in-progress"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                      >
                        <Clock className="h-4 w-4 mr-1" />
                        In Progress
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <TabsContent value={filter} className="mt-0">
                      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                          <motion.div key={project.id} variants={fadeIn}>
                            <ProjectCard
                              project={project}
                              onClick={() => setSelectedProject(project.id)}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                          <div className="inline-block p-3 rounded-full bg-slate-100 mb-4">
                            <Filter className="h-6 w-6 text-slate-400" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            No matching projects
                          </h3>
                          <p className="text-slate-500">
                            Try adjusting your filters to find what you&apos;re
                            looking for.
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  </motion.div>
                </Tabs>
              </div>
            </section>

            {/* Materials Advantage Section */}
            <section className="w-full py-16 bg-slate-50">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 mb-3">
                    Our Advantage
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700 mb-4">
                    Built With Superior Materials
                  </h2>
                  <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
                    All our projects are constructed using our
                    machine-manufactured precision blocks, providing 10x the
                    strength of conventional materials for buildings that stand
                    the test of time.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    className="bg-white rounded-lg shadow-md p-6"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                      <Hammer className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Machine Precision
                    </h3>
                    <p className="text-slate-600">
                      Our blocks are manufactured using advanced machinery for
                      perfect dimensions, ensuring faster construction and
                      superior structural alignment.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-lg shadow-md p-6"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-600"
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
                    <h3 className="text-xl font-semibold mb-2">10× Stronger</h3>
                    <p className="text-slate-600">
                      Our optimized cement-aggregate mixture and hydraulic
                      compaction process results in blocks that are 10 times
                      stronger than conventional options.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-lg shadow-md p-6"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-600"
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
                    <h3 className="text-xl font-semibold mb-2">
                      Cost Effective
                    </h3>
                    <p className="text-slate-600">
                      Our interlocking designs require up to 70% less cement
                      during installation, with faster construction timelines
                      resulting in significant cost savings.
                    </p>
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

              <div className="container px-4 md:px-6 relative z-10 mx-auto">
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
                      Ready to Start Your Project?
                    </motion.h2>
                    <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                      Whether you&apos;re planning a home, commercial space, or
                      community facility, our machine-manufactured precision
                      blocks will provide superior quality and durability for
                      your next project.
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// Project Card Component props interface
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// Project Card Component
function ProjectCard({ project, onClick }: ProjectCardProps) {
  function getCategoryIcon(category: string): React.ReactNode {
    switch (category) {
      case "residential":
        return <Home className="h-4 w-4 mr-1" />;
      case "commercial":
        return <Store className="h-4 w-4 mr-1" />;
      case "institutional":
        return <School className="h-4 w-4 mr-1" />;
      default:
        return <Building className="h-4 w-4 mr-1" />;
    }
  }
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={cardHover}
      data-project-id={project.id}
    >
      <Card
        className="overflow-hidden border-none shadow-lg h-full cursor-pointer"
        onClick={onClick}
      >
        <div className="h-56 bg-slate-200 relative overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute top-3 left-3 flex items-center space-x-2">
            <Badge
              className={`${
                project.category === "residential"
                  ? "bg-blue-500"
                  : project.category === "commercial"
                  ? "bg-purple-500"
                  : "bg-green-500"
              } text-white`}
            >
              {getCategoryIcon(project.category)}
              <span className="ml-1 capitalize">{project.category}</span>
            </Badge>
          </div>
          {project.status === "in-progress" && (
            <Badge className="absolute top-3 right-3 bg-amber-500">
              In Progress
            </Badge>
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl line-clamp-1">
            {project.title}
          </CardTitle>
          <CardDescription className="flex items-center text-sm">
            <MapPin className="h-3.5 w-3.5 mr-1 text-slate-400" />{" "}
            {project.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm text-slate-600 line-clamp-3 mb-3">
            {project.description}
          </p>
          <div className="text-xs text-slate-500 flex items-center mb-3">
            <Hammer className="h-3.5 w-3.5 mr-1" />
            <span className="font-medium">Materials:</span>
            <span className="ml-1 line-clamp-1 text-orange-600">
              {project.brixelMaterials.split(",")[0]}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {project.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs px-2 py-0 h-5"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 2 && (
              <Badge variant="outline" className="text-xs px-2 py-0 h-5">
                +{project.tags.length - 2}
              </Badge>
            )}
          </div>
          <div className="flex items-center text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5 mr-1" /> {project.date}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            variant="ghost"
            className="w-full justify-center text-sm h-8 hover:bg-orange-50 hover:text-orange-600"
          >
            View Details <ChevronRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Project Detail Component props interface
interface ProjectDetailProps {
  project: Project | null;
  onBack: () => void;
}

// Project Detail Component
function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  // Prevent rendering if project is null
  if (!project) return null;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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

  // Set the selected project by updating the URL hash and triggering the parent state update via navigation.
  function setSelectedProject(id: string) {
    if (typeof window !== "undefined") {
      window.location.hash = id;
      // Optionally, scroll to top for better UX
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  return (
    <div className="container mx-auto py-10 px-4">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 hover:bg-slate-100"
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
      </Button>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="grid gap-10 lg:grid-cols-2 lg:gap-16 mb-10"
          variants={fadeIn}
        >
          <div>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent"></div>
              <Badge className="absolute top-4 right-4 text-sm px-3 py-1 bg-orange-600 text-white">
                {project.category === "residential"
                  ? "Residential"
                  : project.category === "commercial"
                  ? "Commercial"
                  : "Institutional"}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.galleryImages &&
                project.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-lg aspect-square overflow-hidden shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} detail ${i + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <motion.div className="space-y-6" variants={fadeIn}>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-slate-50">
                    {tag}
                  </Badge>
                ))}
                {project.status === "in-progress" ? (
                  <Badge className="bg-amber-500 text-white">In Progress</Badge>
                ) : (
                  <Badge className="bg-green-500 text-white">Completed</Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-600">
                {project.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:gap-6 text-slate-600">
                <div className="flex items-center mb-2 sm:mb-0">
                  <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                  <span>{project.location}</span>
                </div>

                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                  <span>{project.date}</span>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  Brixel Materials Used
                </h3>
                <p className="text-slate-700">{project.brixelMaterials}</p>
              </div>

              <p className="text-slate-600 text-lg">{project.description}</p>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <h3 className="font-medium text-sm text-slate-500">
                    Duration
                  </h3>
                  <p className="font-semibold">{project.duration}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <h3 className="font-medium text-sm text-slate-500">
                    Materials
                  </h3>
                  <p className="font-semibold">{project.materials}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={fadeIn}
        >
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 bg-blue-500"></div>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{project.challenge}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 bg-green-500"></div>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{project.solution}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 bg-orange-500"></div>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{project.impact}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="bg-slate-50 rounded-lg p-8 mb-12"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Similar Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(
                (p) => p.id !== project.id && p.category === project.category
              )
              .slice(0, 3)
              .map((similarProject) => (
                <motion.div
                  key={similarProject.id}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className="cursor-pointer border-none shadow overflow-hidden h-full"
                    onClick={() => {
                      onBack();
                      // Use setTimeout to ensure the back action completes first
                      setTimeout(() => {
                        setSelectedProject(similarProject.id);
                      }, 100);
                    }}
                  >
                    <div className="h-40 relative overflow-hidden">
                      <Image
                        src={similarProject.imageUrl}
                        alt={similarProject.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      {similarProject.status === "in-progress" && (
                        <Badge className="absolute top-2 right-2 bg-amber-500 text-xs">
                          In Progress
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base line-clamp-1">
                        {similarProject.title}
                      </CardTitle>
                      <CardDescription className="text-xs flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />{" "}
                        {similarProject.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0">
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {similarProject.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center bg-white p-8 rounded-lg shadow-sm border border-slate-100"
          variants={fadeIn}
        >
          <div className="max-w-2xl mx-auto">
            <div className="inline-block p-3 rounded-full bg-orange-100 mb-4">
              <Hammer className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Interested in a Similar Project?
            </h2>
            <p className="text-slate-600 mb-6">
              Let&apos;s discuss how we can bring your construction vision to life
              with our machine-manufactured precision blocks, providing 10× the
              strength of conventional materials for your {project.category}{" "}
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-orange-500/30"
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/estimator">Try Our Estimator</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
