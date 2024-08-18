import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/background";
export default function Home() {
  return (
    <div className="w-full h-full text-white relative overflow-hidden">
      <div className="relative flex h-full top-0 w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />

        <div
          className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-emerald-500/30 to-transparent pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(45,190,96,0.2), transparent 100%)",
            filter: "blur(100px)",
            transform: "translateY(-50%)",
          }}
        />

        <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The documentation
            <br />
            you want, effortlessly
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Meet the modern standard for public facing documentation. Beautiful
            out of the box, easy to maintain, and optimized for user engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="docs/getting-started/introduction"
              className={buttonVariants({ size: "lg" })}
            >
              Get Started
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
