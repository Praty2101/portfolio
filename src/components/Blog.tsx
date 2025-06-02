import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Advancements in Transformer Architecture for NLP",
      excerpt: "Exploring recent improvements in transformer models and their impact on natural language processing tasks.",
      image: "https://images.unsplash.com/photo-1526378800651-c1a343297b17?w=600&auto=format&fit=crop&q=80",
      date: "May 12, 2023",
      category: "Natural Language Processing"
    },
    {
      id: 2,
      title: "Ethical Considerations in AI Development",
      excerpt: "Discussing the importance of ethical frameworks when developing and deploying artificial intelligence systems.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
      date: "April 3, 2023",
      category: "Ethics"
    },
    {
      id: 3,
      title: "Optimizing Deep Learning Models for Production",
      excerpt: "Techniques and best practices for preparing complex neural networks for deployment in production environments.",
      image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=600&auto=format&fit=crop&q=80",
      date: "March 18, 2023",
      category: "Deep Learning"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Latest Articles</h2>
          <p className="text-gray-300 max-w-2xl">
            Insights, research findings, and thoughts on artificial intelligence, 
            machine learning, and technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="glass-card overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#0f0f10]/80 backdrop-blur-sm text-xs font-medium py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-sm text-gray-400 mb-2">{post.date}</span>
                <h3 className="text-lg font-semibold mb-3 hover:text-blue-400 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 mt-auto"
                >
                  Read More
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
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#blog" className="btn btn-primary">
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
