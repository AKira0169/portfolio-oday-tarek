/*
	Vertical Dock component for mobile devices
*/

"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  type SpringOptions,
  AnimatePresence,
} from "motion/react";
import React, { Children, cloneElement, useEffect, useState } from "react";

export type VerticalDockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type VerticalDockProps = {
  items: VerticalDockItemData[];
  className?: string;
  position?: "left" | "right";
  baseItemSize?: number;
  spring?: SpringOptions;
};

type VerticalDockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isHovered: MotionValue;
  baseItemSize: number;
};

function VerticalDockItem({
  children,
  className = "",
  onClick,
  isHovered,
  baseItemSize,
}: VerticalDockItemProps) {
  return (
    <motion.div
      style={{
        width: baseItemSize,
        height: baseItemSize,
      }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className={`relative flex items-center justify-center rounded-full border border-border bg-card/90 shadow-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement<{ isHovered: MotionValue }>, {
          isHovered,
        }),
      )}
    </motion.div>
  );
}

type VerticalDockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

function VerticalDockLabel({
  children,
  className = "",
  ...rest
}: VerticalDockLabelProps) {
  const { isHovered } = rest as { isHovered: MotionValue<number> };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute top-1/2 left-full z-50 ml-2 w-fit -translate-y-1/2 rounded-md border border-border bg-popover px-2 py-1 text-xs whitespace-pre text-popover-foreground shadow-md backdrop-blur-md`}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type VerticalDockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function VerticalDockIcon({ children, className = "" }: VerticalDockIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function VerticalDock({
  items,
  className = "",
  baseItemSize = 44,
}: VerticalDockProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isHovered = useMotionValue(0);

  // Toggle menu expansion
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* FAB Toggle Button - Top Left */}
      <motion.div
        onClick={toggleMenu}
        className={`fixed top-6 left-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-xl ${className}`}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative flex h-6 w-6 flex-col items-center justify-center gap-1.5">
          <motion.span
            className="h-0.5 w-6 rounded-full bg-current"
            animate={{
              rotate: isExpanded ? 45 : 0,
              y: isExpanded ? 8 : 0,
            }}
          />
          <motion.span
            className="h-0.5 w-6 rounded-full bg-current"
            animate={{
              opacity: isExpanded ? 0 : 1,
            }}
          />
          <motion.span
            className="h-0.5 w-6 rounded-full bg-current"
            animate={{
              rotate: isExpanded ? -45 : 0,
              y: isExpanded ? -8 : 0,
            }}
          />
        </div>
      </motion.div>

      {/* Vertical Dock Items - Top Left (below button) */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed top-24 left-6 z-40 flex flex-col items-start gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <VerticalDockItem
                  onClick={() => {
                    item.onClick();
                    setIsExpanded(false);
                  }}
                  className={`${item.className} border-0`}
                  isHovered={isHovered}
                  baseItemSize={baseItemSize}
                >
                  <VerticalDockIcon>{item.icon}</VerticalDockIcon>
                  <VerticalDockLabel>{item.label}</VerticalDockLabel>
                </VerticalDockItem>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[2px]"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
