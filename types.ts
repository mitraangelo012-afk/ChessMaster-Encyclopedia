
export interface WikiSection {
  id: string;
  title: string;
  content: string[];
  subsections?: { title: string; items: string[] }[];
}

export interface ChessPiece {
  name: string;
  symbol: string;
  value: number | string;
  movePattern: string;
  description: string;
  strategy: string;
}

export interface ChessOpening {
  id: string;
  name: string;
  moves: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  style: 'Aggressive' | 'Positional' | 'Gambit';
  eco: string;
}

export interface ChessTerm {
  id: string;
  name: string;
  definition: string;
  detailedDescription: string;
  category: string;
  icon: string;
  wikiLink?: string;
}

export interface FamousGame {
  id: string;
  title: string;
  players: string;
  year: number | string;
  result: string;
  description: string;
  importance: string;
}

export interface Grandmaster {
  id: string;
  name: string;
  years: string;
  nationality: string;
  achievements: string[];
  description: string;
}

export interface Resource {
  id: string;
  name: string;
  type: string;
  url: string;
  icon: string;
  description: string;
}
