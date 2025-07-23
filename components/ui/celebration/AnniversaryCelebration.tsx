"use client";

import styles from "./AnniversaryCelebration.module.css";
import { CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AnniversaryCelebration() {
  return (
    <div className={styles.heartCard}>
      <CardHeader>
        <CardTitle className="text-center text-2xl text-white">Hello My Girl!</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4 text-white">
        <p>Special gift for you.</p>
      </CardContent>
      <CardFooter className="flex justify-center">
            <Link href={"/anni-lock"} ><Button className="px-8 py-4 text-lg mt-10">Start!</Button></Link>
        </CardFooter>
    </div>
  );
}