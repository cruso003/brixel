import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container py-16 md:py-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Replace with your actual logo */}
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Brixel</span>
            </div>
            <p className="text-base text-slate-400 max-w-xs">
              A vessel for transformation. Every brick with precision, every future with purpose.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-semibold text-white">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-base text-slate-400 hover:text-white transition-colors">
                  Brixel Blocks
                </Link>
              </li>
              <li>
                <Link href="/estimator" className="text-base text-slate-400 hover:text-white transition-colors">
                  Brixel Estimator
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-base text-slate-400 hover:text-white transition-colors">
                  Brixel Build
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-base text-slate-400 hover:text-white transition-colors">
                  Brixel AI
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-base text-slate-400 hover:text-white transition-colors">
                  Brixel Impact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-semibold text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-base text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-slate-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-base text-slate-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-base text-slate-400 hover:text-white transition-colors">
                  Social Impact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-base text-slate-400">15 Tubman Blvd, Monrovia, Liberia</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-base text-slate-400">info@brixel.africa</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-base text-slate-400">+231 555 123 4567</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-base text-slate-400">
                  Mon-Fri: 8:00 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Brixel. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
