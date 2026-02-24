import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const ProjectSection = ({ work, index, navigate }: { work: any; index: number; navigate: any }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Reduced parallax distance for better performance
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]); // Subtle scale for smoothness

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className={`relative grid lg:grid-cols-12 gap-6 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
    >
      <motion.div
        style={{ y }}
        className={`absolute top-0 ${index % 2 !== 0 ? 'right-0' : 'left-0'} opacity-[0.03] pointer-events-none select-none -z-10`}
      >
        <span className="text-[20vw] font-serif font-black leading-none">0{index + 1}</span>
      </motion.div>

      <div className={`lg:col-span-7 relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
        <motion.div
          style={{ scale }}
          className="aspect-video md:aspect-[16/10] overflow-hidden rounded-sm bg-slate-100 dark:bg-white/5 relative optimize-gpu mx-2 md:mx-0"
        >
          <motion.img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>

          {/* Internal image labels for aesthetic */}
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-white/10 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
              Captured 2024
            </span>
          </div>
        </motion.div>

        {/* Gallery Preview Overlay */}
        <div className="flex lg:absolute lg:-bottom-10 lg:right-10 gap-3 mt-6 lg:mt-0 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 px-2 lg:px-0 no-scrollbar snap-x group/gallery">
          {work.images.map((img: string, i: number) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="w-16 h-16 sm:w-36 sm:h-36 shrink-0 rounded-sm overflow-hidden border lg:border-4 border-white dark:border-surfaceDark shadow-lg lg:shadow-2xl snap-center relative"
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-black/10 group-hover/gallery:bg-transparent transition-all"></div>
            </motion.div>
          ))}
          {/* Mobile indicator for more photos */}
          <div className="lg:hidden shrink-0 w-8 h-28 flex items-center justify-center">
            <div className="w-1 h-8 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className={`lg:col-span-5 space-y-6 md:space-y-10 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-primary">
              <span className="text-[9px] font-black uppercase tracking-[0.4em]">{work.category}</span>
              <div className="h-[1px] w-8 bg-primary/30"></div>
            </div>
            <h2 className="text-2xl md:text-5xl font-serif font-black dark:text-white uppercase tracking-tighter leading-none">
              {work.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-primary" />
              <span className="text-[9px] uppercase font-bold tracking-widest">{work.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={12} className="text-primary" />
              <span className="text-[9px] uppercase font-bold tracking-widest">{work.year || '2024'}</span>
            </div>
          </div>

          <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md text-xs md:text-base">
            {work.description || "A bespoke architectural statement that harmonizes structural logic with poetical design."}
          </p>
        </div>

        {/* Project Features */}
        <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-5 mb-2">
          <div>
            <span className="block text-[7px] font-black uppercase tracking-widest text-primary mb-1">Style</span>
            <span className="text-[10px] dark:text-white font-medium italic opacity-70">{work.style || 'Modern Minimalist'}</span>
          </div>
          <div>
            <span className="block text-[7px] font-black uppercase tracking-widest text-primary mb-1">Scope</span>
            <span className="text-[10px] dark:text-white font-medium italic opacity-70">{work.scope || 'Full Turnkey'}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ gap: '2rem' }}
          onClick={() => navigate('/portfolio')}
          className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-primary group cursor-pointer"
        >
          Explore Full Portfolio
          <ArrowLeft className="w-3 h-3 rotate-180" />
        </motion.button>
      </div>
    </motion.section>
  );
};

const OurWorksPage = () => {
  const navigate = useNavigate();

  const works = [
    {
      title: "Akshara Theatre",
      location: "Rajahmundry",
      category: "Commercial",
      year: "2024",
      style: "Acoustic Modernism",
      scope: "Architectural & Interiors",
      description: "A state-of-the-art cinematic destination that blends advanced acoustics with a luxury boutique aesthetic.",
      image: "/images/AKSHARA_THEATRE main.jpeg",
      images: [
        "/images/AKSHARA THEATRE2.jpeg",
        "/images/AKSHARA THEATRE3.jpeg",
        "/images/AKSHARA THEATRE4.jpeg",
        "/images/AKSHARA THEATRE5.jpeg"
      ]
    },
    {
      title: "Dr. Gowtham Reddy",
      location: "Luxury Residential",
      year: "2023",
      style: "Contemporary Chic",
      scope: "Bespoke Interiors",
      description: "A private high-end residence focused on open-plan living and premium material curation.",
      category: "Interior",
      image: "/images/dr. gowtham reddy flat main.jpeg",
      images: [
        "/images/dr. gowtham reddy flat outer area.jpeg",
        "/images/dr. gowtham reddy flat tv1.jpeg",
        "/images/dr. gowtham reddy flat tv 2.jpeg",
        "/images/dr. gowtham reddy flat1 dining.jpeg",
        "/images/dr. gowtham reddy flat3.jpeg"
      ]
    },
    {
      title: "Drive-in PH",
      location: "Ravulapalem",
      category: "Architectural",
      year: "2024",
      style: "Urban Landscape",
      scope: "Master Planning",
      description: "A strategic commercial hub designed for fluid movement and high visual impact.",
      image: "/images/drivein ph-ravulapem main.jpeg",
      images: [
        "/images/drivein ph-ravulapem.jpeg",
        "/images/drivein ph-ravulapem 2.jpeg",
        "/images/drivein ph-ravulapem 3.jpeg"
      ]
    },
    {
      title: "Ubalanka Elevation",
      location: "Modern Residential",
      category: "Architectural",
      year: "2024",
      style: "Tropical Modern",
      scope: "Facade Design",
      description: "An elegant facade study that explores the interplay of shadow, texture, and light.",
      image: "/images/elevation design .jpeg",
      images: [
        "/images/elevation design @ ubalanka 3.jpeg"
      ]
    },
    {
      title: "Royal Villa",
      location: "Ravulapalem",
      category: "Residential",
      year: "2023",
      style: "Neo-Classical Fusion",
      scope: "Full Architecture",
      description: "A sprawling villa project that masterfully integrates traditional luxury with modern structural logic.",
      image: "/images/villa @ ravulapalem.jpeg",
      images: [
        "/images/villa @ ravulapalem2.jpeg",
        "/images/villa @ ravulapalem3.jpeg"
      ]
    }
  ];

  return (
    <div className="bg-surfaceLight dark:bg-surfaceDark min-h-screen pb-32">
      {/* Immersive Hero Header */}
      <div className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/AKSHARA_THEATRE main.jpeg"
            className="w-full h-full object-cover grayscale md:grayscale opacity-50 dark:opacity-40 transition-all duration-[3000ms]"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surfaceDark/80 via-transparent to-surfaceDark"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full relative z-10 text-center md:text-left pt-20">
          <header className="space-y-6 md:space-y-10 mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-primary font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase text-[9px] md:text-[10px] block">Our Legacy</span>
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-[8vw] font-serif font-black text-white tracking-tighter uppercase leading-[0.8] mb-4">
                Curating <br />
                <span className="italic text-primary">Destinations.</span>
              </h1>
              <div className="max-w-2xl mx-auto md:mx-0">
                <p className="text-slate-300 font-light text-sm md:text-xl leading-relaxed italic border-primary md:border-l-4 md:pl-10">
                  We translate complex requirements into elegant spatial solutions.
                </p>
              </div>
            </motion.div>
          </header>

          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-white hover:text-primary transition-all bg-white/5 backdrop-blur-md px-8 py-4 rounded-sm border border-white/10"
          >
            Return to Home
          </motion.button>
        </div>

        {/* Floating background scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-[1px] h-20 bg-primary"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 space-y-20 md:space-y-72 lg:space-y-96">
        {works.map((work, index) => (
          <ProjectSection key={index} work={work} index={index} navigate={navigate} />
        ))}
      </div>

      {/* Final Signature Section */}
      <section className="mt-48 lg:mt-96 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-studio-dark p-12 md:p-24 rounded-sm relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
            <img src="/images/elevation design @ ubalanka 3.jpeg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="relative z-10 text-center space-y-8">
            <span className="text-primary font-bold tracking-[0.6em] uppercase text-[10px]">Upcoming Project</span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tighter">Vision 2025: The Waterfront Villa</h2>
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary text-surfaceDark px-12 py-5 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white transition-colors"
            >
              Register Interest
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Signature */}
      <div className="fixed bottom-0 right-0 p-10 md:p-20 opacity-[0.01] pointer-events-none select-none">
        <h2 className="text-[25vw] font-serif font-black leading-none uppercase -mr-20">Architects</h2>
      </div>
    </div >
  );
};

export default OurWorksPage;
