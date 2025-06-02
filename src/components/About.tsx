import { motion } from 'framer-motion';
import { Code, BookOpen, Users, Award, FileText, GraduationCap } from 'lucide-react';
import Dashboard from './Dashboard';

export default function About() {
  const sections = [
    {
      image: "/img/c3b350f0-8e3d-46a9-b067-f337ca7360e1.jpg",
      text: (
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-4">Hi, I’m Pratyay!</h3>
          <p className="text-gray-300">
            I’m an AI/ML enthusiast, researcher, and all-around tech geek who’s deeply passionate about using artificial intelligence to solve real-world problems. I’m currently juggling my B.Tech in Computer Science (IoT, CS & BT) from UEM Kolkata and a B.S. in Data Science from IIT Madras — yeah, life gets busy, but I love the challenge!
          </p>
        </div>
      ),
    },
    {
      image: "/img/1c84aeed-ac75-4faa-918d-7cb00ed61eda.jpg",
      text: (
        <div className="text-right">
          <h3 className="text-2xl font-bold mb-4">Building Smart, Scalable Solutions</h3>
          <p className="text-gray-300">
            I’ve always been curious about how things work, and that curiosity eventually led me to AI and machine learning. From developing drug prediction models with real patient data to building crab-walking basketball robots for ROBOCON, I genuinely enjoy bringing complex ideas to life with smart, scalable solutions.
          </p>
        </div>
      ),
    },
    {
      image: "/img/5a642538-cfb6-4532-a278-8e1383320240.jpg",
      text: (
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-4">Collaborating, Mentoring & Growing</h3>
          <p className="text-gray-300">
            I’m also big on community. I love mentoring others in AI and robotics, leading teams, and organizing hackathons that bring people together to create cool stuff. I'm constantly learning on HackerRank, LeetCode, and CodeChef and love collaborating to build things that matter.
          </p>
        </div>
      ),
    },
    {
      image: "/img/d48e360b-3fcf-4057-a029-4c64a77475c6.jpg",
      text: (
        <div className="text-right">
          <h3 className="text-2xl font-bold mb-4">Communication Meets Innovation</h3>
          <p className="text-gray-300">
            Outside the world of code and research, I’m a strong communicator with a love for public speaking and debates — even an active Model UN delegate! I believe tech should be ethical, inclusive, and empowering for all. If you want to talk AI, robotics, or just geek out over cool ideas, let's connect!
          </p>
        </div>
      ),
    },
  ];

  const skills = [
    {
      title: 'Machine Learning',
      description: 'Expert in supervised, unsupervised, and reinforcement learning algorithms and frameworks.',
      icon: <Code size={24} />
    },
    {
      title: 'Deep Learning',
      description: 'Specialized in CNN, RNN, and Transformer architectures for complex pattern recognition tasks.',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Natural Language Processing',
      description: 'Building models that understand, interpret, and generate human language with semantic accuracy.',
      icon: <Users size={24} />
    },
    {
      title: 'Computer Vision',
      description: 'Developing systems that can identify, process, and analyze visual data from the real world.',
      icon: <Award size={24} />
    },
    {
      title: 'Predictive Analytics',
      description: 'Leveraging statistical techniques and machine learning to forecast future outcomes.',
      icon: <FileText size={24} />
    },
    {
      title: 'Data Visualization',
      description: 'Creating intuitive visual representations of complex data to derive actionable insights.',
      icon: <GraduationCap size={24} />
    }
  ];

  const experience = [
    {
      title: 'Research Assistant and Analyst',
      company: 'UEM Kolkata',
      period: 'Aug 2024 - Apr 2025',
      description:
        'Led AI-based research in biotechnology, developing a deep learning simulation model that enhanced result accuracy. Designed high-response surveys (96%) and collaborated with cross-disciplinary teams to validate findings and streamline analysis workflows.'
    },
    {
      title: 'Intern',
      company: 'Serveque',
      period: 'Mar 2023 - Aug 2023',
      description:
        'Contributed remotely to high-impact projects, assisting with backend development, debugging, and testing. Created technical documentation and proactively learned new tools to improve project efficiency and quality.'
    },
    {
      title: 'Robotic Engineer (Team Lead)',
      company: 'DD Robocon 2025',
      period: 'Jan 2025 - Feb 2025',
      description:
        'Led the robotics team for ABU Robocon Stag-1 qualifiers, designing a 4-wheeled omni-drive system with crab movement. Managed team tasks, integrated hardware with control algorithms, and delivered a precise, functional robot under tight deadlines.'
    }
  ];

  const education = [
    {
      degree: 'B.Tech. in Computer Science and Engineering (IoT, CS & BT)',
      institution: 'UEM, Kolkata',
      period: 'Present',
      description: 'Currently pursuing with a GPA of 8.76/10. Involved in AI research and mentoring roles.'
    },
    {
      degree: 'B.S. in Data Science',
      institution: 'IIT Madras',
      period: 'Present',
      description: 'Pursuing with a GPA of 7.01/10. Focus on data science and analytics.'
    },
    {
      degree: 'Senior Secondary (ISC)',
      institution: 'Delhi Public School Newtown',
      period: '2020 - 2022',
      description: 'Graduated with 91% in the ISC board examinations.'
    },
    {
      degree: 'Secondary (ICSE)',
      institution: 'Delhi Public School Newtown',
      period: '2018 - 2020',
      description: 'Graduated with 93% in the ICSE board examinations.'
    }
  ];


  return (
    <section id="about" className="py-20">
      <div className="content-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="space-y-20 mt-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="flex justify-end">
                    <div className="w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#1e1e20]">
                      <img
                        src={section.image}
                        alt={`Section ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>{section.text}</div>
                </>
              ) : (
                <>
                  <div>{section.text}</div>
                  <div className="flex justify-start">
                    <div className="w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#1e1e20]">
                      <img
                        src={section.image}
                        alt={`Section ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 mt-28"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-['Instrument_Sans']">Technical Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My core competencies across various domains of artificial intelligence and data science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-blue-600 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <FileText className="mr-4 text-blue-600 dark:text-blue-400" size={24} />
              <h2 className="text-2xl font-bold font-['Instrument_Sans']">Work Experience</h2>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{item.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{item.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="mr-4 text-blue-600 dark:text-blue-400" size={24} />
              <h2 className="text-2xl font-bold font-['Instrument_Sans']">Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <h3 className="font-semibold text-lg">{item.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{item.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{item.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

       {/* Injecting the Dashboard section directly below */}
        <div id="dashboard" className="mt-28">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
