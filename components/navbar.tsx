"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Estimator", href: "/estimator" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Impact", href: "/impact" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between py-6 mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo */}
            <div className="relative h-10 w-10 overflow-hidden rounded-md bg-orange-600 flex items-center justify-center">
              {/* You can replace this with an actual logo image */}
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Brixel</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-orange-600"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/estimator">Try Estimator</Link>
          </Button>
        </nav>

        {/* Mobile menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium transition-colors hover:text-orange-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-orange-600 hover:bg-orange-700">
                <Link 
                  href="/estimator" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try Estimator
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
