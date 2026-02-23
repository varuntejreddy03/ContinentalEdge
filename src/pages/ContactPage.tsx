import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, ArrowRight, MessageCircle, Clock, ArrowLeft } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }
  };

  const contactData = [
    {
      icon: <MapPin className="text-primary w-6 h-6" />,
      title: "Design Studio",
      content: "D.No: 46-2-4, 1st Floor, Near Ramakrishna Theatre, Danavaipeta, Rajamahendravaram - 533103, AP",
      action: "Get Directions",
      href: "https://maps.google.com"
    },
    {
      icon: <Phone className="text-primary w-6 h-6" />,
      title: "Direct Connect",
      content: "+91 81216 66611",
      action: "Call Now",
      href: "tel:+918121666611"
    },
    {
      icon: <MessageCircle className="text-primary w-6 h-6" />,
      title: "WhatsApp",
      content: "+91 81216 66611",
      action: "Start Chat",
      href: "https://wa.me/918121666611"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-surfaceLight dark:bg-surfaceDark min-h-screen overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.03] pointer-events-none select-none -z-0">
        <h2 className="text-[25vw] md:text-[20vw] font-serif font-black leading-none uppercase">Talk</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Content & Connect Cards */}
          <motion.div initial={fadeIn.initial} animate={fadeIn.whileInView} transition={fadeIn.transition} className="lg:col-span-12 xl:col-span-5 space-y-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Concierge</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-serif font-black dark:text-white leading-[1.1] md:leading-[0.9] tracking-tighter">
                Let's Build the <br className="hidden md:block" /> <span className="text-stroke italic text-white/90">Impossible.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-md font-light leading-relaxed">
                Whether it's a structural masterpiece or a refined interior, Sandeep Associates is ready to bring your vision to life with surgical precision.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactData.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, borderColor: '#C1A96C' }}
                  className="glass p-8 rounded-sm border border-slate-200 dark:border-white/5 group transition-all duration-500"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-2">{item.title}</h4>
                  <p className="text-sm dark:text-white font-medium mb-4 line-clamp-2">{item.content}</p>
                  <span className="text-[10px] uppercase font-bold text-primary tracking-widest flex items-center gap-2">
                    {item.action} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Clock className="text-primary w-5 h-5" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Mon - Sat: 10:00 AM — 08:30 PM
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 50, y: typeof window !== 'undefined' && window.innerWidth < 1024 ? 30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="bg-white dark:bg-studio-dark p-6 md:p-16 shadow-2xl rounded-sm border border-slate-100 dark:border-white/5 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -z-0 rounded-bl-full"></div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[500px] flex flex-col items-center justify-center text-center space-y-8 py-10"
                >
                  <div className="w-24 h-24 bg-primary/10 flex items-center justify-center rounded-full">
                    <Send className="text-primary w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-black dark:text-white uppercase tracking-tight">Transmission Received</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Our architectural team has received your inquiry. Expect a response within 24 hours.</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-3 border-b border-primary/30 pb-2"
                  >
                    Send Another message <ArrowRight size={14} />
                  </motion.button>
                </motion.div>
              ) : (
                <div className="relative z-10">
                  <div className="mb-12 space-y-2">
                    <h2 className="text-3xl font-serif font-black dark:text-white uppercase tracking-tight">Project Inquiry</h2>
                    <p className="text-slate-400 text-sm font-light">Tell us about your architectural vision.</p>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 group">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold group-focus-within:text-primary transition-colors">Client Name</label>
                      <input required className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-white/10 focus:ring-0 focus:border-primary px-0 py-4 text-sm placeholder:text-slate-300 dark:text-white transition-all font-light" placeholder="e.g. Varun Tej" type="text" />
                    </div>

                    <div className="flex flex-col gap-3 group">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold group-focus-within:text-primary transition-colors">Contact Number</label>
                      <input required className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-white/10 focus:ring-0 focus:border-primary px-0 py-4 text-sm placeholder:text-slate-300 dark:text-white transition-all font-light" placeholder="+91 81216 66611" type="tel" />
                    </div>

                    <div className="flex flex-col gap-3 group md:col-span-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold group-focus-within:text-primary transition-colors">Email Address</label>
                      <input required className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-white/10 focus:ring-0 focus:border-primary px-0 py-4 text-sm placeholder:text-slate-300 dark:text-white transition-all font-light" placeholder="your@email.com" type="email" />
                    </div>

                    <div className="flex flex-col gap-3 group md:col-span-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold group-focus-within:text-primary transition-colors">Scope of service</label>
                      <select required className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-white/10 focus:ring-0 focus:border-primary px-0 py-4 text-sm text-slate-400 dark:text-white transition-all cursor-pointer appearance-none">
                        <option disabled value="" className="bg-surfaceLight dark:bg-studio-dark text-slate-900 dark:text-white">Select from our expertise</option>
                        <option value="residential" className="bg-surfaceLight dark:bg-studio-dark text-slate-900 dark:text-white">Architectural Planning</option>
                        <option value="commercial" className="bg-surfaceLight dark:bg-studio-dark text-slate-900 dark:text-white">Interior Curation</option>
                        <option value="interior" className="bg-surfaceLight dark:bg-studio-dark text-slate-900 dark:text-white">Turnkey Execution</option>
                        <option value="consultation" className="bg-surfaceLight dark:bg-studio-dark text-slate-900 dark:text-white">Design Consultation</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-3 group md:col-span-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold group-focus-within:text-primary transition-colors">Message Context</label>
                      <textarea required className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-white/10 focus:ring-0 focus:border-primary px-0 py-4 text-sm placeholder:text-slate-300 dark:text-white transition-all font-light resize-none" placeholder="Describe the scale and vision of your project..." rows={3}></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="md:col-span-2 mt-8 bg-primary hover:bg-white hover:text-studioDark text-surfaceDark font-black py-6 px-8 uppercase tracking-[0.4em] text-[10px] transition-all duration-500 flex items-center justify-center gap-4 group rounded-sm shadow-2xl"
                      type="submit"
                    >
                      Transmit Request
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
