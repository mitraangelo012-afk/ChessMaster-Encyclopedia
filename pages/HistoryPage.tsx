
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, ChevronRight } from 'lucide-react';
import { FAMOUS_GAMES } from '../constants';

const HistoryPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-6">Legendary Games</h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          The history of chess is etched in legendary encounters. Explore the games that redefined theory and captured the world's imagination.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {FAMOUS_GAMES.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 lg:p-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/60">
                <Calendar size={12} /> {game.year}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-yellow-400">
                <Trophy size={12} /> Result: {game.result}
              </span>
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-white mb-2 italic">{game.title}</h2>
            <p className="text-xl text-white/40 font-medium mb-8">{game.players}</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Narrative</h4>
                <p className="text-white/70 leading-relaxed italic">{game.description}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Importance</h4>
                <p className="text-white/70 leading-relaxed">{game.importance}</p>
              </div>
            </div>

            <button className="mt-10 flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white hover:translate-x-2 transition-all">
              Read Analysis <ChevronRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
