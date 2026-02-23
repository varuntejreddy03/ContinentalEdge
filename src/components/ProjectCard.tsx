import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    className?: string;
  };
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden group portfolio-hover rounded-sm optimize-gpu ${project.className} ${!isLoaded ? 'skeleton min-h-[300px]' : ''}`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {isLoaded && (
        <div className="absolute inset-0 bg-black/60 opacity-0 overlay transition-opacity duration-300 flex flex-col justify-end p-8">
          <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{project.category}</span>
          <h3 className="text-white text-2xl font-serif font-bold leading-tight">{project.title}</h3>
        </div>
      )}

      {/* Subtle border for better definition in dark mode */}
      <div className="absolute inset-0 pointer-events-none border border-white/5"></div>
    </motion.div>
  );
};

export default ProjectCard;
