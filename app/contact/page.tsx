"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// TypeScript interface for form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interest: string;
  howHeard: string;
}

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
    howHeard: ""
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle radio button changes
  const handleInterestChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the data to your backend or API
    // For demo purposes, we're just simulating a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: "general",
        howHeard: ""
      });
    }, 1500);
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-slate-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl">
                Get in touch with our team to discuss your construction needs, request a quote, or learn more about our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              {formSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <CardTitle className="text-center text-green-700">Thank You!</CardTitle>
                    <CardDescription className="text-center text-green-600">
                      Your message has been sent successfully.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-green-600 mb-6">
                      We&apos;ve received your inquiry and will get back to you as soon as possible.
                      Our team typically responds within 24-48 business hours.
                    </p>
                    <Button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input 
                              id="name" 
                              name="name" 
                              placeholder="John Doe" 
                              required 
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              placeholder="john@example.com" 
                              required 
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              placeholder="+231 555 123 4567" 
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input 
                              id="subject" 
                              name="subject" 
                              placeholder="Project Inquiry" 
                              required 
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Your Message</Label>
                          <Textarea 
                            id="message" 
                            name="message" 
                            placeholder="How can we help you?" 
                            rows={5} 
                            required 
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>I&apos;m interested in:</Label>
                          <RadioGroup 
                            defaultValue="general" 
                            value={formData.interest} 
                            onValueChange={handleInterestChange}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="blocks" id="blocks" />
                                <Label htmlFor="blocks">Buying Blocks/Materials</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="construction" id="construction" />
                                <Label htmlFor="construction">Construction Services</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="estimator" id="estimator" />
                                <Label htmlFor="estimator">Estimator Tool</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="partnership" id="partnership" />
                                <Label htmlFor="partnership">Partnership/Collaboration</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="general" id="general" />
                                <Label htmlFor="general">General Inquiry</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="howHeard">How did you hear about us?</Label>
                          <Select 
                            value={formData.howHeard} 
                            onValueChange={(value) => handleSelectChange("howHeard", value)}
                          >
                            <SelectTrigger id="howHeard">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="search">Search Engine</SelectItem>
                              <SelectItem value="social">Social Media</SelectItem>
                              <SelectItem value="advertisement">Advertisement</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-orange-600 hover:bg-orange-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg 
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24"
                            >
                              <circle 
                                className="opacity-25" 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="4"
                              ></circle>
                              <path 
                                className="opacity-75" 
                                fill="currentColor" 
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending Message...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us directly through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-orange-600 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-slate-600">
                        15 Tubman Blvd<br />
                        Monrovia, Liberia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-orange-600 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-slate-600">
                        +231 555 123 4567<br />
                        +231 555 987 6543
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-orange-600 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-slate-600">
                        info@brixel.africa<br />
                        support@brixel.africa
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-orange-600 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50">
                <CardHeader>
                  <CardTitle>WhatsApp Support</CardTitle>
                  <CardDescription>
                    Get instant responses through our WhatsApp business account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">
                    Connect with our customer service team via WhatsApp for quick responses
                    to your questions about our products and services.
                  </p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/2315551234567" target="_blank" rel="noopener noreferrer">
                      <svg 
                        className="h-5 w-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="font-bold text-lg mb-2">Need an Immediate Quote?</h3>
                <p className="text-slate-700 mb-4">
                  Use our material estimator tool to get an instant quote for your construction project.
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/estimator">Try Estimator Tool</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="mt-16 bg-slate-100 rounded-lg w-full h-80 flex items-center justify-center">
            <div className="text-center max-w-md">
              <MapPin className="h-10 w-10 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Find Us on the Map</h3>
              <p className="text-slate-500">
                Map integration would be displayed here in the production version.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-lg">
                Find answers to common questions about our services and processes.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">How do I place an order for blocks?</h3>
                <p className="text-slate-600 mt-2">
                  You can place an order by contacting us directly through phone, email, 
                  or by filling out our contact form. We&apos;ll get back to you promptly with 
                  availability, pricing, and delivery options.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Do you deliver to all areas in Liberia?</h3>
                <p className="text-slate-600 mt-2">
                  Yes, we deliver to all accessible areas in Liberia. Delivery costs will 
                  vary based on distance and quantity. For remote locations, additional 
                  fees may apply.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">How accurate is the Estimator tool?</h3>
                <p className="text-slate-600 mt-2">
                  Our Estimator tool provides a good approximation based on standard construction 
                  practices. For more precise estimates, we recommend consulting with our team 
                  for a customized assessment of your specific project.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
                <p className="text-slate-600 mt-2">
                  We accept cash, bank transfers, mobile money, and select credit cards. 
                  For larger projects, we can also arrange flexible payment plans based 
                  on construction milestones.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">How long does a typical construction project take?</h3>
                <p className="text-slate-600 mt-2">
                  Project timelines vary based on size, complexity, and location. A standard 
                  residential building might take 4-6 months, while smaller structures can be 
                  completed in 2-3 months. We provide detailed timelines during the planning phase.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Do you offer warranties on construction?</h3>
                <p className="text-slate-600 mt-2">
                  Yes, we provide a standard 1-year warranty on our construction projects, 
                  covering structural elements and workmanship. Our blocks come with a quality 
                  guarantee for strength and dimensional accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
