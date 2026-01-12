import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart,
  Users,
  Award,
  Lightbulb,
  Shield,
  Clock,
  Zap,
  CheckCircle2
} from "lucide-react";
import { GradientButton, GlassCard, SectionHeading } from "@/components/ui/GradientComponents";
import { AnimatedSection, StaggeredContainer, StaggeredItem, FloatingElement } from "@/components/AnimatedSection";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to keep you ahead of the competition.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent communication and honest business practices are the foundation of our relationships.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and that passion shows in every project we deliver.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your success is our success. We work as an extension of your team.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on time, every time. Your deadlines are our priority.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We don't settle for good enough. We strive for exceptional in everything we do.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Novatech Digital was born with a vision to democratize digital growth." },
  { year: "2020", title: "First 25 Clients", description: "Reached our first major milestone during challenging times." },
  { year: "2021", title: "Team Expansion", description: "Grew to 15+ specialists across design, development, and marketing." },
  { year: "2022", title: "100+ Projects", description: "Delivered over 100 successful projects across various industries." },
  { year: "2023", title: "National Recognition", description: "Recognized as a leading digital agency in Uttar Pradesh." },
  { year: "2024", title: "New Horizons", description: "Expanding our services to serve clients across India." },
];

const differentiators = [
  "End-to-end digital solutions under one roof",
  "Dedicated project manager for personalized attention",
  "Transparent pricing with no hidden costs",
  "Quick turnaround without compromising quality",
  "Post-launch support and maintenance",
  "Data-driven approach for measurable results",
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 animated-gradient-bg opacity-30" />
        
        {/* Floating Elements */}
        <FloatingElement className="absolute top-32 right-[10%]" duration={8}>
          <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 left-[5%]" duration={10} delay={2}>
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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Novatech Digital</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Crafting Digital <span className="gradient-text">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              We're not just another digital agency. We're your growth partners, 
              committed to transforming your business through innovative digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                From Vision to <span className="gradient-text">Reality</span>
              </h2>
              
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019 in Kanpur, Uttar Pradesh, Novatech Digital emerged from a 
                  simple yet powerful idea: every business, regardless of size, deserves 
                  access to world-class digital solutions.
                </p>
                <p>
                  What started as a small team of passionate developers and designers has 
                  grown into a full-service digital agency, serving startups, SMBs, and 
                  enterprises across India.
                </p>
                <p>
                  Today, we're proud to have helped over 150 businesses transform their 
                  digital presence, increase their online visibility, and achieve 
                  sustainable growth in an increasingly competitive landscape.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-novatech-purple/20 to-accent/20 rounded-3xl blur-2xl" />
                
                <GlassCard className="relative p-8" hover={false}>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold gradient-text">150+</div>
                      <div className="text-sm text-muted-foreground mt-2">Projects Completed</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold gradient-text">50+</div>
                      <div className="text-sm text-muted-foreground mt-2">Happy Clients</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold gradient-text">5+</div>
                      <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold gradient-text">98%</div>
                      <div className="text-sm text-muted-foreground mt-2">Client Satisfaction</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection direction="left">
              <GlassCard className="h-full p-8" glow>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-novatech-purple flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative, accessible, and 
                  result-driven digital solutions that fuel sustainable growth and 
                  competitive advantage in the digital economy.
                </p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <GlassCard className="h-full p-8" glow>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-novatech-purple to-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted digital transformation partner, recognized 
                  for our creativity, innovation, and unwavering commitment to delivering 
                  exceptional value to every client we serve.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>

          {/* Values */}
          <SectionHeading
            badge="Core Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do."
          />

          <StaggeredContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <StaggeredItem key={value.title}>
                <GlassCard className="h-full p-6 group">
                  <value.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Journey"
            title="Milestones We're Proud Of"
            subtitle="A timeline of growth, learning, and achievements."
          />

          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-novatech-purple to-accent" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <div className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <GlassCard className="p-6">
                        <div className="text-sm text-primary font-semibold mb-1">{milestone.year}</div>
                        <h4 className="text-lg font-bold mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </GlassCard>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">What Sets Us Apart</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Why Choose <span className="gradient-text">Novatech Digital</span>
              </h2>
              
              <p className="mt-6 text-muted-foreground leading-relaxed">
                In a crowded market, we stand out through our unwavering commitment 
                to quality, transparency, and results. Here's what makes us different:
              </p>

              <div className="mt-8 space-y-4">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <GlassCard className="p-8" glow hover={false}>
                <h3 className="text-2xl font-bold mb-6">Ready to work with us?</h3>
                <p className="text-muted-foreground mb-8">
                  Let's discuss how we can help transform your business with our 
                  comprehensive digital solutions.
                </p>
                <Link to="/contact">
                  <GradientButton size="lg" className="w-full group">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </GradientButton>
                </Link>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
