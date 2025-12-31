
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, BookOpen, Tool } from 'lucide-react';
import { RESOURCES } from '../constants';

const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-6">Resources</h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Curated tools, platforms, and literature to accelerate your journey from novice to master.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {RESOURCES.map((res, i) => (
          <motion.a
            key={res.id}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-8 bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/5 hover:border-white/30 transition-all group"
          >
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
              {res.icon}
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{res.type}</span>
                <ExternalLink size={16} className="text-white/20 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{res.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{res.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-24 p-12 bg-white/5 rounded-[3rem] border border-dashed border-white/20 text-center">
        <h3 className="text-3xl font-serif italic mb-4">Want to contribute?</h3>
        <p className="text-white/40 max-w-md mx-auto mb-8">
          Our encyclopedia is constantly expanding. Join the community and help us build the world's most comprehensive digital repository of chess wisdom.
        </p>
        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors">
          Suggest a Resource
        </button>
      </div>
    </div>
  );
};

export default ResourcesPage;
