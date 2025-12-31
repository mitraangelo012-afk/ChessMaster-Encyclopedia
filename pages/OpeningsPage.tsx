
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Zap, Target, Book, X, ChevronRight, Info, Shield, Crosshair, Play } from 'lucide-react';
import { CHESS_OPENINGS } from '../constants';
import { ChessOpening } from '../types';
import ChessBoard from '../components/ChessBoard';

const OpeningAnalysisOverlay: React.FC<{ opening: ChessOpening; onClose: () => void }> = ({ opening, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl h-[90vh] bg-[#312e2b] rounded-lg shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="p-6 bg-[#262421] flex justify-between items-center border-b border-white/5">
          <div>
            <h2 className="text-2xl font-black">{opening.name}</h2>
            <code className="text-[#81b64c] text-sm font-bold">{opening.moves}</code>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-md transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="bg-black/20 px-3 py-1 rounded-md text-[10px] font-bold text-[#989795]">ECO {opening.eco}</span>
              <span className="bg-black/20 px-3 py-1 rounded-md text-[10px] font-bold text-[#989795]">{opening.difficulty}</span>
            </div>
            
            <section>
              <h4 className="text-xs font-black text-[#989795] uppercase mb-4">Description</h4>
              <p className="text-[#989795] leading-relaxed italic">{opening.description}</p>
            </section>

            <section className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/20 rounded-lg">
                <span className="text-[10px] font-bold text-[#989795] uppercase">Style</span>
                <div className="text-lg font-bold">{opening.style}</div>
              </div>
              <div className="p-4 bg-black/20 rounded-lg">
                <span className="text-[10px] font-bold text-[#989795] uppercase">Advantage</span>
                <div className="text-lg font-bold">Dynamic</div>
              </div>
            </section>

            <section>
              <h4 className="text-xs font-black text-[#989795] uppercase mb-4">Strategic Goals</h4>
              <ul className="space-y-2">
                {['Control center', 'Minor piece activity', 'King safety', 'Pawn breaks'].map((goal, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <ChevronRight size={14} className="text-[#81b64c]" /> {goal}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="flex flex-col items-center justify-center">
             <ChessBoard />
             <div className="mt-8 text-center text-[#989795] text-xs font-bold uppercase tracking-widest opacity-50">
               Interactive Position Analysis
             </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OpeningsPage: React.FC = () => {
  const [selectedOpening, setSelectedOpening] = useState<ChessOpening | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <Book className="text-[#81b64c]" /> Opening Library
        </h1>
        <p className="text-[#989795] font-bold">The foundation of every grandmaster's repertoire.</p>
      </div>

      <div className="grid gap-4">
        {CHESS_OPENINGS.map((opening) => (
          <div
            key={opening.id}
            className="bg-[#262421] p-6 rounded-md border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-[#2b2926] transition-colors group"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-black/20 rounded-lg flex items-center justify-center text-[#81b64c] group-hover:scale-110 transition-transform">
                <Sword size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{opening.name}</h3>
                <code className="text-[#81b64c] font-bold text-sm">{opening.moves}</code>
                <div className="flex gap-4 mt-2">
                   <span className="text-[10px] font-bold text-[#989795] uppercase">ECO {opening.eco}</span>
                   <span className="text-[10px] font-bold text-[#989795] uppercase">{opening.difficulty}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedOpening(opening)}
              className="px-6 py-2.5 bg-[#312e2b] hover:bg-[#81b64c] text-white rounded-md font-bold transition-all text-sm border border-white/5 active:scale-95"
            >
              Analyze
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedOpening && (
          <OpeningAnalysisOverlay 
            opening={selectedOpening} 
            onClose={() => setSelectedOpening(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpeningsPage;
