import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check,
  Star,
  Sparkles,
  Zap,
  MessageCircle,
  Flame,
  Gem,
  ShoppingCart,
  TrendingUp,
  Globe,
  IndianRupee
} from "lucide-react";
import { GradientButton, GlassCard, SectionHeading } from "@/components/ui/GradientComponents";
import { AnimatedSection, StaggeredContainer, StaggeredItem, FloatingElement } from "@/components/AnimatedSection";

type Currency = "INR" | "USD";

// Website Development Packages
const websitePackages = [
  {
    name: "Starter Website",
    priceINR: "₹12,499",
    priceUSD: "$149",
    badge: null,
    badgeIcon: null,
    description: "Best for small businesses / personal brands",
    tagline: "Simple but professional",
    features: [
      "Up to 5 pages",
      "Modern responsive design",
      "Basic animations",
      "Contact form",
      "WhatsApp / Call button",
      "SEO-friendly structure",
      "7 days delivery",
      "14 days free support",
    ],
    popular: false,
  },
  {
    name: "Growth Website",
    priceINR: "₹16,499",
    priceUSD: "$199",
    badge: "Most Popular",
    badgeIcon: Star,
    description: "Best for startups & growing businesses",
    tagline: "Perfect balance of price + premium look",
    features: [
      "Up to 10 pages",
      "Premium UI with gradients",
      "Smooth animations & hover effects",
      "Custom sections & layouts",
      "SEO optimization",
      "Speed optimization",
      "Social media integration",
      "1 month free support",
    ],
    popular: true,
  },
  {
    name: "Premium Business",
    priceINR: "₹28,999",
    priceUSD: "$349",
    badge: "Premium",
    badgeIcon: Gem,
    description: "Best for brands that want authority & trust",
    tagline: "High-end agency level website",
    features: [
      "Up to 15 pages",
      "Fully custom design (no templates)",
      "Advanced animations & micro-interactions",
      "Glassmorphism & gradient UI",
      "Conversion-focused layout",
      "Lead generation forms",
      "2 months free support",
    ],
    popular: false,
  },
  {
    name: "Enterprise / Custom",
    priceINR: "₹49,999+",
    priceUSD: "$599+",
    badge: null,
    badgeIcon: null,
    description: "Best for large businesses & enterprises",
    tagline: "Tailored solutions for serious businesses",
    features: [
      "Unlimited pages",
      "Fully custom UI/UX",
      "Advanced animations & transitions",
      "CRM / API integrations",
      "Custom dashboards",
      "Dedicated project manager",
      "Priority support",
    ],
    popular: false,
  },
];

// E-Commerce Packages
const ecommercePackages = [
  {
    name: "Basic Store",
    priceINR: "₹20,499",
    priceUSD: "$249",
    badge: null,
    badgeIcon: null,
    features: [
      "Up to 50 products",
      "Payment gateway integration",
      "Order management",
      "Responsive design",
    ],
  },
  {
    name: "Advanced Store",
    priceINR: "₹32,999",
    priceUSD: "$399",
    badge: "Best Value",
    badgeIcon: Flame,
    features: [
      "Unlimited products",
      "Advanced UI + animations",
      "Cart optimization",
      "Coupon & discount setup",
    ],
  },
  {
    name: "Premium Store",
    priceINR: "₹57,999+",
    priceUSD: "$699+",
    badge: "Premium",
    badgeIcon: Gem,
    features: [
      "Custom UX",
      "Performance optimization",
      "Advanced analytics",
      "Conversion-focused design",
    ],
  },
];

// Digital Marketing Packages
const marketingPackages = [
  {
    name: "Starter Marketing",
    priceINR: "₹12,499",
    priceUSD: "$149",
    periodINR: "/month",
    periodUSD: "/month",
    badge: null,
    badgeIcon: null,
    features: [
      "Social media management (2 platforms)",
      "Basic creatives",
      "Monthly report",
    ],
  },
  {
    name: "Growth Marketing",
    priceINR: "₹24,999",
    priceUSD: "$299",
    periodINR: "/month",
    periodUSD: "/month",
    badge: "Most Popular",
    badgeIcon: Star,
    features: [
      "Social media + paid ads",
      "Lead generation campaigns",
      "Performance tracking",
    ],
  },
  {
    name: "Performance Pro",
    priceINR: "₹41,499",
    priceUSD: "$499",
    periodINR: "/month",
    periodUSD: "/month",
    badge: "Best Value",
    badgeIcon: Flame,
    features: [
      "Ads optimization",
      "Funnel strategy",
      "Weekly reporting",
      "ROI-focused growth",
    ],
  },
];

const faqs = [
  {
    question: "What's included in the website price?",
    answer: "All our packages include design, development, hosting setup, and the specified support period. Domain and hosting costs are separate.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Starter websites take about 7 days, Growth packages 2-3 weeks, and Custom projects vary based on complexity. We'll provide a detailed timeline during consultation.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer flexible payment options including 50% upfront and 50% on completion. For larger projects, we can discuss milestone-based payments.",
  },
  {
    question: "What happens after the free support period?",
    answer: "We offer affordable monthly maintenance packages for ongoing support, updates, and security monitoring.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your website at any time. We'll credit a portion of your original investment towards the upgrade.",
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 animated-gradient-bg opacity-30" />
        
        <FloatingElement className="absolute top-32 right-[15%]" duration={8}>
          <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 left-[10%]" duration={10} delay={2}>
          <div className="w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        </FloatingElement>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Transparent Pricing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Simple, Honest <span className="gradient-text">Pricing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              No hidden fees, no surprises. All prices are starting from. 
              Final cost may vary based on project scope and requirements.
            </motion.p>

            {/* Currency Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex items-center justify-center gap-2"
            >
              <GlassCard className="p-1.5 inline-flex items-center gap-1">
                <button
                  onClick={() => setCurrency("INR")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currency === "INR"
                      ? "bg-gradient-to-r from-primary to-novatech-purple text-white shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <IndianRupee className="w-4 h-4" />
                  India (INR)
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currency === "USD"
                      ? "bg-gradient-to-r from-primary to-novatech-purple text-white shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  International (USD)
                </button>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Development Packages */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="💻 Website Development"
            title="Website Packages"
            subtitle="Professional websites that make an impact."
          />

          <StaggeredContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {websitePackages.map((plan) => (
              <StaggeredItem key={plan.name}>
                <div className="relative h-full">
                  {/* Badge */}
                  {plan.badge && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                    >
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-novatech-purple text-white text-xs font-medium shadow-lg shadow-primary/30">
                        {plan.badgeIcon && <plan.badgeIcon className="w-3 h-3 fill-current" />}
                        {plan.badge}
                      </div>
                    </motion.div>
                  )}

                  <GlassCard 
                    className={`h-full p-6 flex flex-col ${plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : ""}`}
                    glow={plan.popular}
                    hover
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                      <motion.div 
                        key={currency}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-end justify-center gap-1"
                      >
                        <span className="text-3xl font-bold gradient-text">
                          {currency === "INR" ? plan.priceINR : plan.priceUSD}
                        </span>
                      </motion.div>
                      <p className="mt-2 text-xs text-muted-foreground">{plan.description}</p>
                      <p className="mt-1 text-xs text-primary font-medium">👉 {plan.tagline}</p>
                    </div>

                    {/* Features */}
                    <div className="flex-1 space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link to="/contact" className="w-full">
                      <GradientButton 
                        variant={plan.popular ? "primary" : "outline"}
                        size="md"
                        className="w-full"
                        glowing={plan.popular}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </GradientButton>
                    </Link>
                  </GlassCard>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* E-Commerce Packages */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🛒 E-Commerce"
            title="Online Store Packages"
            subtitle="Launch your online store and start selling."
          />

          <StaggeredContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ecommercePackages.map((plan, index) => (
              <StaggeredItem key={plan.name}>
                <div className="relative h-full">
                  {/* Badge */}
                  {plan.badge && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                    >
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-novatech-cyan text-white text-xs font-medium shadow-lg shadow-accent/30">
                        {plan.badgeIcon && <plan.badgeIcon className="w-3 h-3 fill-current" />}
                        {plan.badge}
                      </div>
                    </motion.div>
                  )}

                  <GlassCard 
                    className={`h-full p-6 flex flex-col ${index === 1 ? "border-accent/50" : ""}`}
                    hover
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-4">
                      <ShoppingCart className="w-6 h-6 text-accent" />
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                      <motion.div 
                        key={currency}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-3xl font-bold gradient-text"
                      >
                        {currency === "INR" ? plan.priceINR : plan.priceUSD}
                      </motion.div>
                    </div>

                    <div className="flex-1 space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="w-full">
                      <GradientButton 
                        variant="outline"
                        size="md"
                        className="w-full"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </GradientButton>
                    </Link>
                  </GlassCard>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Digital Marketing Packages */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="📈 Digital Marketing"
            title="Marketing Packages"
            subtitle="Grow your business with strategic digital marketing."
          />

          <StaggeredContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {marketingPackages.map((plan, index) => (
              <StaggeredItem key={plan.name}>
                <div className="relative h-full">
                  {/* Badge */}
                  {plan.badge && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                    >
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-novatech-purple text-white text-xs font-medium shadow-lg shadow-primary/30">
                        {plan.badgeIcon && <plan.badgeIcon className="w-3 h-3 fill-current" />}
                        {plan.badge}
                      </div>
                    </motion.div>
                  )}

                  <GlassCard 
                    className={`h-full p-6 flex flex-col ${index === 1 ? "border-primary/50" : ""}`}
                    hover
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                      <motion.div 
                        key={currency}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-end justify-center gap-1"
                      >
                        <span className="text-3xl font-bold gradient-text">
                          {currency === "INR" ? plan.priceINR : plan.priceUSD}
                        </span>
                        <span className="text-muted-foreground text-sm mb-1">
                          {currency === "INR" ? plan.periodINR : plan.periodUSD}
                        </span>
                      </motion.div>
                    </div>

                    <div className="flex-1 space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="w-full">
                      <GradientButton 
                        variant={index === 1 ? "primary" : "outline"}
                        size="md"
                        className="w-full"
                        glowing={index === 1}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </GradientButton>
                    </Link>
                  </GlassCard>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Common Questions"
            subtitle="Got questions? We've got answers."
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <GlassCard className="p-6" hover={false}>
                  <h4 className="text-lg font-semibold mb-2 flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground ml-8">{faq.answer}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project requirements 
              and get a personalized quote.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <GradientButton size="lg" glowing className="group">
                  <MessageCircle className="w-5 h-5" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </Link>
              <a href="tel:+919839074904">
                <GradientButton variant="outline" size="lg">
                  Call +91-9839074904
                </GradientButton>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
