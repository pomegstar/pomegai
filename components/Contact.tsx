export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
       <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Started with Pomeg Ai
            </h2>
            <p className="text-gray-400">
              Ready to transform your business? Join the waitlist or get in touch for a custom demo.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-neonPink focus:ring-1 focus:ring-neonPink transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-neonPink focus:ring-1 focus:ring-neonPink transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                I'm interested in...
              </label>
              <select
                id="interest"
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-neonPink focus:ring-1 focus:ring-neonPink transition-colors appearance-none"
              >
                <option>Messenger Automation</option>
                <option>Social Media Posting</option>
                <option>Agency Scaling</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-neonPink focus:ring-1 focus:ring-neonPink transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-neonPink to-reddishOrange text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
