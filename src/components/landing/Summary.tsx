import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Summary = () => (
  <section className="py-20 lg:py-28 summmery-section">
    <div className="container max-w-6xl text-center">
      <h2 className="text-3xl md:text-6xl font-black mb-6">
        Your Ads Deserve <span className="gradient-text">Better</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto mb-6">
        Stop wasting money on underperforming campaigns. With AdScale Pro, you get proven Facebook ads, managed by experts, with no guesswork — just results that scale your business.
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
        Apply today to see if you qualify for our done-for-you Facebook ad management service. Spots are limited.
      </p>
      <Link to="/apply">
        <Button size="lg" className="mt-10" variant="default">
          Apply now
        </Button>
      </Link>
    </div>
  </section>
);

export default Summary;
