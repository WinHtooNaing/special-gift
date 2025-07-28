"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heart, Calendar, Puzzle, Bookmark, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoveMenuPage() {
  const router = useRouter();

  const menuItems = [
    {
      title: "Our Memories",
      description: "Every precious moment with you 💖",
      icon: <Bookmark className="w-6 h-6 text-pink-500" />,
      action: () => router.push("/memories"),
    },
    {
      title: "Love Puzzle",
      description: "Pieces of our hearts combined 💖",
      icon: <Puzzle className="w-6 h-6 text-pink-500" />,
      action: () => router.push("/puzzle"),
    },
    {
      title: "Love Calendar",
      description: "Counting days of our love story 💖",
      icon: <Calendar className="w-6 h-6 text-pink-500" />,
      action: () => router.push("/calendar"),
    },
    {
      title: "Love Notes",
      description: "Sweet messages just for you 💖",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      action: () => router.push("/notes"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-10 to-pink-50 p-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-700 mb-2">
          Menu of Our Love
        </h1>
        <p className="text-lg text-pink-600">Together forever 💖</p>
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all border-pink-200 bg-white/50 backdrop-blur-sm"
            onClick={item.action}
          >
            <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
              {item.icon}
              <CardTitle className="text-pink-700">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-pink-600">{item.description}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="text-pink-600 border-pink-300 hover:bg-pink-50 cursor-pointer"
              >
                Open
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-2xl mx-auto mt-16 text-center">
        <p className="text-pink-500">Every day with you is a new adventure</p>
      </div>
    </div>
  );
}
