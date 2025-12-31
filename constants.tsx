
import { ChessPiece, ChessOpening, WikiSection, ChessTerm, FamousGame, Grandmaster, Resource } from './types';

export const WIKI_SECTIONS: WikiSection[] = [
  {
    id: 'overview',
    title: '1. Basic Overview',
    content: [
      'Chess is a two-player abstract strategy board game with perfect information and no hidden elements.',
      'Players: 2 (White and Black)',
      'Objective: Checkmate the opponent’s king',
      'Governing body: FIDE (Fédération Internationale des Échecs)',
      'Board: 8×8 grid (64 squares)',
      'Total pieces: 32 (16 per side)'
    ]
  },
  {
    id: 'chessboard',
    title: '2. The Chessboard',
    content: [
      '8 ranks (rows): 1–8',
      '8 files (columns): a–h',
      'Squares alternate colors: light and dark',
      'Bottom-right corner from White’s perspective is light (h1)',
      'Rank: A horizontal row of squares.',
      'File: A vertical column of squares.',
      'Diagonal: A slanted line of squares of the same color.'
    ]
  },
  {
    id: 'pieces-movement',
    title: '3. Pieces and Movement',
    content: [
      'King (♔): Moves 1 square in any direction. Special move: Castling.',
      'Queen (♕): Moves any number of squares rank, file, or diagonal. Strongest piece.',
      'Rook (♖): Moves any number of squares rank or file. Participates in castling.',
      'Bishop (♗): Moves any number of squares diagonally. Stays on one color.',
      'Knight (♘): Moves in an L-shape (2+1). Can jump over pieces.',
      'Pawn (♙): Moves 1 square forward (2 on first move). Captures diagonally.'
    ]
  },
  {
    id: 'special-moves',
    title: '7. Special Moves',
    content: ['Advanced rules that govern unique board situations.'],
    subsections: [
      {
        title: 'Castling',
        items: [
          'King moves two squares toward a rook; rook jumps over king.',
          'Types: Kingside (O-O) and Queenside (O-O-O).',
          'Conditions: Neither piece moved, path clear, not in check, not passing through check.'
        ]
      },
      {
        title: 'En Passant',
        items: [
          'Capture of an enemy pawn that moved two squares and landed adjacent to yours.',
          'Must be done immediately on the following move.'
        ]
      },
      {
        title: 'Pawn Promotion',
        items: [
          'Pawn reaching the 8th rank must become a Queen, Rook, Bishop, or Knight.',
          'Promotion is mandatory and instantaneous.'
        ]
      }
    ]
  },
  {
    id: 'etiquette',
    title: '12. Chess Etiquette',
    content: [
      'Touch-move rule: If you touch a piece, you must move it if a legal move exists.',
      'Resignation: Tipping over your king or shaking hands to signify defeat.',
      'Draw offers: Should be made after making a move and before starting the opponent\'s clock.',
      'Silence: Players and spectators must remain quiet during play.'
    ]
  }
];

export const CHESS_TERMS: ChessTerm[] = [
  { id: 'checkmate', name: 'Checkmate', category: 'Rule', definition: 'A position in which a player\'s king is in check and there is no way to get out of it.', detailedDescription: 'This immediately ends the game and the player who delivers checkmate wins. Derived from the Persian phrase "Shah Mat".', icon: '👑', wikiLink: 'overview' },
  { id: 'fork', name: 'Fork', category: 'Tactic', definition: 'A single piece attacking two or more of the opponent\'s pieces simultaneously.', detailedDescription: 'Knight forks are the most famous, but any piece can perform a fork.', icon: '🍴' },
  { id: 'pin', name: 'Pin', category: 'Tactic', definition: 'Restricting an opponent\'s piece from moving because it would expose a more valuable piece.', detailedDescription: 'Absolute pins involve the king; relative pins involve other valuable pieces.', icon: '📍' },
  { id: 'skewer', name: 'Skewer', category: 'Tactic', definition: 'Attacking a valuable piece which, when moved, exposes a lesser piece behind it.', detailedDescription: 'The opposite of a pin. The valuable piece is in front.', icon: '🍢' },
  { id: 'zugzwang', name: 'Zugzwang', category: 'Strategy', definition: 'A situation where a player is forced to make a move that significantly weakens their position.', detailedDescription: 'German for "compulsion to move". Extremely common in endgames.', icon: '⏳' },
  { id: 'fianchetto', name: 'Fianchetto', category: 'Strategy', definition: 'Developing a bishop to the long diagonal via b2/g2 or b7/g7.', detailedDescription: 'Popular in hypermodern openings like the King\'s Indian.', icon: '📐' },
  { id: 'en-passant', name: 'En Passant', category: 'Rule', definition: 'Special pawn capture after a double-step pawn move.', detailedDescription: 'Must be performed immediately on the turn following the double-step move.', icon: '♟️', wikiLink: 'special-moves' },
  { id: 'stalemate', name: 'Stalemate', category: 'Rule', definition: 'A draw where the player to move is not in check but has no legal moves.', detailedDescription: 'A critical defensive resource in lost endgames.', icon: '🤝', wikiLink: 'special-moves' },
  { id: 'passed-pawn', name: 'Passed Pawn', category: 'Strategy', definition: 'A pawn with no opposing pawns in front or on adjacent files.', detailedDescription: 'Passed pawns must be pushed!', icon: '🏃' },
  { id: 'isolated-pawn', name: 'Isolated Pawn', category: 'Strategy', definition: 'A pawn with no friendly pawns on adjacent files.', detailedDescription: 'Often called an IQP (Isolated Queen Pawn). Both a strength and a weakness.', icon: '🧍' },
  { id: 'smothered-mate', name: 'Smothered Mate', category: 'Tactic', definition: 'A checkmate delivered by a knight where the king is surrounded by its own pieces.', detailedDescription: 'Often preceded by a dramatic queen sacrifice.', icon: '☁️' },
  { id: 'back-rank-mate', name: 'Back Rank Mate', category: 'Tactic', definition: 'A checkmate on the 1st or 8th rank by a major piece.', detailedDescription: 'Usually happens when the king is trapped behind its own pawns.', icon: '🧱' },
  { id: 'zwischenzug', name: 'Zwischenzug', category: 'Tactic', definition: 'An intermediate move played instead of an expected response.', detailedDescription: 'Also known as an "in-between move" or intermezzo.', icon: '⏭️' },
  { id: 'prophylaxis', name: 'Prophylaxis', category: 'Strategy', definition: 'Preventing an opponent\'s plan before it is even started.', detailedDescription: 'A concept popularized by Aron Nimzowitsch.', icon: '🛡️' },
  { id: 'opposition', name: 'Opposition', category: 'Endgame', definition: 'Kings facing each other with one square in between.', detailedDescription: 'The player whose turn it is to move "loses" the opposition.', icon: '🤜' },
  { id: 'windmill', name: 'Windmill', category: 'Tactic', definition: 'A series of alternating checks and discovered checks.', detailedDescription: 'Allows one player to capture multiple pieces in sequence.', icon: '🎡' },
  { id: 'greek-gift', name: 'Greek Gift', category: 'Tactic', definition: 'A classical bishop sacrifice on h7 or h2.', detailedDescription: 'Usually followed by Ng5+ and Qh5.', icon: '🎁' },
  { id: 'major-piece', name: 'Major Piece', category: 'General', definition: 'A Rook or a Queen.', detailedDescription: 'Pieces worth 5 or 9 points respectively.', icon: '🏰', wikiLink: 'pieces-movement' },
  { id: 'minor-piece', name: 'Minor Piece', category: 'General', definition: 'A Bishop or a Knight.', detailedDescription: 'Pieces worth 3 points each.', icon: '🐴', wikiLink: 'pieces-movement' },
  { id: 'the-exchange', name: 'The Exchange', category: 'General', definition: 'The difference in value between a rook and a minor piece.', detailedDescription: 'Winning "the exchange" means trading a minor piece for a rook.', icon: '🔁' },
  { id: 'gambit', name: 'Gambit', category: 'Opening', definition: 'Sacrificing material (usually a pawn) for development or initiative.', detailedDescription: 'Examples include the Queen\'s Gambit and King\'s Gambit.', icon: '🎲' },
  { id: 'outpost', name: 'Outpost', category: 'Strategy', definition: 'A square protected by a pawn where a piece (usually a knight) cannot be attacked by enemy pawns.', detailedDescription: 'Central outposts on the 5th and 6th ranks are incredibly powerful.', icon: '🚩' },
  { id: 'doubled-pawns', name: 'Doubled Pawns', category: 'Strategy', definition: 'Two pawns of the same color on the same file.', detailedDescription: 'Generally a structural weakness as they cannot defend each other.', icon: '⛓️' },
  { id: 'hanging-pawns', name: 'Hanging Pawns', category: 'Strategy', definition: 'Two connected pawns on adjacent files with no pawns on files next to them.', detailedDescription: 'They provide space but are vulnerable targets.', icon: '👕' },
  { id: 'lucena-position', name: 'Lucena Position', category: 'Endgame', definition: 'The most important winning position in Rook and Pawn endgames.', detailedDescription: 'Involves "building a bridge" with the rook.', icon: '🌉' },
  { id: 'philidor-position', name: 'Philidor Position', category: 'Endgame', definition: 'The standard drawing method in Rook and Pawn endgames.', detailedDescription: 'Involves the "third rank defense".', icon: '🛑' },
  { id: 'poisoned-pawn', name: 'Poisoned Pawn', category: 'Opening', definition: 'An unprotected pawn that, if captured, leads to positional or tactical disaster.', detailedDescription: 'Famous in the Najdorf Sicilian.', icon: '🧪' },
  { id: 'desperado', name: 'Desperado', category: 'Tactic', definition: 'A piece that is doomed to be lost and is used to capture as much as possible before it goes.', detailedDescription: 'Turning a loss into a favorable trade.', icon: '🤠' },
  { id: 'interference', name: 'Interference', category: 'Tactic', definition: 'Cutting off the line of defense between two enemy pieces.', detailedDescription: 'Often involves a sacrifice on a square where lines intersect.', icon: '🚧' },
  { id: 'overloading', name: 'Overloading', category: 'Tactic', definition: 'Giving a defensive piece too many tasks to perform.', detailedDescription: 'Force a piece to abandon one duty to perform another.', icon: '🤯' },
  { id: 'maroczy-bind', name: 'Maroczy Bind', category: 'Strategy', definition: 'A pawn structure where White has pawns on c4 and e4.', detailedDescription: 'Greatly restricts Black\'s counterplay in many Sicilian lines.', icon: '🧶' },
  { id: 'hedgehog', name: 'Hedgehog', category: 'Strategy', definition: 'A defensive structure where Black places pawns on a6, b6, d6, and e6.', detailedDescription: 'Black waits for White to overextend and then strikes.', icon: '🦔' },
  { id: 'luft', name: 'Luft', category: 'Strategy', definition: 'German for "air"; creating an escape square for the king.', detailedDescription: 'Usually h3 or g3 for White to prevent back-rank mates.', icon: '🌬️' },
  { id: 'minority-attack', name: 'Minority Attack', category: 'Strategy', definition: 'Advancing pawns on a wing where the opponent has a pawn majority.', detailedDescription: 'Common in the Carlsbad structure of the QGD.', icon: '📉' },
  { id: 'hypermodernism', name: 'Hypermodernism', category: 'History', definition: 'A school of thought favoring center control with pieces rather than pawns.', detailedDescription: 'Led by Reti and Nimzowitsch in the 1920s.', icon: '🏗️' },
  { id: 'blindfold-chess', name: 'Blindfold Chess', category: 'General', definition: 'Playing chess without seeing the board or pieces.', detailedDescription: 'Players visualize the board in their mind.', icon: '🙈' },
  { id: 'chess960', name: 'Chess960', category: 'General', definition: 'A variant where starting piece positions are randomized.', detailedDescription: 'Also known as Fischer Random Chess.', icon: '🎲' },
  { id: 'elo', name: 'Elo Rating', category: 'Technical', definition: 'The standard system for calculating relative skill levels.', detailedDescription: 'Developed by Arpad Elo.', icon: '📊' },
  { id: 'grandmaster', name: 'Grandmaster', category: 'Technical', definition: 'The highest title awarded by FIDE.', detailedDescription: 'Requires a rating of 2500 and three norms.', icon: '🏅' },
  { id: 'blitz', name: 'Blitz', category: 'Technical', definition: 'Fast chess where each player has 10 minutes or less.', detailedDescription: 'Common time controls are 3+2 or 5+0.', icon: '⚡' },
  { id: 'bullet', name: 'Bullet', category: 'Technical', definition: 'Ultra-fast chess with less than 3 minutes per side.', detailedDescription: 'Often played at 1+0 or 2+1.', icon: '🔫' },
  { id: 'analysis-board', name: 'Analysis Board', category: 'Technical', definition: 'Using a separate board or engine to evaluate positions.', detailedDescription: 'Critical for improving understanding of theory.', icon: '🔍' },
  { id: 'stockfish', name: 'Stockfish', category: 'Technical', definition: 'The world\'s strongest open-source chess engine.', detailedDescription: 'Consistently tops computer chess championships.', icon: '🐟' },
  { id: 'brilliant-move', name: 'Brilliant Move', category: 'Evaluation', definition: 'A move that is difficult to find and significantly improves the position, often involving a sacrifice.', detailedDescription: 'Annotated as !!.', icon: '✨' },
  { id: 'blunder', name: 'Blunder', category: 'Evaluation', definition: 'A very bad move that overlooks a threat or loses material.', detailedDescription: 'Annotated as ??.', icon: '❌' },
  { id: 'x-ray', name: 'X-Ray', category: 'Tactic', definition: 'Attacking through an intervening piece.', detailedDescription: 'Similar to a pin but works through friendly pieces too.', icon: '🦴' },
  { id: 'arabian-mate', name: 'Arabian Mate', category: 'Tactic', definition: 'Checkmate delivered by a knight and rook on the corner.', detailedDescription: 'The knight protects the rook and covers the escape square.', icon: '🌙' },
  { id: 'bodens-mate', name: 'Boden\'s Mate', category: 'Tactic', definition: 'Checkmate delivered by two criss-crossing bishops.', detailedDescription: 'Usually involves a queen sacrifice to open lines.', icon: '❌' },
  { id: 'fide', name: 'FIDE', category: 'General', definition: 'The International Chess Federation.', detailedDescription: 'Governs all international chess competition.', icon: '🌐' },
  { id: 'candidate-move', name: 'Candidate Move', category: 'Evaluation', definition: 'A move that deserves serious calculation.', detailedDescription: 'A concept popularized by Alexander Kotov.', icon: '🕵️' },
  { id: 'open-file', name: 'Open File', category: 'Strategy', definition: 'A file with no pawns of either color.', detailedDescription: 'Ideal for rooks to penetrate the enemy position.', icon: '📂' },
  { id: 'semi-open-file', name: 'Semi-open File', category: 'Strategy', definition: 'A file with only one player\'s pawn.', detailedDescription: 'Useful for putting pressure on the enemy pawn.', icon: '📄' },
  { id: 'pawn-chain', name: 'Pawn Chain', category: 'Strategy', definition: 'A diagonal row of pawns protecting each other.', detailedDescription: 'The "base" of the chain is its most vulnerable point.', icon: '⛓️' },
  { id: 'pawn-break', name: 'Pawn Break', category: 'Strategy', definition: 'A pawn move that challenges the opponent\'s pawn structure.', detailedDescription: 'Crucial for opening lines for pieces.', icon: '💥' },
  { id: 'pawn-storm', name: 'Pawn Storm', category: 'Tactic', definition: 'Advancing several pawns on a wing to attack the enemy king.', detailedDescription: 'Common in opposite-side castling positions.', icon: '🌪️' },
  { id: 'tempo', name: 'Tempo', category: 'Technical', definition: 'A single turn or move.', detailedDescription: 'Gaining a tempo is like getting an extra move.', icon: '⏱️' },
  { id: 'triangulation', name: 'Triangulation', category: 'Endgame', definition: 'A maneuver to lose a tempo and put the opponent in zugzwang.', detailedDescription: 'Usually involves a three-step king movement.', icon: '🔺' },
  { id: 'fifty-move-rule', name: '50-Move Rule', category: 'Rule', definition: 'A draw can be claimed if 50 moves pass without a capture or pawn move.', detailedDescription: 'Prevents endless games.', icon: '🔢' },
  { id: 'threefold-repetition', name: 'Repetition', category: 'Rule', definition: 'A draw can be claimed if the same position occurs three times.', detailedDescription: 'The position must be identical, including move rights.', icon: '🔄' },
  { id: 'en-prise', name: 'En Prise', category: 'General', definition: 'A piece that is unprotected and able to be captured.', detailedDescription: 'French for "in take".', icon: '🤲' },
  { id: 'bad-bishop', name: 'Bad Bishop', category: 'Strategy', definition: 'A bishop restricted by its own pawns on the same color.', detailedDescription: 'Should usually be traded for a "good" piece.', icon: '👎' },
  { id: 'good-bishop', name: 'Good Bishop', category: 'Strategy', definition: 'A bishop that is free to move and doesn\'t conflict with its pawns.', detailedDescription: 'A powerful asset in the endgame.', icon: '👍' },
  { id: 'fianchetto-bishop', name: 'Fianchetto Bishop', category: 'Strategy', definition: 'A bishop placed on the long diagonal.', detailedDescription: 'Exerts pressure across the entire board.', icon: '🐲' },
  { id: 'correspondence-chess', name: 'Correspondence', category: 'General', definition: 'Playing chess via mail, email, or server over long periods.', detailedDescription: 'Each move can take days.', icon: '✉️' },
  { id: 'rapid', name: 'Rapid', category: 'Technical', definition: 'Chess with time controls between 10 and 60 minutes.', detailedDescription: 'A middle ground between Blitz and Classical.', icon: '🐇' },
  { id: 'simul', name: 'Simultaneous Exhibition', category: 'General', definition: 'One player playing against many others at once.', detailedDescription: 'Usually a grandmaster vs club players.', icon: '👥' },
  { id: 'blindfold-simul', name: 'Blindfold Simul', category: 'General', definition: 'A simul played entirely from memory by the master.', detailedDescription: 'A feat of incredible mental prowess.', icon: '🧠' }
];

export const CHESS_OPENINGS: ChessOpening[] = [
  { id: 'queens-gambit', name: "Queen's Gambit", moves: '1. d4 d5 2. c4', difficulty: 'Intermediate', style: 'Gambit', description: 'White offers a pawn for central control and rapid development.', eco: 'D06' },
  { id: 'sicilian', name: 'Sicilian Defense', moves: '1. e4 c5', difficulty: 'Advanced', style: 'Aggressive', description: 'The most popular and sharpest response to 1. e4.', eco: 'B20' },
  { id: 'ruy-lopez', name: 'Ruy Lopez', moves: '1. e4 e5 2. Nf3 Nc6 3. Bb5', difficulty: 'Intermediate', style: 'Positional', description: 'Classic Spanish opening putting pressure on the center.', eco: 'C60' },
  { id: 'french-defense', name: 'French Defense', moves: '1. e4 e6 2. d4 d5', difficulty: 'Intermediate', style: 'Positional', description: 'Leads to solid, closed positions and pawn chains.', eco: 'C00' },
  { id: 'caro-kann', name: 'Caro-Kann Defense', moves: '1. e4 c6 2. d4 d5', difficulty: 'Beginner', style: 'Positional', description: 'Known as the "solid" defense for Black.', eco: 'B12' },
  { id: 'kings-indian', name: "King's Indian Defense", moves: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6', difficulty: 'Advanced', style: 'Aggressive', description: 'Hypermodern masterpiece focusing on a kingside counter-attack.', eco: 'E61' },
  { id: 'london-system', name: 'London System', moves: '1. d4 d5 2. Bf4', difficulty: 'Beginner', style: 'Positional', description: 'A flexible and reliable setup for White.', eco: 'A48' },
  { id: 'english-opening', name: 'English Opening', moves: '1. c4', difficulty: 'Intermediate', style: 'Positional', description: 'A flank opening fighting for the d5 square.', eco: 'A10' },
  { id: 'italian-game', name: 'Italian Game', moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4', difficulty: 'Beginner', style: 'Positional', description: 'Developing pieces and eyeing the f7 weakness.', eco: 'C50' },
  { id: 'scandinavian-defense', name: 'Scandinavian Defense', moves: '1. e4 d5', difficulty: 'Beginner', style: 'Aggressive', description: 'Immediate challenge to White\'s e4 pawn.', eco: 'B01' },
  { id: 'nimzo-indian', name: 'Nimzo-Indian Defense', moves: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4', difficulty: 'Advanced', style: 'Positional', description: 'Pinning the knight to control the center indirectly.', eco: 'E20' },
  { id: 'catalan-opening', name: 'Catalan Opening', moves: '1. d4 Nf6 2. c4 e6 3. g3', difficulty: 'Advanced', style: 'Positional', description: 'Combination of QGD and King\'s Fianchetto.', eco: 'E01' },
  { id: 'dutch-defense', name: 'Dutch Defense', moves: '1. d4 f5', difficulty: 'Intermediate', style: 'Aggressive', description: 'Unbalanced opening aiming for early kingside attack.', eco: 'A80' },
  { id: 'grunfeld-defense', name: 'Grunfeld Defense', moves: '1. d4 Nf6 2. c4 g6 3. Nc3 d5', difficulty: 'Advanced', style: 'Aggressive', description: 'Allowing White a big center to strike it later.', eco: 'D80' },
  { id: 'alekhines-defense', name: "Alekhine's Defense", moves: '1. e4 Nf6', difficulty: 'Advanced', style: 'Aggressive', description: 'Baits White\'s pawns forward to overextend them.', eco: 'B02' },
  { id: 'evans-gambit', name: 'Evans Gambit', moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4', difficulty: 'Intermediate', style: 'Gambit', description: 'Sacrificing a wing pawn for rapid development and attack.', eco: 'C51' },
  { id: 'marshall-attack', name: 'Marshall Attack', moves: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5', difficulty: 'Advanced', style: 'Aggressive', description: 'A devastating gambit for Black in the Ruy Lopez.', eco: 'C89' },
  { id: 'benoni-defense', name: 'Benoni Defense', moves: '1. d4 Nf6 2. c4 c5 3. d5 e6', difficulty: 'Advanced', style: 'Aggressive', description: 'Hyper-dynamic response to 1. d4.', eco: 'A60' },
  { id: 'petroffs-defense', name: "Petroff's Defense", moves: '1. e4 e5 2. Nf3 Nf6', difficulty: 'Intermediate', style: 'Positional', description: 'The "Russian Game", known for being highly drawish and solid.', eco: 'C42' },
  { id: 'philidor-defense', name: 'Philidor Defense', moves: '1. e4 e5 2. Nf3 d6', difficulty: 'Beginner', style: 'Positional', description: 'Solid but somewhat passive defense for Black.', eco: 'C41' },
  { id: 'scotch-game', name: 'Scotch Game', moves: '1. e4 e5 2. Nf3 Nc6 3. d4', difficulty: 'Beginner', style: 'Aggressive', description: 'Immediate central confrontation popular in the 19th century.', eco: 'C45' },
  { id: 'vienna-game', name: 'Vienna Game', moves: '1. e4 e5 2. Nc3', difficulty: 'Beginner', style: 'Positional', description: 'Flexible opening that can lead to aggressive gambits.', eco: 'C25' },
  { id: 'reti-opening', name: 'Reti Opening', moves: '1. Nf3 d5 2. c4', difficulty: 'Advanced', style: 'Positional', description: 'The hallmark of hypermodern chess.', eco: 'A04' },
  { id: 'budapest-gambit', name: 'Budapest Gambit', moves: '1. d4 Nf6 2. c4 e5', difficulty: 'Intermediate', style: 'Gambit', description: 'Uncommon and tricky response to the Indian defenses.', eco: 'A51' },
  { id: 'benko-gambit', name: 'Benko Gambit', moves: '1. d4 Nf6 2. c4 c5 3. d5 b5', difficulty: 'Advanced', style: 'Gambit', description: 'Sacrificing a pawn for long-term pressure on the queenside.', eco: 'A57' },
  { id: 'pirc-defense', name: 'Pirc Defense', moves: '1. e4 d6 2. d4 Nf6 3. Nc3 g6', difficulty: 'Intermediate', style: 'Aggressive', description: 'Flexible setup for Black often leading to sharp play.', eco: 'B07' },
  { id: 'modern-defense', name: 'Modern Defense', moves: '1. e4 g6', difficulty: 'Intermediate', style: 'Aggressive', description: 'A universal hypermodern response to almost any White first move.', eco: 'B06' },
  { id: 'trompowsky-attack', name: 'Trompowsky Attack', moves: '1. d4 Nf6 2. Bg5', difficulty: 'Intermediate', style: 'Aggressive', description: 'Avoids deep theory of Indian defenses by pinning the knight.', eco: 'A45' },
  { id: 'center-game', name: 'Center Game', moves: '1. e4 e5 2. d4 exd4 3. Qxd4', difficulty: 'Beginner', style: 'Aggressive', description: 'Bringing the queen out early to fight for the center.', eco: 'C22' }
];

export const FAMOUS_GAMES: FamousGame[] = [
  { id: 'immortal-game', title: 'The Immortal Game', players: 'Adolf Anderssen vs Lionel Kieseritzky', year: 1851, result: '1-0', description: 'A masterpiece of romantic-era attacking chess.', importance: 'Showcases double rook sacrifice for mate.' },
  { id: 'game-of-the-century', title: 'The Game of the Century', players: 'Donald Byrne vs Bobby Fischer', year: 1956, result: '0-1', description: 'A 13-year-old Fischer produces a stunner.', importance: 'Fischer sacrificed his queen for a winning attack.' },
  { id: 'evergreen-game', title: 'The Evergreen Game', players: 'Adolf Anderssen vs Jean Dufresne', year: 1852, result: '1-0', description: 'Considered one of the most beautiful attacking games ever.', importance: 'Incredible piece coordination and sacrifice.' },
  { id: 'opera-game', title: 'The Opera Game', players: 'Paul Morphy vs Duke of Brunswick & Count Isouard', year: 1858, result: '1-0', description: 'The ultimate tutorial in development and attacking chess.', importance: 'Morphy develops every piece with tempo to win.' },
  { id: 'kasparov-topalov', title: 'Kasparov\'s Immortal', players: 'Garry Kasparov vs Veselin Topalov', year: 1999, result: '1-0', description: 'A long rook sacrifice leads to a hunting of the king across the board.', importance: 'Voted the greatest game ever played by many experts.' },
  { id: 'spassky-fischer-game-6', title: 'Match of the Century Game 6', players: 'Bobby Fischer vs Boris Spassky', year: 1972, result: '1-0', description: 'Fischer opens with 1. c4, shocking Spassky and the world.', importance: 'Psychological and positional masterpiece.' },
  { id: 'deep-blue-kasparov', title: 'Deep Blue vs Kasparov', players: 'Deep Blue vs Garry Kasparov', year: 1997, result: '1-0', description: 'The first time a computer beat a World Champion in a match.', importance: 'Marked the beginning of the computer era in chess.' }
];

export const GRANDMASTERS: Grandmaster[] = [
  { id: 'magnus-carlsen', name: 'Magnus Carlsen', years: '1990 - Present', nationality: 'Norway', achievements: ['5-time World Champion', 'Highest rating 2882'], description: 'Dominant endgame master.' },
  { id: 'garry-kasparov', name: 'Garry Kasparov', years: '1963 - Present', nationality: 'Russia', achievements: ['World Champion (1985-2000)', 'Number 1 for 255 months'], description: 'Aggressive legend.' },
  { id: 'bobby-fischer', name: 'Bobby Fischer', years: '1943 - 2008', nationality: 'USA', achievements: ['World Champion (1972)', 'Ended Soviet dominance'], description: 'Brilliant but reclusive.' },
  { id: 'judit-polgar', name: 'Judit Polgár', years: '1976 - Present', nationality: 'Hungary', achievements: ['Strongest female player ever', 'Reached World No. 8'], description: 'Attacking force.' },
  { id: 'mikhail-tal', name: 'Mikhail Tal', years: '1936 - 1992', nationality: 'Latvia', achievements: ['World Champion (1960)'], description: 'The Magician from Riga.' },
  { id: 'anatoly-karpov', name: 'Anatoly Karpov', years: '1951 - Present', nationality: 'Russia', achievements: ['World Champion (1975-1985)'], description: 'Positional boa constrictor.' },
  { id: 'viswanathan-anand', name: 'Viswanathan Anand', years: '1969 - Present', nationality: 'India', achievements: ['5-time World Champion'], description: 'The Tiger of Madras.' },
  { id: 'ding-liren', name: 'Ding Liren', years: '1992 - Present', nationality: 'China', achievements: ['Current World Champion (2023)'], description: 'First Chinese World Champion.' },
  { id: 'hikaru-nakamura', name: 'Hikaru Nakamura', years: '1987 - Present', nationality: 'USA', achievements: ['5-time US Champion', 'Blitz specialist'], description: 'Online chess pioneer.' },
  { id: 'fabiano-caruana', name: 'Fabiano Caruana', years: '1992 - Present', nationality: 'USA', achievements: ['World No. 2 peak', 'Challenger 2018'], description: 'Calculation machine.' },
  { id: 'wilhelm-steinitz', name: 'Wilhelm Steinitz', years: '1836 - 1900', nationality: 'Austria-Hungary', achievements: ['1st Official World Champion'], description: 'Father of modern positional play.' },
  { id: 'emanuel-lasker', name: 'Emanuel Lasker', years: '1868 - 1941', nationality: 'Germany', achievements: ['World Champion for 27 years'], description: 'Psychological chess master.' },
  { id: 'jose-raul-capablanca', name: 'José Raúl Capablanca', years: '1888 - 1942', nationality: 'Cuba', achievements: ['World Champion (1921-1927)'], description: 'The Chess Machine; endgame genius.' },
  { id: 'alexander-alekhine', name: 'Alexander Alekhine', years: '1892 - 1946', nationality: 'Russia/France', achievements: ['World Champion (1927-1935, 1937-1946)'], description: 'Dynamic attacker and analyst.' },
  { id: 'mikhail-botvinnik', name: 'Mikhail Botvinnik', years: '1911 - 1995', nationality: 'USSR', achievements: ['3-time World Champion'], description: 'Patriarch of the Soviet Chess School.' },
  { id: 'vladimir-kramnik', name: 'Vladimir Kramnik', years: '1975 - Present', nationality: 'Russia', achievements: ['World Champion (2000-2007)'], description: 'The man who beat Kasparov.' },
  { id: 'paul-morphy', name: 'Paul Morphy', years: '1837 - 1884', nationality: 'USA', achievements: ['Unofficial World Champion'], description: 'Pride and sorrow of chess; romantic era king.' },
  { id: 'gukesh-d', name: 'Gukesh D', years: '2006 - Present', nationality: 'India', achievements: ['Youngest Candidates Winner'], description: 'Modern prodigy and World Title challenger.' },
  { id: 'praggnanandhaa-r', name: 'Praggnanandhaa R', years: '2005 - Present', nationality: 'India', achievements: ['World Cup Runner-up 2023'], description: 'India\'s rising superstar.' },
  { id: 'levon-aronian', name: 'Levon Aronian', years: '1982 - Present', nationality: 'Armenia/USA', achievements: ['2-time World Cup Winner'], description: 'Creative and artistic player.' }
];

export const RESOURCES: Resource[] = [
  { id: 'lichess', name: 'Lichess.org', type: 'Platform', url: 'https://lichess.org', icon: '🌐', description: 'Free open-source chess server.' },
  { id: 'chess-com', name: 'Chess.com', type: 'Platform', url: 'https://chess.com', icon: '♟️', description: 'Largest online chess community.' },
  { id: 'chess-base', name: 'ChessBase', type: 'Software', url: 'https://chessbase.com', icon: '💾', description: 'Industry standard database software.' },
  { id: 'new-in-chess', name: 'New In Chess', type: 'Magazine', url: 'https://newinchess.com', icon: '📰', description: 'Premier chess magazine and book publisher.' }
];

export const CHESS_PIECES: ChessPiece[] = [
  { name: 'King', symbol: '♔', value: 'Infinite', movePattern: 'One square in any direction.', description: 'The most important piece.', strategy: 'Castle early for safety.' },
  { name: 'Queen', symbol: '♕', value: 9, movePattern: 'Any number of squares rank, file, or diagonal.', description: 'The most powerful piece.', strategy: 'Don\'t bring it out too early.' },
  { name: 'Rook', symbol: '♖', value: 5, movePattern: 'Any number of squares rank or file.', description: 'A major piece.', strategy: 'Occupy open files.' },
  { name: 'Bishop', symbol: '♗', value: 3, movePattern: 'Any number of squares diagonally.', description: 'A minor piece.', strategy: 'Control long diagonals.' },
  { name: 'Knight', symbol: '♘', value: 3, movePattern: 'L-shape jump.', description: 'The unique jumper.', strategy: 'Look for central outposts.' },
  { name: 'Pawn', symbol: '♙', value: 1, movePattern: 'One square forward, capture diagonally.', description: 'The soul of chess.', strategy: 'Pawn structure is everything.' }
];
