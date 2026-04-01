import { Target, CircleCheckBig, TrendingUp, Users, Layers, PieChart, Shield } from "lucide-react";

const features = [
  { icon: CircleCheckBig, title: "Tested Ads by Thousands of Businesses", desc: "no guessing, only proven campaigns." },
  { icon: TrendingUp, title: "Conversion Optimization", desc: "every campaign designed to drive results." },
  { icon: Users, title: "Full-Funnel Strategy Options", desc: "awareness, retargeting, conversion." },
  { icon: Layers, title: "Ad Management", desc: "we handle everything so you don’t have to." },
  { icon: PieChart, title: "Optional Sales Agent", desc: "follow up with leads and book them on your calendar." },
  { icon: Shield, title: "Real-Time Analytics", desc: "we track performance and make data-driven decisions." },
];

const Features = () => (
  <section id="features" className="py-20 bg-gradient lg:py-28">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Everything You Need to <span className="gradient-text">Win with Ads</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our all-in-one service takes care of every aspect of your Facebook advertising.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="group shadow-2xl p-6 rounded-xl border border-border hover:border-primary/30 bg-card hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:gradient-hero group-hover:text-primary-foreground transition-all">
              <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
