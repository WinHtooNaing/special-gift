// app/love-puzzle/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/memories/our6.jpg";
type Piece = {
  id: number;
  row: number;
  col: number;
  backgroundPosition: string;
};

const rows = 3;
const cols = 3;

function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export default function LovePuzzlePage() {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const temp: Piece[] = [];
    let id = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        temp.push({
          id: id++,
          row,
          col,
          backgroundPosition: `-${col * 100}px -${row * 100}px`,
        });
      }
    }

    setPieces(shuffle(temp));
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: number) => {
    const draggedId = parseInt(e.dataTransfer.getData("text/plain"));
    const newPieces = [...pieces];
    const fromIndex = newPieces.findIndex((p) => p.id === draggedId);
    const toIndex = newPieces.findIndex((p) => p.id === targetId);

    [newPieces[fromIndex], newPieces[toIndex]] = [
      newPieces[toIndex],
      newPieces[fromIndex],
    ];

    setPieces(newPieces);

    // Check for win
    const isWin = newPieces.every((p, i) => p.row * cols + p.col === i);
    if (isWin) setCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-2">
        ❤️ Love Puzzle ❤️
      </h1>
      <p className="text-pink-700 mb-6">
        Drag and drop the pieces to complete our love!
      </p>

      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${cols}, 100px)` }}
      >
        {pieces.map((piece, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("text/plain", piece.id.toString())
            }
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, piece.id)}
            className="w-[100px] h-[100px] border border-pink-300 cursor-grab"
            style={{
              backgroundImage: `url(${Logo.src})`,
              backgroundSize: `${cols * 100}px ${rows * 100}px`,
              backgroundPosition: piece.backgroundPosition,
            }}
          />
        ))}
      </div>

      {completed && (
        <div className="mt-6 text-green-600 text-xl font-semibold animate-bounce">
          🎉 You completed the puzzle! ❤️
        </div>
      )}
    </div>
  );
}
