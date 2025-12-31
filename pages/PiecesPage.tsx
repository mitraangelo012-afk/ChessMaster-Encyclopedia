
import React from 'react';
import { motion } from 'framer-motion';
import { CHESS_PIECES } from '../constants';

const PiecesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-medium mb-4">The Pieces</h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Every piece has a soul, a value, and a unique way of traversing the 64 squares. Master their movements and strategic importance.
        </p>
      </div>

      <div className="grid gap-12 max-w-4xl mx-auto">
        {CHESS_PIECES.map((piece, i) => (
          <motion.div
            key={piece.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] p-8 lg:p-12 rounded-[2.5rem] border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-12">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-32 h-32 bg-white text-black rounded-3xl flex items-center justify-center text-7xl font-bold shadow-2xl border border-white/20 mb-6">
                  {piece.symbol}
                </div>
                <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 text-center w-full">
                  <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Value</div>
                  <div className="text-2xl font-serif font-bold text-white leading-none mt-1">{piece.value}</div>
                </div>
              </div>

              <div className="flex-grow">
                <h2 className="text-5xl font-serif font-bold mb-6 italic">{piece.name}</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.2em] mb-3">The Move Pattern</h4>
                    <p className="text-lg text-white/80 leading-relaxed font-medium">
                      {piece.movePattern}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.2em] mb-3">Description</h4>
                    <p className="text-white/60 leading-relaxed">
                      {piece.description}
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-3">Strategic Insight</h4>
                    <p className="text-white/70 italic text-sm leading-relaxed">
                      "{piece.strategy}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PiecesPage;
