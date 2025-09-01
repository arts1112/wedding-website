"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Gift, ChevronDown, Mail, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// =============================
// Pastel Yellow Wedding Website
// =============================
// Next.js app/page.tsx version (fixed syntax errors)
// =============================

type SectionProps = {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
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
    address: "Blk 22 Lot 43, Tamara Subdivision, Brgy Sanja Mayor, Tanza, Cavite",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.661!2d120.850!3d14.344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDIwJzM4LjQiTiAxMjDCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2sPH!4v1690000000000",
  },
  rsvp: {
    link: "mailto:youremail@example.com?subject=RSVP%20to%20our%20wedding",
  },
  registry: [
    { label: "Cash Gifting (QR)", url: "#", note: "Scan the QR on the invite or contact us." },
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

const Section: React.FC<SectionProps> = ({ id, title, icon: Icon, children, subtitle }) => (
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
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
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
          <a href="#hero" className="font-semibold tracking-tight flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 border border-yellow-200"><Heart className="h-4 w-4"/></span>
            <span>{CONFIG.couple.bride} &amp; {CONFIG.couple.groom}</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#details" className="hover:underline">Details</a>
            <a href="#story" className="hover:underline">Our Story</a>
            <a href="#venue" className="hover:underline">Venue</a>
            <a href="#rsvp" className="hover:underline font-medium">RSVP</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#faq" className="hover:underline">FAQ</a>
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
            <Badge className="bg-yellow-100 hover:bg-yellow-100 text-neutral-800 border border-yellow-200">{CONFIG.couple.hashtag}</Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a href="#rsvp"><Button className="bg-yellow-400 hover:bg-yellow-500 text-neutral-800 rounded-2xl px-6">RSVP</Button></a>
            <a href="#details"><Button variant="outline" className="rounded-2xl border-yellow-300">Learn more</Button></a>
          </motion.div>
          <div className="mt-10 flex flex-col items-center gap-2 text-neutral-600 text-sm">
            <ChevronDown className="h-5 w-5 animate-bounce" />
            <span>Scroll</span>
          </div>
        </div>
      </header>

      {/* Details */}
      <Section id="details" title="Wedding Details" icon={Calendar} subtitle={CONFIG.date.details}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg">Ceremony</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Date:</strong> {CONFIG.date.label}</p>
              <p><strong>Time:</strong> 3:00 PM</p>
              <p><strong>Attire:</strong> Pastel garden semi-formal</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg">Reception</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>After:</strong> Cocktail hour & dinner</p>
              <p><strong>Program:</strong> Toasts, first dance, games</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg">Gifts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>We appreciate your presence most of all. If you'd like to give, we kindly prefer cash gifts.</p>
              <div className="flex flex-wrap gap-2">
                {CONFIG.registry.map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noreferrer">
                    <Badge className="bg-yellow-100 hover:bg-yellow-100 text-neutral-800 border border-yellow-200">{r.label}</Badge>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Story */}
      <Section id="story" title="Our Story" icon={Heart} subtitle="A few snapshots from our journey together">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { year: "2017", title: "We Met", text: "A chance hello became a forever conversation." },
            { year: "2019", title: "First Trip", text: "We learned we love sunrises and snacks equally." },
            { year: "2024", title: "Engaged", text: "He asked. She said yes. The rest is a happy blur." },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl border-yellow-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><span className="text-yellow-600 font-semibold">{item.year}</span>· {item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600">{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Venue */}
      <Section id="venue" title="Venue" icon={MapPin} subtitle={CONFIG.venue.address}>
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <Card className="rounded-2xl border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg">{CONFIG.venue.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>Parking available on-site. Please arrive 30 minutes before the ceremony.</p>
              <p>Shuttle service from town plaza at 2:15 PM and 2:35 PM.</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-yellow-100 hover:bg-yellow-100 text-neutral-800 border border-yellow-200">No kids policy optional</Badge>
                <Badge className="bg-yellow-100 hover:bg-yellow-100 text-neutral-800 border border-yellow-200">Open bar</Badge>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-2xl overflow-hidden border border-yellow-200 shadow-sm">
            <iframe
              title="Venue Map"
              src={CONFIG.venue.mapEmbed}
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* RSVP */}
      <Section id="rsvp" title="RSVP" icon={Mail} subtitle="Please respond by November 20, 2025">
        <Card className="rounded-2xl border-yellow-200">
          <CardContent className="pt-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name");
                const email = data.get("email");
                const attending = data.get("attending");
                const note = data.get("note");
                const subject = encodeURIComponent(`RSVP: ${name} (${attending})`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nAttending: ${attending}\nNote: ${note}`);
                window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
              }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="md:col-span-1">
                <label className="text-sm font-medium">Full Name</label>
                <Input required name="name" placeholder="Your name" className="mt-1 rounded-2xl border-yellow-300" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-medium">Email</label>
                <Input required type="email" name="email" placeholder="you@example.com" className="mt-1 rounded-2xl border-yellow-300" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Will you attend?</label>
                <select name="attending" required className="mt-1 w-full rounded-2xl border border-yellow-300 bg-white p-2">
                  <option value="Yes, joyfully attending">Yes, joyfully attending</option>
                  <option value="Regretfully cannot attend">Regretfully cannot attend</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Message (optional)</label>
                <Textarea name="note" placeholder="Allergies, song requests, or a love note…" className="mt-1 rounded-2xl border-yellow-300" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between gap-3">
                <a href={CONFIG.rsvp.link}>
                  <Button variant="outline" className="rounded-2xl border-yellow-300">Open in Email</Button>
                </a>
                <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-neutral-800 rounded-2xl px-6">Send RSVP</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Gallery" icon={Gift} subtitle="Some favorite moments together">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONFIG.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-yellow-200 shadow-sm"
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" icon={Gift} subtitle="Helpful notes for our guests">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "Can I bring a plus-one?", a: "We wish we could host everyone, but we have limited space. Please refer to the name on your invite." },
            { q: "Is there a dress code?", a: "Pastel garden semi-formal. We love pastel yellows!" },
            { q: "Are kids allowed?", a: "We love your little ones, but we’re planning an adults-only celebration." },
            { q: "Where should I park?", a: "Parking is available on-site. Please follow signage and attendants." },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl border-yellow-200">
              <CardHeader>
                <CardTitle className="text-lg">{item.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600">{item.a}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-yellow-200/60 bg-yellow-50/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">With love, {CONFIG.couple.bride} & {CONFIG.couple.groom} · {CONFIG.date.label}</div>
          <div className="flex items-center gap-3 text-sm">
            <a href={CONFIG.socials.instagram} className="inline-flex items-center gap-2 hover:underline"><Instagram className="h-4 w-4" />Instagram</a>
            <a href={CONFIG.socials.email} className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" />Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

