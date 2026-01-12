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
  Star,
  Sparkles,
  Zap,
  Users,
  TrendingUp,
  Award
} from "lucide-react";
import { GradientButton, GlassCard, SectionHeading } from "@/components/ui/GradientComponents";
import { AnimatedSection, StaggeredContainer, StaggeredItem, FloatingElement } from "@/components/AnimatedSection";

// Services data
const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, responsive websites that convert visitors into customers.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that maximize your ROI and reach.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major platforms.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "ERP Development",
    description: "Streamline your operations with integrated ERP systems.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Camera,
    title: "Photoshoot & Video",
    description: "Professional visual content that tells your story.",
    color: "from-indigo-500 to-violet-500",
  },
];

// Stats
const stats = [
  { value: "150+", label: "Projects Delivered", icon: Award },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "5+", label: "Years Experience", icon: TrendingUp },
];

// Process steps
const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
  { step: "02", title: "Strategy", description: "Crafting the perfect plan for success" },
  { step: "03", title: "Design", description: "Creating stunning visual experiences" },
  { step: "04", title: "Development", description: "Building robust, scalable solutions" },
  { step: "05", title: "Launch", description: "Deploying and monitoring success" },
];

// Testimonials
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content: "Novatech Digital transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, Bloom Boutique",
    content: "The team delivered an exceptional e-commerce platform. Our sales increased by 200% within the first quarter!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Director, BuildRight Construction",
    content: "Professional, responsive, and innovative. They truly understand digital transformation.",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-gradient-bg" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement className="absolute top-1/4 left-[10%]" duration={8} delay={0}>
            <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement className="absolute top-1/3 right-[15%]" duration={10} delay={2}>
            <div className="w-96 h-96 rounded-full bg-novatech-purple/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-1/4 left-[20%]" duration={7} delay={1}>
            <div className="w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          </FloatingElement>
          
          {/* Geometric Shapes */}
          <FloatingElement className="absolute top-[20%] right-[25%]" duration={6} distance={30}>
            <div className="w-20 h-20 border border-primary/30 rounded-2xl rotate-45" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-[30%] left-[15%]" duration={8} delay={1} distance={25}>
            <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
          </FloatingElement>
          <FloatingElement className="absolute top-[40%] left-[8%]" duration={7} delay={2} distance={20}>
            <Sparkles className="w-8 h-8 text-primary/40" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-[20%] right-[10%]" duration={9} distance={35}>
            <Zap className="w-10 h-10 text-accent/40" />
          </FloatingElement>
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">India's Trusted Digital Partner</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Transforming Ideas Into{" "}
              <span className="gradient-text">Digital Growth</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We deliver end-to-end digital solutions — from stunning websites to powerful 
              marketing campaigns — helping businesses across India achieve remarkable growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <GradientButton size="lg" glowing className="group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </Link>
              <Link to="/services">
                <GradientButton variant="outline" size="lg">
                  View Our Services
                </GradientButton>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Complete Digital Solutions"
            subtitle="Everything you need to establish and grow your digital presence, all under one roof."
          />

          <StaggeredContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggeredItem key={service.title}>
                <GlassCard className="h-full p-8 group" glow>
                  {/* Icon */}
                  <div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  {/* Learn More Link */}
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 mt-6 text-primary font-medium group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </GlassCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Your Success Is Our <span className="gradient-text">Priority</span>
              </h2>
              
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                We don't just build digital products — we build lasting partnerships. 
                Our team combines creativity, technical expertise, and business acumen 
                to deliver solutions that drive real results.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Dedicated project manager for every client",
                  "Transparent pricing with no hidden costs",
                  "24/7 support and maintenance",
                  "Proven track record of success",
                  "Latest technologies and best practices",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="inline-block mt-8">
                <GradientButton size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </GradientButton>
              </Link>
            </AnimatedSection>

            {/* Right Side - Stats Grid */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <GlassCard 
                    key={stat.label}
                    className="p-6 text-center"
                    glow
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </GlassCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            subtitle="A proven methodology that delivers exceptional results, every single time."
          />

          <div className="mt-16 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <StaggeredItem key={step.step} direction="up">
                  <div className="relative text-center group">
                    {/* Step Number */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-novatech-purple flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-shadow"
                    >
                      {step.step}
                    </motion.div>
                    
                    <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    
                    {/* Arrow for desktop */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 text-primary/50">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the businesses we've helped transform."
          />

          <StaggeredContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <StaggeredItem key={testimonial.name}>
                <GlassCard className="h-full p-8" glow>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-foreground leading-relaxed">"{testimonial.content}"</p>
                  
                  {/* Author */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        {/* Floating elements */}
        <FloatingElement className="absolute top-10 left-[10%]" duration={8}>
          <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-10 right-[10%]" duration={10} delay={2}>
          <div className="w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
        </FloatingElement>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals. 
              Get a free consultation with our experts today.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <GradientButton size="lg" glowing className="group">
                  Start Your Project
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

export default Home;
