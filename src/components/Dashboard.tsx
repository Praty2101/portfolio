import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const skills = [
    { name: 'Machine Learning', level: 95, color: '#3b82f6' },
    { name: 'Deep Learning', level: 95, color: '#8b5cf6' },
    { name: 'Computer Vision', level: 97, color: '#ec4899' },
    { name: 'NLP', level: 94, color: '#10b981' }
  ];
  
  const metrics = [
    { name: 'Papers Published', value: 1, icon: '📄', maxValue: 5 },
    { name: 'Projects Completed', value: 3, icon: '🚀', maxValue: 10 },
    { name: 'Years Experience', value: 2, icon: '⏱️', maxValue: 10 },
    { name: 'Certifications', value: 8, icon: '🏆', maxValue: 20 }
  ];

  return (
    <section id="dashboard" className="py-20 bg-[#0a0a0b] overflow-hidden">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Skills Dashboard</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            An interactive visualization of my technical expertise and achievements
            designed in the style of a luxury vehicle dashboard.
          </p>
        </motion.div>
        
        <div className="dashboard-container relative mx-auto max-w-5xl">
          {/* Dashboard Background */}
          <div className="dashboard-bg rounded-3xl overflow-hidden p-1">
            <div className="inner-dashboard bg-gradient-to-b from-[#111] to-[#0a0a0b] border border-[#222] rounded-3xl p-6 md:p-10">
              
              {/* Top Row - Digital Display */}
              <div className="digital-display bg-[#0d0d0e] border border-[#1a1a1c] rounded-xl p-4 mb-8 flex items-center justify-between">
                <div className="digital-time font-mono text-blue-400">
                  <div className="text-xs uppercase tracking-widest mb-1 text-gray-500">System Status</div>
                  <div className="text-lg md:text-xl font-bold">OPTIMIZED</div>
                </div>
                <div className="digital-stats grid grid-cols-2 gap-x-6 gap-y-2">
                  <div className="stat-item">
                    <div className="text-xs text-gray-500">Performance</div>
                    <div className="text-sm md:text-base text-blue-400 font-medium">95%</div>
                  </div>
                  <div className="stat-item">
                    <div className="text-xs text-gray-500">Efficiency</div>
                    <div className="text-sm md:text-base text-green-400 font-medium">92%</div>
                  </div>
                  <div className="stat-item">
                    <div className="text-xs text-gray-500">Learning Rate</div>
                    <div className="text-sm md:text-base text-purple-400 font-medium">0.001</div>
                  </div>
                  <div className="stat-item">
                    <div className="text-xs text-gray-500">Precision</div>
                    <div className="text-sm md:text-base text-pink-400 font-medium">97%</div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="text-xs uppercase tracking-widest mb-1 text-gray-500">Model Status</div>
                  <div className="text-lg font-bold text-green-400">ACTIVE</div>
                </div>
              </div>
              
              {/* Middle Row - Speedometers */}
              <div className="speedometers-container mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="speedometer-card bg-[#0d0d0e] border border-[#1a1a1c] rounded-xl p-4 flex flex-col items-center">
                      <div className="speedometer-title text-xs text-center mb-2 text-gray-400">{skill.name}</div>
                      <div className="speedometer relative w-24 h-24">
                        {/* Background Circle */}
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="45" 
                            fill="none" 
                            stroke="#1a1a1c" 
                            strokeWidth="8" 
                            strokeDasharray="283" 
                            strokeDashoffset="0"
                            strokeLinecap="round"
                          />
                          {/* Progress Circle */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="45" 
                            fill="none" 
                            stroke={skill.color} 
                            strokeWidth="8" 
                            strokeDasharray="283" 
                            strokeDashoffset={animated ? 283 - (283 * skill.level / 100) : "283"}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold" style={{color: skill.color}}>{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Row - Metrics Display */}
              <div className="metrics-display grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="metric-card bg-[#0d0d0e] border border-[#1a1a1c] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-400">{metric.name}</div>
                      <div className="text-lg">{metric.icon}</div>
                    </div>
                    <div className="metric-value-container">
                      <div className="text-2xl font-mono font-bold mb-2 gradient-text">
                        {animated ? metric.value : 0}
                      </div>
                      <div className="h-1.5 bg-[#1a1a1c] rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000 ease-out"
                          style={{
                            width: animated ? `${(metric.value / metric.maxValue) * 100}%` : '0%',
                            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dashboard Glow Effects */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
