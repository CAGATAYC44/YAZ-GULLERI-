"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  variant?: "up" | "right";
  delay?: boolean;
  className?: string;
};

export default function RevealOnScroll({
  children,
  variant = "up",
  delay = false,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = variant === "up" ? "reveal-up" : "reveal-right";

  return (
    <div
      ref={ref}
      className={[
        baseClass,
        visible ? "is-visible" : "",
        delay ? "reveal-delay" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
