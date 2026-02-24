import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Commercial', 'Interior', 'Architectural', 'Residential'];

  const projects = [
    { id: 1, title: "Grand Reception", category: "Commercial", image: "/images/hiwaga-reception.jpg", className: "masonry-item-wide" },
    { id: 2, title: "Modern Salon", category: "Commercial", image: "/images/salon-interior.jpg", className: "masonry-item-tall" },
    { id: 3, title: "Bespoke Workspace", category: "Commercial", image: "/images/014.jpg.jpeg", className: "" },
    { id: 4, title: "Minimalist Lounge", category: "Interior", image: "/images/08.jpg.jpeg", className: "masonry-item-square" },
    { id: 5, title: "Luxury Suite", category: "Interior", image: "/images/09.jpg.jpeg", className: "" },
    { id: 6, title: "Executive Office", category: "Commercial", image: "/images/10.jpg.jpeg", className: "masonry-item-wide" },
    { id: 7, title: "Classic Atrium", category: "Architectural", image: "/images/11.jpg.jpeg", className: "" },
    { id: 8, title: "Urban Living", category: "Residential", image: "/images/12.jpg.jpeg", className: "masonry-item-tall" },
    { id: 9, title: "Design Studio", category: "Commercial", image: "/images/13.jpg.jpeg", className: "" },
    { id: 10, title: "Aesthetic Corner", category: "Interior", image: "/images/15.jpg.jpeg", className: "masonry-item-square" },
    { id: 11, title: "The Atrium", category: "Architectural", image: "/images/19.jpg.jpeg", className: "masonry-item-wide" },
    { id: 12, title: "Zen Garden Space", category: "Interior", image: "/images/20.jpg.jpeg", className: "" },
    { id: 13, title: "Wash Station", category: "Interior", image: "/images/wash-station.jpg", className: "" },
    { id: 14, title: "Makeup Room", category: "Interior", image: "/images/makeup-room.jpg", className: "" },
    { id: 15, title: "Salon Main Area", category: "Commercial", image: "/images/hiwaga-salon-area.jpg", className: "masonry-item-wide" },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-surfaceLight dark:bg-surfaceDark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Portfolio</span>
              <h1 className="text-3xl md:text-6xl font-serif font-black dark:text-white leading-tight tracking-tight uppercase">Iconic Spaces.</h1>
              <p className="text-sm md:text-xl text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
                A curated selection of our most prestigious architectural and interior projects in Rajahmundry.
              </p>
            </div>

            {/* Filter Bar - Scrollable on mobile */}
            <div className="flex overflow-x-auto md:flex-wrap gap-3 pt-6 md:pt-8 pb-4 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-6 md:px-8 py-3 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 rounded-sm overflow-hidden group shrink-0 ${activeCategory === cat
                    ? 'text-surfaceDark'
                    : 'text-slate-500 dark:text-slate-400 hover:text-primary'
                    }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-primary z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200 dark:bg-white/10 group-hover:bg-primary/50 transition-colors"></div>
                </button>
              ))}
            </div>
          </motion.div>
        </header>

        <motion.div
          layout
          className="masonry-grid overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating background element for visual depth without performance cost */}
        <div className="fixed top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 pointer-events-none -z-10"></div>
      </div>
    </div>
  );
};

export default PortfolioPage;
