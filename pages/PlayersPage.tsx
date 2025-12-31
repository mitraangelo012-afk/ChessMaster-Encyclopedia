
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award } from 'lucide-react';
import { GRANDMASTERS } from '../constants';

const PlayersPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block p-3 bg-white/5 rounded-2xl mb-8 border border-white/10"
        >
          <Award size={32} className="text-yellow-500/50" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl lg:text-9xl font-serif font-medium mb-8 tracking-tighter"
        >
          Grandmasters
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 max-w-2xl mx-auto text-xl font-light"
        >
          The intellects who redefined the limits of human calculation across the 64 squares.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {GRANDMASTERS.map((gm, i) => (
          <motion.div
            key={gm.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 hover:border-white/20 transition-all group backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <span className="text-[12rem] font-serif leading-none select-none">♚</span>
            </div>

            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                <MapPin size={12} className="text-yellow-500/50" /> {gm.nationality}
              </div>
              <div className="text-white/20 text-xs font-serif italic">{gm.years}</div>
            </div>

            <h3 className="text-5xl font-serif font-bold text-white mb-10 italic tracking-tight relative z-10 group-hover:translate-x-2 transition-transform duration-500">{gm.name}</h3>
            
            <div className="space-y-8 mb-12 relative z-10">
              <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Notable Achievements</h4>
              <ul className="space-y-4">
                {gm.achievements.map((feat, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start gap-4 text-sm text-white/70 font-light"
                  >
                    <Star size={14} className="text-yellow-500/30 flex-shrink-0 mt-1" />
                    <span>{feat}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 relative z-10">
              <p className="text-white/40 text-base italic leading-relaxed font-light">
                "{gm.description}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;
