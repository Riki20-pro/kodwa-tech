"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              KODWA TECH
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link href="https://wa.me/6285924155519" target="_blank">
                Konsultasi Gratis
              </Link>
            </Button>
          </div>
          {isMounted && (
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="px-8 pt-12">
                  <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                  <SheetDescription className="sr-only">
                    Akses halaman utama KODWA TECH
                  </SheetDescription>
                  <div className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-xl font-semibold text-gray-800 hover:text-purple-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="pt-4">
                      <Button
                        asChild
                        className="w-full py-6 text-lg font-bold bg-purple-600 hover:bg-purple-700"
                      >
                        <Link
                          href="https://wa.me/6285924155519"
                          target="_blank"
                        >
                          Konsultasi Gratis
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
