import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f0f10] via-[#0f0f10]/80 to-[#0f0f10] opacity-90 z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/20 to-purple-500/10 blur-[120px] rounded-full z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/20 to-blue-500/10 blur-[120px] rounded-full z-0"></div>
      </div>
      
      <div className="content-container z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 text-xs font-medium bg-white/10 rounded-full mb-4">
            AI/ML Researcher & Developer
          </span>
        </motion.div>
        
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming Ideas into <br />
            <span className="gradient-text">Intelligent Solutions</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specializing in advanced artificial intelligence and machine learning research, with a strong focus on developing innovative, data-driven solutions to tackle real-world challenges across diverse domains.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#portfolio" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
