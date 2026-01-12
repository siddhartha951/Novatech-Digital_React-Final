import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  Megaphone, 
  Share2, 
  Code, 
  Database, 
  Camera,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { GradientButton, GlassCard, SectionHeading } from "@/components/ui/GradientComponents";
import { AnimatedSection, StaggeredContainer, StaggeredItem, FloatingElement } from "@/components/AnimatedSection";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Website Design & Development",
    description: "We create stunning, responsive websites that captivate your audience and drive conversions. From simple landing pages to complex web applications, we build digital experiences that make an impact.",
    benefits: [
      "Custom responsive design for all devices",
      "SEO-optimized structure and content",
      "Fast loading speeds and performance",
      "Content management system integration",
      "E-commerce functionality",
      "Ongoing maintenance and support",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital & Performance Marketing",
    description: "Data-driven marketing strategies that maximize your ROI. We help you reach the right audience at the right time with compelling messages that convert.",
    benefits: [
      "Google Ads & PPC campaigns",
      "Search engine optimization (SEO)",
      "Content marketing strategy",
      "Email marketing automation",
      "Analytics and reporting",
      "Conversion rate optimization",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a powerful brand presence across all major social platforms. We create engaging content and manage communities that turn followers into customers.",
    benefits: [
      "Platform-specific strategy development",
      "Content creation and curation",
      "Community management",
      "Influencer partnerships",
      "Paid social advertising",
      "Performance analytics and insights",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "software-development",
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business needs. From web applications to mobile apps, we build scalable, secure, and user-friendly software.",
    benefits: [
      "Custom web applications",
      "Mobile app development (iOS & Android)",
      "API development and integration",
      "Cloud-based solutions",
      "Legacy system modernization",
      "Quality assurance and testing",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "erp-development",
    icon: Database,
    title: "ERP Development",
    description: "Streamline your operations with integrated ERP systems. We build comprehensive enterprise solutions that connect all aspects of your business.",
    benefits: [
      "Custom ERP solutions",
      "Inventory management systems",
      "CRM integration",
      "HR and payroll modules",
      "Financial management tools",
      "Business intelligence dashboards",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "photoshoot-video",
    icon: Camera,
    title: "Photoshoot & Videography",
    description: "Professional visual content that tells your story. From product photography to corporate videos, we create compelling visuals that elevate your brand.",
    benefits: [
      "Product photography",
      "Corporate videos",
      "Social media content",
      "Event coverage",
      "Drone videography",
      "Post-production editing",
    ],
    color: "from-indigo-500 to-violet-500",
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 animated-gradient-bg opacity-30" />
        
        <FloatingElement className="absolute top-32 left-[10%]" duration={8}>
          <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 right-[5%]" duration={10} delay={2}>
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
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Complete Digital <span className="gradient-text">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              From concept to execution, we provide everything you need to establish 
              and grow your digital presence under one roof.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <Link to="/contact">
                      <GradientButton className="group">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </GradientButton>
                    </Link>
                  </div>

                  {/* Benefits Card */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <GlassCard className="p-8" glow hover={false}>
                      <h3 className="text-xl font-semibold mb-6">What's Included</h3>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, i) => (
                          <motion.div
                            key={benefit}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <FloatingElement className="absolute top-10 left-[10%]" duration={8}>
          <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-10 right-[10%]" duration={10} delay={2}>
          <div className="w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
        </FloatingElement>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand that every business is unique. Let's discuss your specific 
              requirements and create a tailored solution just for you.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <GradientButton size="lg" glowing className="group">
                  Request a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </Link>
              <Link to="/pricing">
                <GradientButton variant="outline" size="lg">
                  View Pricing
                </GradientButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
