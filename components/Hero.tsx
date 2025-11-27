"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPink/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-reddishOrange/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      {/* Abstract Geometric Shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-white/10 rounded-lg rotate-12" />
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-white/5 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="bg-gradient-to-r from-neonPink to-reddishOrange bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
            Next Gen AI Automation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
          Automate Your Business <br />
          <span className="bg-gradient-to-r from-neonPink via-reddishOrange to-neonPink bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            With Intelligent AI
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Scale your agency and operations with Pomeg Ai. From messenger automation to social media management, we build productized AI services for the modern era.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-white text-deepBlack font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neonPink to-reddishOrange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
