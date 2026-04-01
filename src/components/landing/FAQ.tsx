import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need to provide creative assets?", a: "It helps if you have examples of your work, but if you don’t, we can create and manage them for you." },
  { q: "What's the minimum ad spend required?", a: "There’s no minimum — we work with businesses of all budgets." },
  { q: "Can I cancel anytime?", a: "Yes. Cancel anytime, and you won’t be billed for the next month." },
  { q: "Do you work with any industry?", a: "Yes, we work with businesses across all industries." },
  { q: "What makes you different from other agencies?", a: "Our ads are proven and tested by thousands of businesses. We take the guesswork out of ad campaigns so you get real results." },
  { q: "Anything else I should know before getting started?", a: "It’s best to have an active Facebook business page. If you need help creating content, we can provide a page manager to handle posts and updates — this service is billed separately." },
];
const leftFaqs = faqs.slice(0, 3);
const rightFaqs = faqs.slice(3);
const FAQ = () => (
  <>
    <section id="faq" className="py-20 lg:py-28 bg-gradient-sky">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-6xl font-black mt-3 mb-4">
            FAQ – Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find everything you need to know about working with us.
          </p>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <Accordion type="single" collapsible className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0">
            {leftFaqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border self-start  mb-5 border-border bg-white rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mb-0">
            {rightFaqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border mb-5 self-start border-border bg-white rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>


  </>

);

export default FAQ;
