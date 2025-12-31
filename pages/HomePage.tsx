
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sword, BookOpen, LayoutGrid, ArrowRight, Play, Trophy, Users, Library } from 'lucide-react';
import ChessBoard from '../components/ChessBoard';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Side: Main Board & Hero */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
              Ready To Understand Chess? <br /> 
              <span className="text-[#989795]">(For beginners)</span>
            </h1>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/wiki" className="chess-btn-primary px-10 py-5 rounded-lg font-black text-xl flex items-center space-x-4">
                <Play fill="white" size={24} />
                <span>Understand now</span>
              </Link>
              <Link to="/openings" className="bg-[#454240] hover:bg-[#555250] px-10 py-5 rounded-lg font-black text-xl flex items-center space-x-4 border-b-4 border-[#353331]">
                <BookOpen size={24} />
                <span>Study Theory</span>
              </Link>
            </div>
          </div>

          <div className="p-4 bg-[#262421] rounded-lg shadow-2xl">
             <ChessBoard />
          </div>
        </div>

        {/* Right Side: Modules & Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#262421] p-6 rounded-lg border border-white/5">
            <h3 className="text-[#989795] text-xs font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              <Trophy size={14} className="text-yellow-500" /> Daily Top Fact
            </h3>
            <p className="text-xl font-bold leading-snug">
              Did you know? The "King's Indian Defense" was once considered dubious before Bobby Fischer popularized it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Learn Openings', desc: 'Master the first moves of the game.', link: '/openings', icon: BookOpen, color: 'text-blue-400' },
              { title: 'Chess Terms', desc: 'From En Passant to Zugzwang.', link: '/terms', icon: LayoutGrid, color: 'text-[#81b64c]' },
              { title: 'Grandmasters', desc: 'Study the legends of the game.', link: '/players', icon: Users, color: 'text-purple-400' }
            ].map((box, i) => (
              <Link 
                key={i} 
                to={box.link}
                className="group bg-[#262421] p-6 rounded-lg border border-white/5 flex items-center space-x-6 hover:bg-[#2b2926] transition-colors"
              >
                <div className={`${box.color} p-4 bg-black/20 rounded-xl group-hover:scale-110 transition-transform`}>
                   <box.icon size={32} />
                </div>
                <div>
                  <h4 className="text-lg font-black">{box.title}</h4>
                  <p className="text-[#989795] text-sm">{box.desc}</p>
                </div>
                <ArrowRight className="ml-auto text-white/10 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>

          <div className="bg-[#262421] p-8 rounded-lg text-center border-b-4 border-black/20">
             <div className="flex justify-center mb-4">
               <div className="p-3 bg-black/20 rounded-full text-[#81b64c]">
                 <Library size={32} />
               </div>
             </div>
             <p className="text-[#989795] text-sm font-bold uppercase mb-2">ChessMaster Encyclopedia</p>
             <h4 className="text-2xl font-black mb-2 text-white">Your Definitive Guide</h4>
             <p className="text-[#989795] text-sm leading-relaxed px-4">
               A comprehensive repository covering every rule, tactic, opening, and historical landmark for aspiring masters.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
