import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Compass, Layers, PenTool, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const CharacterAnimation = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
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
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }
    }
  };

  const stagger: Variants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
      {/* Hero Section with Parallax */}
      <section ref={targetRef} className="relative h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110"
            src="/images/elevation design @ ubalanka video 1.mp4"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full pt-10">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-4">
              <CharacterAnimation
                text="Defining the"
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tighter text-white leading-none uppercase"
                delay={0.2}
              />
              <CharacterAnimation
                text="Future Cityscape."
                className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold italic tracking-tighter text-primary leading-none"
                delay={0.8}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.2 }}
              style={{ opacity }}
              className="text-base md:text-lg text-slate-300 font-light tracking-wide max-w-2xl leading-relaxed"
            >
              At Sandeep Associates, we merge structural logic with poetic design to create spaces that breathe, inspire, and endure for generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-10"
            >
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/portfolio')}
                className="bg-primary text-surfaceDark px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3 rounded-sm shadow-2xl"
              >
                Explore Portfolio
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, borderColor: "#C1A96C" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
                className="glass text-white px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all rounded-sm border border-white/10 text-center"
              >
                Inquire now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Immersive Scroll */}
      <section className="py-24 lg:py-32 content-auto relative">
        <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[20vw] md:text-[12vw] font-serif font-black leading-none uppercase">Pure</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="lg:col-span-12 mb-12">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black dark:text-white leading-tight">
                Architectural Curation. <br className="hidden md:block" />
                <span className="italic text-primary/80">Human Environments.</span>
              </h2>
            </motion.div>

            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="lg:col-span-5 relative">
              <div className="relative z-10 aspect-square md:aspect-[3/4] overflow-hidden rounded-sm group grayscale hover:grayscale-0 transition-all duration-1000 mx-4 md:mx-0">
                <img
                  alt="Design Philosophy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="/images/AKSHARA_THEATRE main.jpeg"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 -z-10 animate-float"></div>
            </motion.div>

            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger} className="lg:col-span-7 space-y-12 pl-0 lg:pl-16">
              <div className="space-y-6">
                <p className="text-slate-500 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                  Every line drawn must serve a purpose—both functional and emotional. We don't just build structures; we curate the backdrop of your most meaningful moments.
                </p>
                <div className="w-20 h-0.5 bg-primary"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
                {[
                  { icon: <Compass />, title: "Precision", text: "Micro-detailed planning from foundation to finish." },
                  { icon: <Layers />, title: "Materiality", text: "Sourcing unique textures that tell a story." },
                  { icon: <PenTool />, title: "Bespoke", text: "Tailored designs that reflect your identity." },
                  { icon: <ShieldCheck />, title: "Reliability", text: "Timeline-driven execution without compromises." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="group">
                    <div className="text-primary mb-4 w-9 h-9 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-base font-bold mb-2 dark:text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Marquee */}
      <section className="bg-surfaceDark py-12 md:py-16 overflow-hidden relative border-y border-white/5">
        <div className="animate-marquee hover:pause whitespace-nowrap flex items-center gap-16 md:gap-32">
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex items-center gap-16 md:gap-32">
              <span className="text-xl md:text-4xl font-serif font-black text-white/5 tracking-tighter uppercase italic whitespace-nowrap text-stroke-sm">Sandeep Associates</span>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary">Est 2024</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 md:py-32 lg:py-48 bg-white dark:bg-studio-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">What we do</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black">Crafting the Impossible.</h2>
            </div>
            <p className="text-slate-400 max-w-sm font-light leading-relaxed border-l border-primary/30 pl-8 text-sm md:text-base">
              A holistic approach to architecture, interior curation, and master planning, executed with surgical precision.
            </p>
          </div>

          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              {
                title: "Architectural Planning",
                desc: "Strategic blueprints that harmonize structural integrity with aesthetic vision.",
                icon: <Compass className="w-9 h-9 md:w-10 h-10" />,
                details: ["BIM Modeling", "Blueprints", "Structural Analysis"],
                img: "/images/dr. gowtham reddy flat main.jpeg"
              },
              {
                title: "Interior Curation",
                desc: "Immersive interior environments tailored to modern lifestyle and comfort.",
                icon: <Zap className="w-9 h-9 md:w-10 h-10" />,
                details: ["3D Rendering", "Bespoke Carpentry", "Lighting Design"],
                img: "/images/drivein ph-ravulapem main.jpeg"
              },
              {
                title: "Execution & Turnkey",
                desc: "Seamless project realization from breaking ground to the final handover.",
                icon: <ShieldCheck className="w-9 h-9 md:w-10 h-10" />,
                details: ["Project Oversight", "Material Sourcing", "Landscaping"],
                img: "/images/elevation design .jpeg"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="p-8 md:p-14 bg-studio-dark transition-all duration-700 group relative overflow-hidden min-h-[350px] md:min-h-[500px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 opacity-20 lg:opacity-0 group-hover:opacity-40 transition-all duration-1000 scale-110 group-hover:scale-100 grayscale md:grayscale group-hover:grayscale-0">
                  <img src={service.img} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-dark via-studio-dark/60 to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 md:mb-10 text-primary group-hover:scale-110 transition-transform duration-700 transform-gpu">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base group-hover:text-white transition-colors">{service.desc}</p>

                  <ul className="space-y-2 md:space-y-3 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-0 lg:translate-y-4 group-hover:translate-y-0">
                    {service.details.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] uppercase tracking-widest text-primary font-bold">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-20 transition-all duration-700">
                  <span className="text-5xl md:text-7xl font-serif">0{i + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section - New Added Layer */}
      <section className="py-24 lg:py-48 bg-surfaceLight dark:bg-surfaceDark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-12 mb-10 text-center md:text-left">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">The Methodology</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black dark:text-white leading-tight">
                Our Four-Phase <br className="hidden md:block" />
                <span className="italic text-primary/80">Design Integrity.</span>
              </h2>
            </motion.div>

            {[
              {
                step: "01",
                title: "Concept Discovery",
                desc: "We dive into your vision, lifestyle, and site context to define the core DNA of the project.",
                points: ["Client Briefing", "Site Analysis", "Initial Sketches"]
              },
              {
                step: "02",
                title: "Surgical Design",
                desc: "Translating concepts into technical blueprints with structural logic and artistic expression.",
                points: ["3D Visualization", "Material Boards", "Technical Systems"]
              },
              {
                step: "03",
                title: "Active Creation",
                desc: "Executing the vision with curated materials and precision-led engineering oversight.",
                points: ["Project Management", "Vendor Coordination", "Quality Control"]
              },
              {
                step: "04",
                title: "Final Curation",
                desc: "The transition from structure to space. Every detail polished for immediate inspiration.",
                points: ["Interiors Fit-out", "Lighting Tuning", "Project Handover"]
              }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={fadeIn}
                className="lg:col-span-3 space-y-8 group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl md:text-5xl font-serif font-black text-primary/20 group-hover:text-primary transition-colors duration-500">{phase.step}</span>
                  <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold dark:text-white uppercase tracking-wider">{phase.title}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{phase.desc}</p>
                </div>
                <ul className="space-y-2 pt-4">
                  {phase.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary/70 transition-colors">
                      <CheckCircle2 size={12} className="text-primary/30" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating background decorative number */}
        <div className="absolute bottom-0 left-0 p-10 md:p-20 opacity-[0.02] pointer-events-none select-none overflow-hidden">
          <h2 className="text-[30vw] font-serif font-black leading-none uppercase -ml-20">Process</h2>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 opacity-20"
          >
            <img src="/images/elevation design @ ubalanka 3.jpeg" className="w-full h-full object-cover grayscale" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-studio-dark via-transparent to-studio-dark"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
              <span className="text-primary font-bold tracking-[0.6em] uppercase text-xs">Let's talk about your project</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-[0.9] tracking-tighter uppercase">
                Create The <br />
                <span className="italic text-primary/80">Extraordinary.</span>
              </h2>
            </motion.div>

            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center gap-10">
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
        </div>
      </section>
    </div>
  );
};

export default HomePage;
