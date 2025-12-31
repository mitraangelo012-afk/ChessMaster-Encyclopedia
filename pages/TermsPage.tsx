
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, ChevronDown, Book, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHESS_TERMS } from '../constants';
import { ChessTerm } from '../types';

const TermCard: React.FC<{ term: ChessTerm }> = ({ term }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-[#262421] border border-white/5 rounded-md overflow-hidden transition-all ${isExpanded ? 'ring-1 ring-[#81b64c]/40' : 'hover:bg-[#2b2926]'}`}
    >
      <div 
        className="p-4 sm:p-6 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center text-2xl">
            {term.icon}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-white">{term.name}</h3>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#989795] bg-[#312e2b] px-2 py-0.5 rounded">
                {term.category}
              </span>
            </div>
            <p className="text-[#989795] text-sm mt-0.5 line-clamp-1">{term.definition}</p>
          </div>
        </div>
        <ChevronDown size={20} className={`text-[#989795] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/5 bg-black/10"
          >
            <div className="p-6">
              <p className="text-white/80 leading-relaxed text-sm mb-6">
                {term.detailedDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {term.wikiLink && (
                  <Link 
                    to={`/wiki#${term.wikiLink}`}
                    className="flex items-center gap-2 text-[#81b64c] text-xs font-bold uppercase cursor-pointer hover:underline bg-[#312e2b] px-3 py-2 rounded border border-white/5"
                  >
                    <Book size={14} /> Read in Encyclopedia
                  </Link>
                )}
                <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase cursor-pointer hover:text-white bg-[#312e2b] px-3 py-2 rounded border border-white/5">
                  <ExternalLink size={14} /> View Grandmaster Games
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TermsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Rule', 'Tactic', 'Strategy', 'Evaluation', 'Endgame', 'General'];

  const filteredTerms = CHESS_TERMS.filter(term => {
    const matchesSearch = term.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || term.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
          <LayoutGrid className="text-[#81b64c]" /> Chess Terms
        </h1>
        <p className="text-[#989795] font-bold">The complete guide to chess concepts and strategy.</p>
      </div>

      <div className="bg-[#262421] p-4 rounded-lg mb-8 space-y-4">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#989795]" size={20} />
          <input 
            type="text" 
            placeholder="Search terms (e.g. 'fork', 'zugzwang')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#312e2b] border border-white/5 rounded-md py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-[#81b64c] transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === cat ? 'bg-[#81b64c] text-white' : 'bg-[#312e2b] text-[#989795] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))
        ) : (
          <div className="text-center py-20 bg-[#262421] rounded-lg">
            <p className="text-[#989795]">No terms found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Internal Import helper for the title icon
import { LayoutGrid } from 'lucide-react';

export default TermsPage;
