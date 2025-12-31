
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const INITIAL_BOARD = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

const ChessBoard: React.FC = () => {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [selected, setSelected] = useState<[number, number] | null>(null);

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const handleClick = (r: number, c: number) => {
    if (selected) {
      const newBoard = board.map(row => [...row]);
      newBoard[r][c] = newBoard[selected[0]][selected[1]];
      newBoard[selected[0]][selected[1]] = null;
      setBoard(newBoard);
      setSelected(null);
    } else if (board[r][c]) {
      setSelected([r, c]);
    }
  };

  return (
    <div className="relative inline-block bg-[#262421] p-1.5 rounded-sm shadow-xl select-none">
      <div className="flex">
        {/* Ranks Labels */}
        <div className="flex flex-col justify-around pr-1 text-[9px] font-bold text-white/20">
          {ranks.map(r => <span key={r}>{r}</span>)}
        </div>
        
        {/* Board Grid */}
        <div className="grid grid-cols-8 border border-[#2b2925]">
          {board.map((row, rIdx) => 
            row.map((piece, cIdx) => {
              const isDark = (rIdx + cIdx) % 2 === 1;
              const isSelected = selected?.[0] === rIdx && selected?.[1] === cIdx;
              
              return (
                <div
                  key={`${rIdx}-${cIdx}`}
                  onClick={() => handleClick(rIdx, cIdx)}
                  className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center text-4xl cursor-pointer relative
                    ${isDark ? 'bg-[#779556]' : 'bg-[#ebecd0]'}
                  `}
                >
                  {/* Square Highlighting */}
                  {isSelected && <div className="absolute inset-0 bg-yellow-400/50 z-0" />}
                  
                  {/* Coordinate Label (Bottom Right) */}
                  {rIdx === 7 && (
                    <span className={`absolute bottom-0 right-0.5 text-[8px] font-bold ${isDark ? 'text-[#ebecd0]' : 'text-[#779556]'}`}>
                      {files[cIdx]}
                    </span>
                  )}
                  {/* Coordinate Label (Top Left) */}
                  {cIdx === 0 && (
                    <span className={`absolute top-0 left-0.5 text-[8px] font-bold ${isDark ? 'text-[#ebecd0]' : 'text-[#779556]'}`}>
                      {ranks[rIdx]}
                    </span>
                  )}

                  <span className={`z-10 ${piece && piece.charCodeAt(0) > 9817 ? 'text-black drop-shadow-sm' : 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]'}`}>
                    {piece}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-between px-2">
        <button 
          onClick={() => { setBoard(INITIAL_BOARD); setSelected(null); }}
          className="text-[10px] font-bold uppercase text-[#989795] hover:text-white transition-colors"
        >
          Reset
        </button>
        <div className="text-[10px] font-bold text-[#989795] uppercase">Free Play Mode</div>
      </div>
    </div>
  );
};

export default ChessBoard;
