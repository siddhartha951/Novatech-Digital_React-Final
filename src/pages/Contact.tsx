import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail,
  MapPin, 
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { GradientButton, GlassCard } from "@/components/ui/GradientComponents";
import { AnimatedSection, FloatingElement } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9839074904",
    href: "tel:+919839074904",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@novatechdigital.in",
    href: "mailto:info@novatechdigital.in",
  },
];

const locations = [
  {
    branch: "1st Branch",
    city: "Kanpur",
    address: "Kanpur, Uttar Pradesh, India",
  },
  {
    branch: "2nd Branch", 
    city: "Pune",
    address: "Viman Nagar, Pune, Maharashtra, India",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .send(
      "service_uee81j4",
      "template_b2dj8tt",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      "bUTPHaEsxstbll63D"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    })
    .catch(() => {
      alert("Message send nahi hua");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
};


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
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Let's Start a <span className="gradient-text">Conversation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Have a project in mind? We'd love to hear about it. 
              Get in touch and let's create something amazing together.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <GlassCard className="p-8" glow hover={false}>
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Website Development"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-secondary/50 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <GradientButton
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    glowing
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </GradientButton>
                </form>
              </GlassCard>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Contact Cards */}
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <GlassCard className="p-6">
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-novatech-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{info.label}</div>
                            <div className="font-semibold group-hover:text-primary transition-colors">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-novatech-purple flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{info.label}</div>
                            <div className="font-semibold">{info.value}</div>
                          </div>
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                ))}

                {/* Locations */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <GlassCard className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Our Locations
                    </h3>
                    <div className="space-y-4">
                      {locations.map((location, index) => (
                        <div key={location.city} className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-primary">{index + 1}</span>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{location.branch}</div>
                            <div className="font-semibold">{location.city}</div>
                            <div className="text-sm text-muted-foreground">{location.address}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <GlassCard className="p-6" glow>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      Quick Connect
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="https://wa.me/919839074904"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-green-500">WhatsApp</div>
                          <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                        </div>
                      </a>
                      
                      <a
                        href="tel:+919839074904"
                        className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-primary">Call Now</div>
                          <div className="text-sm text-muted-foreground">Speak with an expert</div>
                        </div>
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <GlassCard className="p-6">
                    <h3 className="font-semibold mb-4">Office Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span>10:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Find Us in <span className="gradient-text">Kanpur</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Visit our office or schedule a virtual meeting. We're here to help!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <GlassCard className="overflow-hidden" hover={false}>
              <div className="aspect-[16/9] md:aspect-[21/9] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d80.19216894999999!3d26.449923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Indicators */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <GlassCard className="p-8" glow hover={false}>
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {[
                  { step: "1", title: "We Respond", description: "Within 24 hours" },
                  { step: "2", title: "Discovery Call", description: "Understand your needs" },
                  { step: "3", title: "Custom Proposal", description: "Tailored to you" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-novatech-purple text-white font-bold flex items-center justify-center mx-auto mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
