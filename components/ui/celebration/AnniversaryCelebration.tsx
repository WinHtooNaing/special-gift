"use client";

import styles from "./AnniversaryCelebration.module.css";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AnniversaryCelebration() {
  return (
    <div className={styles.heartCard}>
      <div className={styles.heartContent}>
        <h1 className="text-white text-center text-xl font-bold drop-shadow-lg mb-2">
          Hello My Girl!💖
        </h1>
        <p className="text-white text-lg font-light mb-4 drop-shadow-md text-center">
          special gift for you!
        </p>
        <Link
          href={"/anni-lock"}
          className="flex justify-center cursor-pointer"
        >
          <Button className="px-8 py-4 text-lg mt-2 bg-white text-pink-500 font-semibold shadow-lg hover:bg-pink-100 transition cursor-pointer">
            Start!
          </Button>
        </Link>
      </div>
    </div>
  );
}
