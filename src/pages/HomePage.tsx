import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Compass, Layers, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const CharacterAnimation = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  return (
    <div className="overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
      {/* Hero Section with Parallax */}
      <section ref={targetRef} className="relative h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
          <img
            alt="Hero Architectural Render"
            className="w-full h-full object-cover scale-110"
            src="/images/hiwaga-hero.jpg"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-10">
          <div className="max-w-4xl space-y-10">
            {/* Removed Redundant "Studio of Architecture" Text */}

            <div className="space-y-4">
              <CharacterAnimation
                text="Defining the"
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter text-white leading-none"
                delay={0.2}
              />
              <CharacterAnimation
                text="Future Cityscape."
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold italic tracking-tighter text-primary leading-none"
                delay={0.8}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.2 }}
              style={{ opacity }}
              className="text-lg md:text-xl text-slate-300 font-light tracking-wide max-w-2xl leading-relaxed"
            >
              We merge structural logic with poetic design to create spaces that breathe, inspire, and endure for generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 pt-10"
            >
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/portfolio')}
                className="bg-primary text-surfaceDark px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3 group rounded-sm shadow-2xl"
              >
                Explore Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, borderColor: "#C1A96C" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
                className="glass text-white px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase transition-all rounded-sm border border-white/10 text-center"
              >
                Inquire now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Immersive Scroll */}
      <section className="py-32 lg:py-48 content-auto relative">
        <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[25vw] md:text-[15vw] font-serif font-black leading-none uppercase">Edge</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div {...fadeIn} className="lg:col-span-12 mb-20">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black dark:text-white leading-tight">
                Architectural Curation. <br className="hidden md:block" />
                <span className="italic text-primary/80">Human Environments.</span>
              </h2>
            </motion.div>

            <motion.div {...fadeIn} className="lg:col-span-5 relative">
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm group grayscale hover:grayscale-0 transition-all duration-1000">
                <img
                  alt="Design Philosophy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="/images/014.jpg.jpeg"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 -z-10 animate-float"></div>
            </motion.div>

            <motion.div {...stagger} className="lg:col-span-7 space-y-12 pl-0 lg:pl-16">
              <div className="space-y-6">
                <p className="text-slate-500 dark:text-slate-300 text-xl font-light leading-relaxed">
                  Every line drawn must serve a purpose—both functional and emotional. We don't just build structures; we curate the backdrop of your most meaningful moments.
                </p>
                <div className="w-24 h-1 bg-primary"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  { icon: <Compass />, title: "Precision", text: "Micro-detailed planning from foundation to finish." },
                  { icon: <Layers />, title: "Materiality", text: "Sourcing unique textures that tell a story." },
                  { icon: <PenTool />, title: "Bespoke", text: "Tailored designs that reflect your identity." },
                  { icon: <ShieldCheck />, title: "Reliability", text: "Timeline-driven execution without compromises." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="group">
                    <div className="text-primary mb-4 w-10 h-10 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-lg font-bold mb-2 dark:text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Marquee */}
      <section className="bg-surfaceDark py-16 overflow-hidden relative border-y border-white/5">
        <div className="animate-marquee hover:pause whitespace-nowrap flex items-center gap-32">
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex items-center gap-32">
              <span className="text-3xl md:text-5xl font-serif font-black text-white/5 tracking-tighter uppercase italic">Continental Edge Studio</span>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Est 2024</span>
                <div className="w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Rajahmundry</span>
              </div>
              <span className="text-3xl md:text-5xl font-serif font-black text-white/5 tracking-tighter uppercase leading-none">Visionary Design</span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 lg:py-48 bg-studio-dark text-white content-auto overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">What we do</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black">Crafting the Impossible.</h2>
            </div>
            <p className="text-slate-400 max-w-sm font-light leading-relaxed border-l border-primary/30 pl-8">
              A holistic approach to architecture, interior curation, and master planning, executed with surgical precision.
            </p>
          </div>

          <motion.div {...stagger} className="grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              {
                title: "Architectural Planning",
                desc: "Strategic blueprints that harmonize structural integrity with aesthetic vision.",
                icon: <Compass className="w-10 h-10" />,
                details: ["BIM Modeling", "Blueprints", "Structural Analysis"],
                img: "/images/12.jpg.jpeg"
              },
              {
                title: "Interior Curation",
                desc: "Immersive interior environments tailored to modern lifestyle and comfort.",
                icon: <Zap className="w-10 h-10" />,
                details: ["3D Rendering", "Bespoke Carpentry", "Lighting Design"],
                img: "/images/salon-interior.jpg"
              },
              {
                title: "Execution & Turnkey",
                desc: "Seamless project realization from breaking ground to the final handover.",
                icon: <ShieldCheck className="w-10 h-10" />,
                details: ["Project Oversight", "Material Sourcing", "Landscaping"],
                img: "/images/19.jpg.jpeg"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="p-16 bg-studio-dark transition-all duration-700 group relative overflow-hidden min-h-[500px] flex flex-col justify-end touch-none"
              >
                {/* Mobile Friendly Image Reveal */}
                <div className="absolute inset-0 opacity-20 lg:opacity-0 group-hover:opacity-40 transition-all duration-1000 scale-110 group-hover:scale-100 grayscale md:grayscale group-hover:grayscale-0">
                  <img src={service.img} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-dark via-studio-dark/60 to-transparent"></div>
                </div>

                <div className="relative z-10 pointer-events-none">
                  <div className="mb-10 text-primary group-hover:scale-110 transition-transform duration-700 transform-gpu">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 text-base group-hover:text-white transition-colors">{service.desc}</p>

                  <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {service.details.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-primary font-bold">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-700">
                  <span className="text-7xl font-serif">0{i + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-48 relative overflow-hidden bg-studio-dark content-auto">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-20"
        >
          <img src="/images/hiwaga-hero.jpg" className="w-full h-full object-cover grayscale" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-studio-dark via-transparent to-studio-dark"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="space-y-6">
            <span className="text-primary font-bold tracking-[0.6em] uppercase text-xs">Let's talk about your project</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[0.9] tracking-tighter">
              Create The <br />
              <span className="italic text-primary/80">Extraordinary.</span>
            </h2>
          </motion.div>

          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="flex flex-col items-center gap-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(193, 169, 108, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-white hover:text-surfaceDark text-surfaceDark px-20 py-6 text-sm font-black tracking-[0.4em] uppercase transition-all rounded-sm shadow-2xl relative group overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
