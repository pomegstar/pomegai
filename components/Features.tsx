export default function Features() {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neonPink/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for Scale & <br />
              <span className="text-reddishOrange">Future-Proof Growth</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Pomeg Ai isn't just a tool; it's an ecosystem designed to evolve with your business. We leverage cutting-edge LLMs and automation frameworks.
            </p>

            <div className="space-y-6">
              {[
                "Enterprise-grade Security & Data Privacy",
                "Seamless API Integrations (Postgres, Supabase)",
                "Custom AI Model Fine-tuning",
                "24/7 Automated System Monitoring"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-neonPink/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-neonPink" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-neonPink/20 to-reddishOrange/20 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-500 font-mono">system_status: active</div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-neonPink">$</span>
                  <span className="text-gray-300">init pomeg_ai_core</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500">&gt;</span>
                  <span className="text-green-400">Loading modules... [OK]</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500">&gt;</span>
                  <span className="text-green-400">Connecting to database... [OK]</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500">&gt;</span>
                  <span className="text-green-400">Optimizing workflow... [OK]</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-neonPink">$</span>
                  <span className="text-gray-300 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
