"use client";

import React from "react";
import { motion } from "framer-motion";
import {
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

// Reusable Section component
const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-white scroll-mt-16"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-800">
        {title}
      </h2>
      {children}
    </motion.div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-yellow-100 to-yellow-200">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-900 mb-6">
            Roxanne &amp; Arman
          </h1>
          <p className="text-xl md:text-2xl text-yellow-700 mb-8">
            Join us in celebrating our love
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-2xl">
            Save the Date
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-10 animate-bounce"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-yellow-700" />
        </motion.div>
      </section>

      {/* Our Story */}
      <Section id="story" title="Our Story">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <p className="text-lg text-gray-700">
              Like a sunflower always turning to the sun, our love has bloomed
              brighter each day. From laughter-filled moments to quiet
              adventures, our journey has been nothing short of magical. Now,
              we&apos;re ready to start the next chapter together.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Event Details */}
      <Section id="details" title="Event Details">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <Calendar className="w-8 h-8 text-yellow-600 mx-auto" />
              <CardTitle className="text-center">Date</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              March 15, 2026
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <MapPin className="w-8 h-8 text-yellow-600 mx-auto" />
              <CardTitle className="text-center">Venue</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              The Sunflower Garden, Cavite
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <Gift className="w-8 h-8 text-yellow-600 mx-auto" />
              <CardTitle className="text-center">Gifts</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              Your presence is the best gift! For monetary gifts, kindly scan
              the QR code at the reception.
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* RSVP */}
      <Section id="rsvp" title="RSVP">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                Send RSVP
              </Button>
            </form>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="bg-yellow-100 py-6 text-center text-yellow-700">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:roxanneandarman@email.com">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/roxanneandarman">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p>© 2026 Roxanne &amp; Arman — #RoxAndRollForever</p>
      </footer>
    </main>
  );
}
