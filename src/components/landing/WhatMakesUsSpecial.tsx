import { Zap, HeartHandshake, Clock, Award, ShieldCheck } from "lucide-react";

const specials = [
  { icon: ShieldCheck, title: "Proven Ads", desc: "tested campaigns with no guesswork." },
  { icon: HeartHandshake, title: "Partnership Approach", desc: "we become an extension of your team." },
  { icon: Clock, title: "Full Management & Monitoring", desc: "we handle everything and keep campaigns optimized." },
  { icon: Award, title: "Proven System", desc: "trusted by 15,000+ businesses." },
];

const WhatMakesUsSpecial = () => (
  <section className="py-20 lg:py-28 surface-cool">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          What Makes Us <span className="gradient-text">Different</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We’re not your average agency—here’s what sets us apart.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {specials.map((s) => (
          <div key={s.title} className="flex hover:shadow-card-hover  gap-5 p-6 rounded-xl bg-card shadow-card">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatMakesUsSpecial;
