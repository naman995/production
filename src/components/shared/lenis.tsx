"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css';

const SmoothScroll: React.FC = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        lenis.on("scroll", (e: unknown) => {
            console.log("Lenis scroll:", e);
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
