import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Neural Network Visualization",
      category: "deep-learning",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
      description: "Interactive visualization of neural network architecture and training process."
    },
    {
      id: 2,
      title: "Natural Language Understanding",
      category: "nlp",
      image: "https://images.unsplash.com/photo-1655720031554-a359632bc108?w=600&auto=format&fit=crop&q=80",
      description: "Advanced NLP model for context-aware language understanding and generation."
    },
    {
      id: 3,
      title: "Computer Vision Dataset",
      category: "computer-vision",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80",
      description: "Curated dataset for training robust computer vision models in diverse environments."
    },
    {
      id: 4,
      title: "Reinforcement Learning for Robotics",
      category: "research",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&auto=format&fit=crop&q=80",
      description: "Novel reinforcement learning approaches for robotic control systems."
    },
    {
      id: 5,
      title: "Time Series Forecasting",
      category: "deep-learning",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      description: "Deep learning models for accurate prediction of complex time series data."
    },
    {
      id: 6,
      title: "Healthcare AI Ethics",
      category: "research",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
      description: "Research on ethical considerations and frameworks for AI applications in healthcare."
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'deep-learning', name: 'Deep Learning' },
    { id: 'nlp', name: 'NLP' },
    { id: 'computer-vision', name: 'Computer Vision' },
    { id: 'research', name: 'Research' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="portfolio" className="py-20 bg-[#0a0a0b]">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my research projects and technical implementations in artificial intelligence 
            and machine learning.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium'
                  : 'bg-[#161618] hover:bg-[#1e1e20] text-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  View Details
                  <svg 
                    className="ml-1 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
