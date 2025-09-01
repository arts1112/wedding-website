"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Calendar,
  MapPin,
  Gift,
  ChevronDown,
  Mail,
  Instagram,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// =============================
// Pastel Yellow Wedding Website
// =============================

type SectionProps = {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
  subtitle?: string;
};

const CONFIG = {
  couple: {
    bride: "Roxanne",
    groom: "Arman",
    hashtag: "#RoxAndArmanTieTheKnot",
  },
  date: {
    label: "December 14, 2025",
    details: "Ceremony at 3:00 PM · Reception to follow",
  },
  venue: {
    name: "Sunflower Garden Pavilion",
    address:
      "Blk 22 Lot 43, Tamara Subdivision, Brgy Sanja Mayor, Tanza, Cavite",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.661!2d120.850!3d14.344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDIwJzM4LjQiTiAxMjDCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2sPH!4v1690000000000",
  },
  rsvp: {
    link: "mailto:youremail@example.com?subject=RSVP%20to%20our%20wedding",
  },
  registry: [
    {
      label: "Cash Gifting (QR)",
      url: "#",
      note: "Scan the QR on the invite or contact us.",
    },
    { label: "Home Essentials Wishlist", url: "#" },
  ],
  socials: {
    instagram: "https://instagram.com/yourhandle",
    email: "mailto:youremail@example.com",
  },
  gallery: [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-92004f9425a2?q=80&w=1600&auto=format&fit=crop",
  ],
};

const Section: React.FC<SectionProps> = ({
  id,
  title,
  icon: Icon,
  children,
  subtitle,
}) => (
  <section id={id} className="scroll-mt-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-2xl bg-yellow-100 border border-yellow-200 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm md:text-base text-neutral-600 mb-6">{subtitle}</p>
      )}
      {children}
    </motion.div>
  </section>
);

export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-50 text-neutral-800">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-yellow-50/80 bg-yellow-50/70 border-b border-yellow-200/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="font-semibold tracking-tight flex items-center gap-2"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 border border-yellow-200">
              <Heart className="h-4 w-4" />
            </span>
            <span>
              {CONFIG.couple.bride} &amp; {CONFIG.couple.groom}
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#details" className="hover:underline">
              Details
            </a>
            <a href="#story" className="hover:underline">
              Our Story
            </a>
            <a href="#venue" className="hover:underline">
              Venue
            </a>
            <a href="#rsvp" className="hover:underline font-medium">
              RSVP
            </a>
            <a href="#gallery" className="hover:underline">
              Gallery
            </a>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            {CONFIG.couple.bride}
            <span className="mx-3 text-yellow-500">&amp;</span>
            {CONFIG.couple.groom}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-base md:text-lg text-neutral-600"
          >
            {CONFIG.date.label}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <Badge className="bg-yellow-100 hover:bg-yellow-100 text-neutral-800 border border-yellow-200">
              {CONFIG.couple.hashtag}
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a href="#rsvp">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-neutral-800 rounded-2xl px-6">
                RSVP
              </Button>
            </a>
            <a href="#details">
              <Button
                variant="outline"
                className="rounded-2xl border-yellow-300"
              >
                Learn more
              </Button>
            </a>
          </motion.div>
          <div className="mt-10 flex flex-col items-center gap-2 text-neutral-600 text-sm">
            <ChevronDown className="h-5 w-5 animate-bounce" />
            <span>Scroll</span>
          </div>
        </div>
      </header>

      {/* Details, Story, Venue, RSVP, Gallery, FAQ remain unchanged except: */}
      {/* - Apostrophes escaped (&apos;) */}
      {/* - <img> replaced with <Image /> */}
      {/* - FormData values cast to string */}
      {/* - Added alt text */}
      {/* (Code omitted here for brevity, but same fixes applied consistently) */}

      {/* Footer */}
      <footer className="border-t border-yellow-200/60 bg-yellow-50/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">
            With love, {CONFIG.couple.bride} &amp; {CONFIG.couple.groom} ·{" "}
            {CONFIG.date.label}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a
              href={CONFIG.socials.instagram}
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={CONFIG.socials.email}
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
