import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Monitor, Smartphone, Megaphone, PenTool, 
  CheckCircle, Mail, Phone, MapPin, Send, MessageCircle,
  ArrowRight, ExternalLink, Code2, Rocket, Target, Users
} from 'lucide-react';

const WHATSAPP_NUMBER = "919347325305";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Code%20i2L,%20I%20want%20to%20build%20my%20business%20online`;

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailLine = formData.email ? `\nEmail: ${formData.email}` : '';
    const text = `Hi Code i2L, I’m interested in your services.\n\nName: ${formData.name}\nPhone: ${formData.phone}${emailLine}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
              <Code2 size={24} />
            </div>
            <div>
              <h1 className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Code i2L
              </h1>
              <p className={`text-[10px] font-medium tracking-widest uppercase ${isScrolled ? 'text-blue-600' : 'text-blue-200'}`}>
                Idea to Life
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
                >
                  {link.name}
                </button>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-4 rounded-xl bg-blue-600 text-white text-center font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                Idea to Life
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                Turn Your Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Digital Reality</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-medium text-slate-300 mb-8 leading-relaxed">
                We help businesses build a powerful online presence through <span className="text-white">websites, apps, marketing,</span> and <span className="text-white">content.</span>
              </h2>
              
              <div className="space-y-4 mb-10 text-lg text-slate-400">
                <p className="flex items-start lg:items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="text-yellow-400 shrink-0 mt-1 lg:mt-0" size={20} />
                  <span className="text-left">From idea to execution, we work with you at every step to create something meaningful.</span>
                </p>
                <p className="flex items-start lg:items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="text-yellow-400 shrink-0 mt-1 lg:mt-0" size={20} />
                  <span className="text-left">Whether you're starting small or scaling big, we help you stand out in the digital world.</span>
                </p>
              </div>
              
              <div className="mb-10 border-l-4 border-blue-400 pl-4 py-2 text-left inline-block">
                <p className="text-xl text-white font-medium">
                  Your brand deserves more than just visibility — <br className="hidden sm:block" />
                  <span className="text-yellow-400">it deserves impact, trust, and growth.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollTo('services')}
                  className="px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all backdrop-blur-sm flex items-center justify-center"
                >
                  View Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">Comprehensive digital solutions to help your business thrive in the modern online landscape.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Monitor size={32} />,
                title: "Website Development",
                desc: "Custom, responsive, and fast-loading websites built for conversions.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Smartphone size={32} />,
                title: "App Development",
                desc: "Native and cross-platform mobile applications for iOS and Android.",
                color: "bg-indigo-100 text-indigo-600"
              },
              {
                icon: <Megaphone size={32} />,
                title: "Digital Marketing",
                desc: "Data-driven strategies to increase your reach and drive sales.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: <PenTool size={32} />,
                title: "Content Creation",
                desc: "Engaging copy and visuals that tell your brand's unique story.",
                color: "bg-emerald-100 text-emerald-600"
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 h-full">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose Code i2L?</h2>
              <p className="text-lg text-slate-600 mb-10">We don't just build websites; we build digital businesses. Our approach combines technical excellence with strategic thinking.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <CheckCircle className="text-blue-600" />, title: "Affordable Pricing", desc: "Premium quality without the premium price tag." },
                  { icon: <Rocket className="text-blue-600" />, title: "Fast Delivery", desc: "Rapid execution to get you to market faster." },
                  { icon: <Monitor className="text-blue-600" />, title: "Modern Design", desc: "Clean, user-centric interfaces that convert." },
                  { icon: <Users className="text-blue-600" />, title: "Client-Focused", desc: "Your success is our primary metric." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-yellow-50 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center h-full min-h-[300px]">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Dedicated to Your Success</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every project we take on is an opportunity to build something exceptional. We focus on quality, attention to detail, and creating digital experiences that resonate with your audience.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Code i2L</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We are a passionate team of developers, designers, and marketers dedicated to transforming your vision into impactful digital products. 
            </p>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 inline-block">
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Our Mission</p>
              <p className="text-2xl font-serif italic text-slate-800">"Turning ideas into real digital solutions."</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
              <p className="text-slate-400 text-lg mb-12">Ready to take your business to the next level? Get in touch with us today to discuss your project.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email Us</p>
                    <a href="mailto:codei2l1710@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors">codei2l1710@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Call or WhatsApp</p>
                    <a href="tel:+919347325305" className="text-lg font-medium hover:text-blue-400 transition-colors">+91 9347325305</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Location</p>
                    <p className="text-lg font-medium">Global Digital Agency</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <form className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10" onSubmit={handleWhatsAppSubmit}>
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-slate-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      pattern="[0-9\-\+\s]+"
                      title="Please enter a valid phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-slate-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-slate-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-slate-500 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center justify-center gap-2 mt-4">
                    Send via WhatsApp <Send size={18} />
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-center px-6">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let’s Build Your Digital Presence Today 🚀</h2>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
          >
            <MessageCircle size={24} className="text-[#25D366]" />
            Chat on WhatsApp
          </a>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                  <Code2 size={18} />
                </div>
                <span className="font-bold text-xl text-white">Code i2L</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Turning ideas into real digital solutions. We help businesses grow by building powerful online presences.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                {[1, 2, 3, 4].map((i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                    <span className="sr-only">Social {i}</span>
                    <div className="w-4 h-4 rounded-sm bg-current" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => scrollTo(link.id)} className="text-slate-400 hover:text-blue-400 transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-slate-400">
                <li>codei2l1710@gmail.com</li>
                <li>+91 9347325305</li>
                <li>Global Digital Agency</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Code i2L. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl hover:shadow-[#25D366]/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
