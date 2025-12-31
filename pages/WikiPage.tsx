
import React from 'react';
import { motion } from 'framer-motion';
import { WIKI_SECTIONS } from '../constants';
import ChessBoard from '../components/ChessBoard';
import { Book, ChevronRight, Hash } from 'lucide-react';

const WikiPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
      {/* Table of Contents Sidebar */}
      <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
        <div className="sticky top-32 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Contents</h3>
          <nav className="space-y-4">
            {WIKI_SECTIONS.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="block text-xs font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Hash size={12} className="opacity-0 group-hover:opacity-100" />
                {section.title.split('. ')[1]}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Wiki Content */}
      <div className="flex-grow">
        <div className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-6xl font-serif font-medium mb-6">Chess Encyclopedia</h1>
          <p className="text-white/40 text-xl leading-relaxed max-w-3xl">
            A complete, verified reference for the game of chess. All rules and definitions conform to the latest FIDE Laws of Chess standards.
          </p>
        </div>

        <div className="space-y-24">
          {/* Interactive Demo Section */}
          <section className="bg-white/[0.02] border border-white/5 p-8 lg:p-12 rounded-[2rem] flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold italic mb-6">Position Visualizer</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Use this interactive board to visualize the moves discussed in this encyclopedia. You can drag pieces or click to move.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-bold text-white/20 uppercase block mb-1">Board size</span>
                  <span className="text-white font-bold">8x8 Grid</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-bold text-white/20 uppercase block mb-1">Squares</span>
                  <span className="text-white font-bold">64 Alternating</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <ChessBoard />
            </div>
          </section>

          {WIKI_SECTIONS.map((section) => (
            <motion.section 
              key={section.id} 
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-32"
            >
              <h2 className="text-4xl font-serif font-bold mb-8 border-b border-white/5 pb-4">{section.title}</h2>
              <div className="space-y-6">
                {section.content.map((p, i) => (
                  <p key={i} className="text-lg text-white/70 leading-relaxed">
                    {p.startsWith('•') ? p : `• ${p}`}
                  </p>
                ))}
              </div>

              {section.subsections && (
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <ChevronRight className="text-white/20" /> {sub.title}
                      </h4>
                      <ul className="space-y-3">
                        {sub.items.map((item, j) => (
                          <li key={j} className="text-sm text-white/50 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WikiPage;
