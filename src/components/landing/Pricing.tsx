import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$997",
    period: "/month",
    desc: "Perfect for small businesses just getting started with Facebook ads.",
    features: ["1 ad campaign", "Leads sent to your Facebook & Messenger", "$2,500 setup fee"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/month",
    desc: "Ideal for growing brands ready to scale their advertising.",
    features: ["1 ad campaign", "Custom Facebook lead form with qualifying questions", "$2,500 setup fee"],
    popular: true,
  },
  {
    name: "Scale",
    price: "$3,497",
    period: "/month",
    desc: "For established businesses with aggressive growth targets.",
    features: ["1 ad campaign", "Funnel landing page to capture qualified leads", "$5000 setup fee"],
    popular: false,
  },
  {
    name: "VIP",
    price: "$5,000",
    period: "/month",
    desc: "Tailored solutions for high-volume advertisers.",
    features: ["1 ad campaign", "Funnel landing page to capture qualified leads", "Lead follow-up agent to email leads and book directly on your calendar", "$5000 setup fee"],
    popular: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 lg:py-28 surface-cool">
    <div className="container max-w-7xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Plans That <span className="gradient-text">Fit Your Growth</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Transparent pricing. No hidden fees. Cancel anytime.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-2xl p-6 bg-card ${p.popular ? "border-2 border-primary shadow-card-hover" : "border border-border shadow-card"
              }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-hero text-xs font-bold text-primary-foreground">
                Most Popular
              </span>
            )}
            <h3 className="font-bold text-xl mb-1">{p.name}</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-black">{p.price}</span>
              <span className="text-muted-foreground text-sm">{p.period}</span>
            </div>
            {/* <p className="text-sm text-muted-foreground mb-6">{p.desc}</p> */}

            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link to="/apply">
              <Button className="w-full" variant={p.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground mt-10 text-center mx-auto">
        Note: All extra ad campaigns incur additional charges.
      </p>
    </div>
  </section>
);

export default Pricing;
