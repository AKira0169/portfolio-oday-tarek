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
import { FaBars, FaTimes } from "react-icons/fa";

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
      className={`relative flex items-center justify-center rounded-full border border-neutral-700 bg-[#060010] shadow-md ${className}`}
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
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 10 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute top-1/2 left-full z-50 ml-1 w-fit -translate-y-1/2 rounded-sm border border-neutral-700 bg-[#060010] px-1.5 py-0.5 text-xs whitespace-pre text-white shadow-md`}
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
  position = "left",
  baseItemSize = 40,
}: VerticalDockProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isHovered = useMotionValue(0);

  // Position styles based on the position prop
  const positionStyles =
    position === "left"
      ? {
          left: 0,
          borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }
      : {
          right: 0,
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        };

  // Toggle menu expansion
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Burger menu toggle button - positioned near the dock */}
      <motion.div
        className={`fixed top-[28%] z-50 m-0 flex h-10 cursor-pointer items-end justify-end rounded-tl-md rounded-bl-md bg-white p-0 text-black shadow-lg ${isExpanded ? "right-[-20px] w-20" : "right-[-4px] w-12"}`}
        onClick={toggleMenu}
        animate={{
          scale: 0.5, // shrink when closed
          x: isExpanded ? 0 : 15, // push into the right when closed
        }}
        transition={{ type: "tween", stiffness: 300, damping: 20 }}
      >
        {isExpanded ? (
          <FaTimes className="h-full w-full" />
        ) : (
          <FaBars className="h-full w-full" />
        )}
      </motion.div>

      {/* Vertical dock - hidden by default, shown when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, [position]: -50 }}
            animate={{ opacity: 1, [position]: 0 }}
            exit={{ opacity: 0, [position]: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${className} fixed top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 rounded-tl-md rounded-bl-md border bg-white px-1 py-2 shadow-lg`}
            style={{
              ...positionStyles,
              height: "auto",
              width: "auto",
            }}
            onMouseEnter={() => isHovered.set(1)}
            onMouseLeave={() => isHovered.set(0)}
            role="toolbar"
            aria-label="Application dock"
          >
            {items.map((item, index) => (
              <VerticalDockItem
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsExpanded(false); // Close menu after clicking an item
                }}
                className={`${item.className} background-transparent cursor-pointer border-0`}
                isHovered={isHovered}
                baseItemSize={baseItemSize}
              >
                <VerticalDockIcon>{item.icon}</VerticalDockIcon>
                <VerticalDockLabel>{item.label}</VerticalDockLabel>
              </VerticalDockItem>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile when menu is expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/20"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
