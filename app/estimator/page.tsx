"use client";

import { useState } from "react";
import { Building, Calculator, ArrowRight, ChevronRight, Clock, CheckCircle2, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export default function Estimator() {
  const [step, setStep] = useState(1);
  const [estimateComplete, setEstimateComplete] = useState(false);
  const [showBlockComparison, setShowBlockComparison] = useState(false);
  
  // Form states
  const [buildingType, setBuildingType] = useState("");
  const [buildingPurpose, setBuildingPurpose] = useState<"residential" | "commercial" | "institutional">("residential");
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("8");
  const [height, setHeight] = useState("3");
  const [floors, setFloors] = useState("1");
  const [blockType, setBlockType] = useState("");
  const [location, setLocation] = useState("");

  // For savings calculation
  const [conventionalCost, setConventionalCost] = useState(0);
  const [savingsAmount, setSavingsAmount] = useState(0);
  const [savingsPercentage, setSavingsPercentage] = useState(0);

  const handleCalculate = () => {
    // In a real app, you would calculate based on the input values
    setEstimateComplete(true);
    
    // Calculate comparison with conventional blocks
    calculateConventionalComparison();
  };

  const calculateConventionalComparison = () => {
    // This would be more complex in real implementation
    // Simulating conventional cost being 20-40% higher
    const multiplier = blockType === "interlocking" ? 1.4 : 1.25;
    const conventional = totalCost * multiplier;
    setConventionalCost(conventional);
    setSavingsAmount(conventional - totalCost);
    setSavingsPercentage(((conventional - totalCost) / conventional) * 100);
  };

  const resetForm = () => {
    setBuildingType("");
    setBuildingPurpose("residential");
    setLength("10");
    setWidth("8");
    setHeight("3");
    setFloors("1");
    setBlockType("");
    setLocation("");
    setEstimateComplete(false);
    setStep(1);
    setShowBlockComparison(false);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  // Render different steps of the estimator
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            className="space-y-6"
            key="step1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
          >
            <div>
              <h3 className="text-lg font-medium mb-2">Building Purpose</h3>
              <RadioGroup 
                value={buildingPurpose} 
                onValueChange={(value) => setBuildingPurpose(value as "residential" | "commercial" | "institutional")}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <Label
                  htmlFor="residential"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-orange-600 cursor-pointer"
                >
                  <RadioGroupItem value="residential" id="residential" className="sr-only" />
                  <Building className="h-6 w-6 mb-2" />
                  <span className="text-center font-medium">Residential</span>
                </Label>
                <Label
                  htmlFor="commercial"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-orange-600 cursor-pointer"
                >
                  <RadioGroupItem value="commercial" id="commercial" className="sr-only" />
                  <Building className="h-6 w-6 mb-2" />
                  <span className="text-center font-medium">Commercial</span>
                </Label>
                <Label
                  htmlFor="institutional"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-orange-600 cursor-pointer"
                >
                  <RadioGroupItem value="institutional" id="institutional" className="sr-only" />
                  <Building className="h-6 w-6 mb-2" />
                  <span className="text-center font-medium">Institutional</span>
                </Label>
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Building Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {buildingTypes[buildingPurpose].map((type) => (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all hover:border-orange-200 hover:shadow-md ${
                      buildingType === type.id ? "border-2 border-orange-600" : ""
                    }`}
                    onClick={() => setBuildingType(type.id)}
                  >
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">{type.name}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button 
                onClick={() => setStep(2)} 
                disabled={!buildingType}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div 
            className="space-y-6"
            key="step2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
          >
            <h3 className="text-lg font-medium mb-2">Building Dimensions</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="length">Length (meters)</Label>
                <Input 
                  id="length" 
                  type="number" 
                  value={length} 
                  onChange={(e) => setLength(e.target.value)}
                  min="1"
                  className="focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width">Width (meters)</Label>
                <Input 
                  id="width" 
                  type="number" 
                  value={width} 
                  onChange={(e) => setWidth(e.target.value)}
                  min="1"
                  className="focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (meters)</Label>
                <Input 
                  id="height" 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
                  min="1"
                  className="focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="floors">Number of Floors</Label>
                <Select value={floors} onValueChange={setFloors}>
                  <SelectTrigger id="floors" className="focus:ring-orange-500">
                    <SelectValue placeholder="Select floors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Floor</SelectItem>
                    <SelectItem value="2">2 Floors</SelectItem>
                    <SelectItem value="3">3 Floors</SelectItem>
                    <SelectItem value="4">4 Floors</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mt-4">
              <h4 className="font-medium mb-2">Building Summary</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Total Area:</span>{" "}
                  <span className="font-medium">{Number(length) * Number(width) * Number(floors)} m²</span>
                </div>
                <div>
                  <span className="text-slate-500">Perimeter:</span>{" "}
                  <span className="font-medium">{2 * (Number(length) + Number(width))} m</span>
                </div>
                <div>
                  <span className="text-slate-500">Wall Area:</span>{" "}
                  <span className="font-medium">
                    {2 * (Number(length) + Number(width)) * Number(height) * Number(floors)} m²
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button 
                onClick={() => setStep(3)} 
                className="bg-orange-600 hover:bg-orange-700"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div 
            className="space-y-6"
            key="step3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">Construction Materials</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowBlockComparison(!showBlockComparison)}
                  className="text-xs"
                >
                  {showBlockComparison ? "Hide Comparison" : "Compare Block Types"}
                </Button>
              </div>
              
              <AnimatePresence>
                {showBlockComparison && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-base mb-3">Why Choose Our Machine-Manufactured Blocks?</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="rounded-full bg-green-100 p-1 mr-2 mt-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">10× Stronger</h5>
                            <p className="text-xs text-slate-600">
                              Our machine-manufactured blocks provide 10 times the strength of conventional hand-made blocks
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="rounded-full bg-green-100 p-1 mr-2 mt-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">70% Less Cement</h5>
                            <p className="text-xs text-slate-600">
                              Our interlocking blocks require significantly less mortar during installation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="rounded-full bg-green-100 p-1 mr-2 mt-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Perfect Dimensions</h5>
                            <p className="text-xs text-slate-600">
                              Machine precision ensures consistent block sizes for faster, easier construction
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="rounded-full bg-green-100 p-1 mr-2 mt-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Long-Term Savings</h5>
                            <p className="text-xs text-slate-600">
                              Higher upfront quality means lower maintenance costs over time
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <p className="text-slate-500 mb-4">
                Select the type of blocks you want to use for your construction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blockTypes.map((type) => (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all hover:border-orange-200 hover:shadow-md ${
                      blockType === type.id ? "border-2 border-orange-600" : ""
                    }`}
                    onClick={() => setBlockType(type.id)}
                  >
                    <CardHeader className="p-4">
                      <div className="flex gap-4">
                        <div className="relative bg-slate-100 rounded w-16 h-16 flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {type.image ? (
                            <Image 
                              src={type.image} 
                              alt={type.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <Building className="h-8 w-8 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-base">{type.name}</CardTitle>
                          <CardDescription>{type.dimensions}</CardDescription>
                          <div className="mt-2 text-sm flex justify-between">
                            <span>Strength: <span className="font-semibold text-orange-700">{type.strength}</span></span>
                            <span className="font-medium">${type.pricePerUnit}/unit</span>
                          </div>
                          {type.advantage && (
                            <div className="mt-1 text-xs text-green-600 font-medium">
                              {type.advantage}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-slate-500 mb-4">
                Select the location of your construction project.
              </p>
              
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" className="focus:ring-orange-500">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.id} value={loc.id}>{loc.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep(2)}
              >
                Back
              </Button>
              <Button 
                onClick={handleCalculate} 
                disabled={!blockType || !location}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Calculate Estimate <Calculator className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  // Building types based on purpose
  const buildingTypes = {
    residential: [
      { id: "1br-bungalow", name: "1-Bedroom Bungalow", description: "Simple one-bedroom home" },
      { id: "2br-bungalow", name: "2-Bedroom Bungalow", description: "Family home with two bedrooms" },
      { id: "3br-bungalow", name: "3-Bedroom Bungalow", description: "Spacious family home" },
      { id: "3br-duplex", name: "3-Bedroom Duplex", description: "Two-story family home" },
      { id: "custom-home", name: "Custom Home", description: "Tailored to your specific needs" },
    ],
    commercial: [
      { id: "shop-small", name: "Small Shop", description: "Retail space up to 50m²" },
      { id: "shop-medium", name: "Medium Shop", description: "Retail space up to 100m²" },
      { id: "office-small", name: "Small Office", description: "Office space up to 80m²" },
      { id: "mixed-use", name: "Mixed-Use Building", description: "Combined commercial and residential" },
    ],
    institutional: [
      { id: "classroom", name: "Classroom Block", description: "Educational facility" },
      { id: "clinic", name: "Small Clinic", description: "Healthcare facility" },
      { id: "community-center", name: "Community Center", description: "Public gathering space" },
    ],
  };

  // Block types with enhanced descriptions
  const blockTypes = [
    { 
      id: "hollow-6", 
      name: "6\" Machine-Made Hollow Blocks",
      dimensions: "450mm × 225mm × 150mm",
      strength: "10× stronger than conventional",
      pricePerUnit: 2.50,
      image: "/images/blocks/hollow-6.jpg",
      advantage: "Perfect dimensions for consistent walls"
    },
    { 
      id: "hollow-8", 
      name: "8\" Machine-Made Hollow Blocks",
      dimensions: "450mm × 225mm × 203mm",
      strength: "10× stronger than conventional",
      pricePerUnit: 3.20,
      image: "/images/blocks/hollow-8.jpg",
      advantage: "Ideal for structural walls with superior strength"
    },
    { 
      id: "interlocking", 
      name: "Precision Interlocking Bricks",
      dimensions: "300mm × 150mm × 100mm",
      strength: "10× stronger than conventional",
      pricePerUnit: 1.80,
      image: "/images/blocks/interlocking-bricks.png",
      advantage: "70% less cement needed for installation"
    },
    { 
      id: "solid", 
      name: "Machine-Manufactured Solid Blocks",
      dimensions: "400mm × 200mm × 100mm",
      strength: "10× stronger than conventional",
      pricePerUnit: 2.80,
      image: "/images/blocks/solid.webp",
      advantage: "Maximum durability and load-bearing capacity"
    },
  ];

  // Locations
  const locations = [
    { id: "monrovia", name: "Monrovia", transportCost: 1.0 },
    { id: "buchanan", name: "Buchanan", transportCost: 1.2 },
    { id: "gbarnga", name: "Gbarnga", transportCost: 1.4 },
    { id: "harper", name: "Harper", transportCost: 1.8 },
    { id: "kakata", name: "Kakata", transportCost: 1.1 },
    { id: "tubmanburg", name: "Tubmanburg", transportCost: 1.3 },
  ];

  // Calculate estimated blocks with adjustment for interlocking efficiency
  const wallArea = 2 * (Number(length) + Number(width)) * Number(height) * Number(floors);
  
  // Different block densities based on type
  let blockDensity = 10; // Standard blocks per square meter
  if (blockType === "interlocking") {
    blockDensity = 11; // Slightly more interlocking blocks per square meter due to smaller size
  } else if (blockType === "hollow-9") {
    blockDensity = 9; // Slightly fewer large blocks per square meter
  }
  
  const estimatedBlocks = Math.round(wallArea * blockDensity);
  
  const blockCost = estimatedBlocks * (
    blockType === "hollow-6" ? 2.5 :
    blockType === "hollow-9" ? 3.2 :
    blockType === "interlocking" ? 1.8 :
    blockType === "solid" ? 2.8 : 0
  );
  
  // Adjust cement needs based on block type (interlocking needs less)
  let cementFactor = 60; // Standard blocks per bag of cement
  if (blockType === "interlocking") {
    cementFactor = 200; // Interlocking blocks require 70% less cement
  }
  
  const cementBags = Math.round(estimatedBlocks / cementFactor);
  const cementCost = cementBags * 12;
  
  const sandTrucks = Math.ceil(estimatedBlocks / 3000);
  const sandCost = sandTrucks * 120;
  
  const transportCostMultiplier = locations.find(l => l.id === location)?.transportCost || 1;
  const transportCost = (blockCost + cementCost + sandCost) * 0.15 * transportCostMultiplier;
  
  // Labor savings for interlocking blocks due to faster installation
  let laborFactor = 0.4; // Standard labor cost ratio
  if (blockType === "interlocking") {
    laborFactor = 0.28; // 30% labor savings for interlocking blocks
  }
  
  const laborCost = (blockCost + cementCost + sandCost) * laborFactor;
  
  const totalCost = blockCost + cementCost + sandCost + transportCost + laborCost;

  // Estimated timeline calculation
  let constructionDays = Math.ceil(estimatedBlocks / 300); // Base construction speed
  if (blockType === "interlocking") {
    constructionDays = Math.ceil(estimatedBlocks / 450); // 50% faster with interlocking
  }
  const constructionWeeks = Math.ceil(constructionDays / 6); // 6 working days per week

  // Render the results section when estimate is complete
  const renderResults = () => {
    return (
      <motion.div 
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Estimate Results</h3>
          <Button variant="outline" onClick={resetForm}>
            Start New Estimate
          </Button>
        </div>

        {/* Savings highlight box */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-green-700 flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Total Savings With Brixel Blocks
              </h3>
              <p className="text-green-600">
                Compared to conventional building materials and methods
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">${savingsAmount.toFixed(2)}</div>
                <div className="text-sm text-green-600">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">{savingsPercentage.toFixed(0)}%</div>
                <div className="text-sm text-green-600">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="materials">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="costs">Cost Breakdown</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>
          
          <TabsContent value="materials" className="p-4 border rounded-lg mt-2">
            <div className="space-y-4">
              <h4 className="font-medium">Required Materials</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Building className="h-5 w-5 mr-2 text-orange-500" />
                      Building Blocks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600">{estimatedBlocks}</div>
                    <p className="text-sm text-slate-500">
                      {blockTypes.find(b => b.id === blockType)?.name} blocks
                    </p>
                    
                    {blockType === "interlocking" && (
                      <div className="mt-2 p-2 bg-green-50 rounded-md border border-green-100 text-xs text-green-700">
                        70% less cement needed compared to conventional blocks
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21h14M6 14v7M9 14v7M12 14v7M12 21h7a2 2 0 002-2v-2a2 2 0 00-2-2h-7M5 9h14M10 4a2 2 0 012-2m5 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h2" />
                      </svg>
                      Cement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600">{cementBags}</div>
                    <p className="text-sm text-slate-500">50kg bags</p>
                    
                    {blockType === "interlocking" && (
                      <div className="mt-2 p-2 bg-green-50 rounded-md border border-green-100 text-xs text-green-700">
                        Savings from interlocking design that requires minimal mortar
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Sand
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="text-3xl font-bold text-orange-600">{sandTrucks}</div>
                    <p className="text-sm text-slate-500">truckloads</p>
                    
                    {blockType === "interlocking" && (
                      <div className="mt-2 p-2 bg-green-50 rounded-md border border-green-100 text-xs text-green-700">
                        Reduced sand requirements due to optimized installation
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-100 flex items-start mt-6">
                <div className="rounded-full bg-orange-100 p-2 mr-3 flex-shrink-0">
                  <Hammer className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-orange-800 mb-1">Machine-Manufactured Precision</p>
                  <p className="text-orange-700 text-sm">
                    Our machine-manufactured blocks provide 10× the strength of conventional materials, with perfect dimensions 
                    that ensure faster, easier construction and superior structural integrity. This precision translates to reduced 
                    waste, lower labor costs, and buildings that will stand the test of time.
                  </p>
                  
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-white p-2 rounded text-center">
                      <span className="font-bold text-orange-600 block">10×</span>
                      <span className="text-slate-600">Stronger</span>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <span className="font-bold text-orange-600 block">70%</span>
                      <span className="text-slate-600">Less Cement</span>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <span className="font-bold text-orange-600 block">30%</span>
                      <span className="text-slate-600">Faster Build</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="costs" className="p-4 border rounded-lg mt-2">
            <div className="space-y-4">
              <h4 className="font-medium">Cost Breakdown</h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium">Blocks</span>
                      <span>${blockCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium">Cement</span>
                      <span>${cementCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium">Sand</span>
                      <span>${sandCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium">Transport</span>
                      <span>${transportCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-medium">Labor (estimated)</span>
                      <span>${laborCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 font-bold">
                      <span>Total Estimate</span>
                      <span className="text-orange-600">${totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-slate-50 p-4 rounded-md border text-sm">
                    <p className="font-medium mb-1">Note on Cost Accuracy</p>
                    <p className="text-slate-600 text-sm">
                      This estimate is based on current material prices and standard labor rates.
                      Contact us for a detailed quote tailored to your specific project requirements.
                    </p>
                  </div>
                </div>
                
                <div>
                  <Card className="border-none bg-slate-50 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base">Cost Comparison</CardTitle>
                      <CardDescription>
                        See how our machine-manufactured blocks compare to conventional materials
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Brixel Machine-Made Blocks</div>
                            <div className="text-sm text-slate-500">10× stronger, precision-manufactured</div>
                          </div>
                          <div className="text-xl font-bold text-green-600">${totalCost.toFixed(2)}</div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Conventional Blocks</div>
                            <div className="text-sm text-slate-500">Standard hand-made blocks</div>
                          </div>
                          <div className="text-xl font-bold text-red-500">${conventionalCost.toFixed(2)}</div>
                        </div>
                        
                        <div className="h-2 bg-slate-200 rounded-full mt-2">
                          <div 
                            className="h-2 bg-green-500 rounded-full" 
                            style={{ width: `${100 - savingsPercentage}%` }}
                          ></div>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-md border border-green-100 mt-2">
                          <div className="font-medium text-green-700">Your Total Savings</div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-green-600">With our precision blocks</span>
                            <span className="font-bold text-green-700">${savingsAmount.toFixed(2)} ({savingsPercentage.toFixed(0)}%)</span>
                          </div>
                        </div>
                        
                        {blockType === "interlocking" && (
                          <div className="mt-4">
                            <p className="text-sm font-medium">Savings Breakdown:</p>
                            <ul className="text-sm text-slate-600 space-y-1 mt-2">
                              <li className="flex items-center">
                                <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                                70% less cement required
                              </li>
                              <li className="flex items-center">
                                <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                                30% faster construction time
                              </li>
                              <li className="flex items-center">
                                <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                                Lower long-term maintenance costs
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="timeline" className="p-4 border rounded-lg mt-2">
            <div className="space-y-6">
              <h4 className="font-medium">Project Timeline</h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div className="bg-white p-5 rounded-lg border shadow-sm">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-orange-600 mr-2" />
                      <h5 className="font-medium">Estimated Construction Timeline</h5>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-slate-500">Wall Construction Time:</div>
                        <div className="text-xl font-bold">{constructionDays} Working Days</div>
                        <div className="text-sm text-slate-500">({constructionWeeks} weeks)</div>
                      </div>
                      
                      {blockType === "interlocking" && (
                        <div className="bg-green-50 p-3 rounded border border-green-100 text-sm">
                          <p className="font-medium text-green-700">30% Faster Construction</p>
                          <p className="text-green-600 text-xs mt-1">
                            Our interlocking blocks require minimal mortar and are designed for quick installation,
                            reducing your construction timeline by approximately 30% compared to conventional blocks.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border shadow-sm">
                    <div className="flex items-center mb-3">
                      <Hammer className="h-5 w-5 text-orange-600 mr-2" />
                      <h5 className="font-medium">Construction Process</h5>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex">
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                          <span className="text-orange-600 font-medium text-sm">1</span>
                        </div>
                        <div>
                          <h6 className="font-medium">Foundation Preparation</h6>
                          <p className="text-sm text-slate-500">1-2 weeks depending on soil conditions</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                          <span className="text-orange-600 font-medium text-sm">2</span>
                        </div>
                        <div>
                          <h6 className="font-medium">Wall Construction</h6>
                          <p className="text-sm text-slate-500">{constructionWeeks} weeks with our precision blocks</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                          <span className="text-orange-600 font-medium text-sm">3</span>
                        </div>
                        <div>
                          <h6 className="font-medium">Roofing & Finishes</h6>
                          <p className="text-sm text-slate-500">2-4 weeks based on complexity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-5 rounded-lg border">
                  <h5 className="font-medium mb-3">Long-Term Benefits</h5>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="rounded-full bg-green-100 p-2 mr-3 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h6 className="font-medium">10× Stronger Structure</h6>
                          <p className="text-sm text-slate-600">
                            Our machine-manufactured blocks provide superior structural integrity,
                            meaning your building will better withstand environmental stresses and time.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="rounded-full bg-green-100 p-2 mr-3 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h6 className="font-medium">Lower Maintenance Costs</h6>
                          <p className="text-sm text-slate-600">
                            The precision and strength of our blocks means fewer structural issues,
                            less cracking, and reduced maintenance expenses over the building&apos;s lifetime.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="rounded-full bg-green-100 p-2 mr-3 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h6 className="font-medium">Better Thermal Properties</h6>
                          <p className="text-sm text-slate-600">
                            Our blocks provide better insulation properties, helping maintain
                            comfortable indoor temperatures and potentially reducing energy costs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-slate-50 p-6 rounded-lg border shadow-sm mt-6">
          <h4 className="font-medium text-lg mb-3">Next Steps</h4>
          <p className="text-slate-600 mb-4">
            Ready to move forward with your construction project using our machine-manufactured precision blocks?
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Order Precision Blocks</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Place an order for our machine-manufactured blocks and get them delivered directly to your site.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Order Now <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Full Construction Service</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Let us handle your entire project using our superior materials and construction expertise.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full hover:bg-orange-50 hover:text-orange-600">
                  Get Quote <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-600 mb-3">Brixel Precision Block Estimator</h1>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Plan your construction project with our AI-powered estimator and see how our machine-manufactured 
            precision blocks can save you time and money while providing 10× the strength.
          </p>
        </div>
        
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 h-2"></div>
          <CardContent className="pt-6">
            <AnimatePresence mode="wait">
              {!estimateComplete ? (
                <div>
                  <div className="flex mb-6 border-b">
                    <div 
                      className={`pb-2 px-1 ${
                        step >= 1 ? "border-b-2 border-orange-600 text-orange-600 font-medium" : ""
                      }`}
                    >
                      1. Building Type
                    </div>
                    <div className="mx-2">•</div>
                    <div 
                      className={`pb-2 px-1 ${
                        step >= 2 ? "border-b-2 border-orange-600 text-orange-600 font-medium" : ""
                      }`}
                    >
                      2. Dimensions
                    </div>
                    <div className="mx-2">•</div>
                    <div 
                      className={`pb-2 px-1 ${
                        step >= 3 ? "border-b-2 border-orange-600 text-orange-600 font-medium" : ""
                      }`}
                    >
                      3. Materials & Location
                    </div>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {renderStep()}
                  </AnimatePresence>
                </div>
              ) : (
                renderResults()
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-slate-50 to-orange-50 border-none shadow-md overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Hammer className="h-5 w-5 mr-2 text-orange-600" />
                Machine-Manufactured Precision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Our blocks are manufactured using advanced machinery for perfect dimensions and superior strength. Unlike conventional 
                hand-made blocks, our precision-manufactured blocks provide:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 mt-1 text-green-600" />
                  <span><span className="font-medium">10× Stronger</span> - Our optimized cement-aggregate ratio and hydraulic compaction process results in blocks with 10 times the strength of conventional options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 mt-1 text-green-600" />
                  <span><span className="font-medium">Precision Dimensions</span> - Machine-manufactured for perfect sizing, ensuring faster construction with minimal waste</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 mt-1 text-green-600" />
                  <span><span className="font-medium">Superior Durability</span> - Buildings that withstand the test of time with minimal maintenance requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-none shadow-md overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-orange-600" />
                Why Use Our Estimator?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
                      <Calculator className="h-3 w-3 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Accurate Material Estimates</h3>
                    <p className="text-sm text-slate-600">
                      Get precise calculations of blocks, cement, and other materials needed
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Cost Savings Calculation</h3>
                    <p className="text-sm text-slate-600">
                      See how much you can save with our machine-manufactured blocks
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
                      <Clock className="h-3 w-3 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Timeline Projection</h3>
                    <p className="text-sm text-slate-600">
                      Get estimated completion times based on our faster construction methods
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
