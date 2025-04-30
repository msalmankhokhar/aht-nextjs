"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ExpandableSectionProps = {
  children: ReactNode;
  collapsedHeight?: number; // px
  contentWrapperClassName?: string;
};

export default function ExpandableSection({
  children,
  collapsedHeight = 200,
  contentWrapperClassName
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <section className="relative px-cont py-14 border-t border-b border-brand-secondary-100 bg-gray-50">
      <motion.div
        animate={{
          height: expanded ? contentHeight : collapsedHeight,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden relative"
      >
        <div className={`${contentWrapperClassName}`} ref={contentRef}>{children}</div>

        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </motion.div>

      <div className="mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-brand-primary underline font-semibold cursor-pointer outline-none"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
