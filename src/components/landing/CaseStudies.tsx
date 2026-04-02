import { TrendingUp } from "lucide-react";

const cases = [
  {
    company: "Agency 1",
    MRR: "$6K MRR",
    result: "Scaled recurring revenue to $6,000/month using this Facebook ad system.",
  },
  {
    company: "Agency 2",
    MRR: "$25K/month",
    result: "Grew to $25,000 in monthly revenue leveraging this Facebook ad system.",
  },
  {
    company: "Media Agency",
    MRR: "+$36K Revenue",
    result: "Generated $36,000 in additional revenue using this Facebook ad system.",
  },
  {
    company: "Local Business",
    MRR: "$200K MRR",
    result: "Achieved $200,000/month in recurring revenue using this Facebook ad system.",
  },
  {
    company: "Business 2",
    MRR: "$300K MRR",
    result: "Scaled $300,000/month with this Facebook ad system.",
  },
  {
    company: "Service Business",
    MRR: "100+ Clients Booked",
    result: "Booked over 100 clients using this Facebook ad system.",
  },
  {
    company: "Business 3",
    MRR: "87 Clients Acquired",
    result: "Acquired 87 clients leveraging this Facebook ad system.",
  },
  {
    company: "New Business",
    MRR: "First Lead Delivered",
    result: "Received the first lead within 7 hours of launching a campaign using this Facebook ad system—even with no prior testimonials.",
  }
];

const CaseStudies = () => (
  <section className="py-20 lg:py-28 surface-warm">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Case Studies</span>
        <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
          Real Results for <span className="gradient-text">Real Businesses</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Case Studies from This Facebook Ad System
        </p>
      </div>
      <h2 className="text-2xl md:text-3xl text-center font-black mt-10 mb-10">
        Agency Success Stories
      </h2>
      <div className="grid lg:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div key={c.company} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
            <div className="gradient-hero p-6">
              <TrendingUp className="w-8 h-8 text-primary-foreground mb-2" />
              <h3 className="text-xl font-bold text-primary-foreground">{c.company}</h3>
              <p className="text-primary-foreground/70 text-sm">{c.MRR}</p>
            </div>
            <div className="p-6">

              <div className="mb-6">
                <p className="text-sm text-foreground">{c.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
