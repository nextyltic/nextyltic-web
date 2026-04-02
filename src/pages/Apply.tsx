import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-black mb-3">Application Submitted!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for applying. We'll review your information and get back to you within 24–48 hours.
          </p>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}

      <div className="bg-white border-b border-border fixed left-0 margin  max-w-max navbar right-0 shadow-2xl top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-lg lg:text-xl font-bold gradient-text">Nextyltic Ads Management</span>
        </div>
      </div>

      <section
        id="subheader"
        className="jarallax relative"
        style={{ zIndex: 0, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div
          className="container relative z-2"
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        >
          <div
            className="row justify-content-between align-items-center"
            style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          >
            <div
              className="col-lg-6"
              style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >

              <h1
                className="wow fadeInUp animated text-2xl md:text-6xl "
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp"
                }}
              >
                Apply to Work With Us
              </h1>
              <div className="text-left mb-10">
                <p className="text-muted-foreground max-w-lg mt-4">
                  Please answer the questions below so we can determine if we're the right fit for your business. All fields are required.
                </p>
              </div>
            </div>
            {/* <div
              className="w-48 mr-4 lg:mr-0 lg:w-80 abs abs-middle end-0 xs-hide"
              style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >
              <img
                src="/c4.webp"
                className="w-100 wow scaleIn animated"
                data-wow-duration="2s"
                alt=""
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationName: "scaleIn"
                }}
              />
            </div> */}
          </div>
        </div>
        <div
          id="jarallax-container-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: -100,
            clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <img
            src="/2.webp"
            className="jarallax-img"
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              maxWidth: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "389.4px",
              overflow: "hidden",
              pointerEvents: "none",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform, opacity",
              marginTop: "-17.2px",
              transform: "translate3d(0px, 17.2px, 0px)"
            }}
          />
        </div>
      </section>

      <div className="container max-w-4xl py-2 ">


        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type='hidden' name='subject' value='New Nextyltic Ads Management Application' />
          {/* StaticForms access key*/}
          <input type="hidden" name="accessKey" value="sf_8f020568011aa14e0a37d5f7" />

          {/* Contact Info */}
          <div className="p-6 form-container  rounded-xl border border-border space-y-4">
            <h2 className="font-bold text-lg">Contact Information</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Business Name *</Label>
                <Input id="company" name="$company" placeholder="Acme Inc." required />
              </div>
            </div>

            <div className="">
              <div className="space-y-2">
                <Label htmlFor="companyAddress">Business Address *</Label>
                <Input id="companyAddress" name="$companyAddress" type="text" placeholder="123 Main St, City, State 12345" required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Business Website *</Label>
                <Input id="website" name="$website" type="text" placeholder="" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Business Facebook Page *</Label>
                <Input id="company" name="$companyFacebookPage" type="text" placeholder="" required />
              </div>
            </div>
          </div>

          {/* Qualifying Questions */}
          <div className="p-6 form-container  rounded-xl border border-border space-y-4">
            <h2 className="font-bold text-lg">Qualifying Questions</h2>

            <div className="space-y-2">
              <Label htmlFor="industry">What industry are you in? *</Label>
              <Input id="industry" name="$industry" placeholder="e.g., E-commerce, SaaS, Local Services" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Selected Package *</Label>
              <Select name="$package" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your Package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Starter">Starter</SelectItem>
                  <SelectItem value="Growth">Growth</SelectItem>
                  <SelectItem value="Scale">Scale</SelectItem>
                  <SelectItem value="VIP">VIP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* <div className="space-y-2">
              <Label htmlFor="currentAds">Are you currently running Facebook/Instagram ads?</Label>
              <Select name="$currentlyRunningAds" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes, in-house">Yes, in-house</SelectItem>
                  <SelectItem value="Yes, with another agency">Yes, with another agency</SelectItem>
                  <SelectItem value="No, but I have in the past">No, but I have in the past</SelectItem>
                  <SelectItem value="No, never">No, I've never run ads</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            {/* <div className="space-y-2">
              <Label htmlFor="monthlyRevenue">What is your approximate monthly revenue?</Label>
              <Select name="$monthlyRevenue" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under $10K">Under $10K</SelectItem>
                  <SelectItem value="$10K - $50K">$10K – $50K</SelectItem>
                  <SelectItem value="$50K - $100K">$50K – $100K</SelectItem>
                  <SelectItem value="$100K - $500K">$100K – $500K</SelectItem>
                  <SelectItem value="$500K+">$500K+</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            <div className="space-y-2">
              <Label htmlFor="setupFee">Are you able to pay the setup fee and recurring retainer? (This is not your ad budget) *</Label>
              <Textarea
                id="setupFee"
                name="$setupFee"
                placeholder="Please explain your budget constraints..."
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlyBudget">Monthly Ad Budget *</Label>
              <Input id="monthlyBudget" name="$monthlyBudget" placeholder="e.g., $1,000 - $5,000" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">How soon are you looking to start? *</Label>
              <Input id="timeline" name="$timeline" placeholder="e.g., Immediately, Within 2 weeks" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentlyRunningAds">Are you currently running Facebook ads or other methods to get leads? *</Label>
              <Input id="currentlyRunningAds" name="$currentlyRunningAds" placeholder="e.g., Yes, No" required />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full py-6 text-base font-bold" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Application"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted regarding our services. We'll never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Apply;
