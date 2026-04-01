import { Star } from "lucide-react";

const testimonials = [
  {
    name: "— Chris",
    quote: "Proven ad templates available. Takes the guesswork out of the mix. I won’t ever run Facebook ads without this. It’s a non-negotiable.",
    rating: 5,
  },
  {
    name: "— Viviane",
    quote: "Simplified the process and made it easy to move forward with running ads.",
    rating: 5,
  },
  {
    name: "— Joe",
    quote: "Gave me clarity, simplicity, and a clear path forward with real opportunity.",
    rating: 5,
  },
  {
    name: "— Tyler",
    quote: "Provided the right insights and action steps to move forward and improve results.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 lg:py-28 bg-gradient-sky">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Trusted by <span className="gradient-text">Growing Brands</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Don’t just take our word for it—hear from the businesses that have used the same Facebook ads system.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl border border-border bg-card shadow-card">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
            <div>
              <p className="font-bold text-sm">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
