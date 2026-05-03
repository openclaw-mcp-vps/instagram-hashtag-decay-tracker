export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Instagram Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Know exactly when your hashtags{" "}
          <span className="text-[#58a6ff]">stop working</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          HashDecay monitors your Instagram hashtag reach over time, fires alerts the moment performance drops, and surfaces fresh alternatives — so you never waste a post on dead tags.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $13/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["Reach & impression tracking", "Decay alerts via email", "Alternative hashtag suggestions", "Historical performance charts", "Multi-account support"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-2 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$13</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Track up to 200 hashtags",
              "Daily performance snapshots",
              "Instant decay alerts",
              "AI-powered tag alternatives",
              "Up to 5 Instagram accounts",
              "CSV data export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does HashDecay detect when a hashtag is declining?",
              a: "We pull reach and impression data from Instagram's API daily. When a hashtag's 7-day rolling average drops more than 20% from its peak, we fire an alert so you can swap it out before your post performance suffers."
            },
            {
              q: "Where do the alternative hashtag suggestions come from?",
              a: "Our system analyzes trending tags in your niche, cross-references engagement rates, and uses semantic similarity to recommend replacements that are currently gaining traction — not just popular ones that are already saturated."
            },
            {
              q: "Do I need to give HashDecay my Instagram password?",
              a: "No. We use Instagram's official OAuth flow. You authorize read-only access to your account's insights, and we never store your credentials — only the access token needed to fetch analytics data."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} HashDecay. All rights reserved.
      </footer>
    </main>
  );
}
