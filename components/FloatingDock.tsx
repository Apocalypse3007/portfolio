/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";
export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactElement; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactElement; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactElement; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  // const ref = useRef<HTMLDivElement>(null);
  // const distance = useTransform(mouseX, (val) => {
  //   const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
  //   return val - bounds.x - bounds.width / 2;
  // });
  // const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  // const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  // const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  // const heightTransformIcon = useTransform(
  //   distance,
  //   [-150, 0, 150],
  //   [20, 40, 20],
  // );
  // const width = useSpring(widthTransform, {
  //   mass: 0.1,
  //   stiffness: 150,
  //   damping: 12,
  // });
  // const height = useSpring(heightTransform, {
  //   mass: 0.1,
  //   stiffness: 150,
  //   damping: 12,
  // });
  // const widthIcon = useSpring(widthTransformIcon, {
  //   mass: 0.1,
  //   stiffness: 150,
  //   damping: 12,
  // });
  // const heightIcon = useSpring(heightTransformIcon, {
  //   mass: 0.1,
  //   stiffness: 150,
  //   damping: 12,
  // });

  // const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed left-1/2 -translate-x-1/2 bottom-6 z-50",
        "flex items-center gap-4 px-6 py-2 rounded-full bg-neutral-900/90 shadow-lg",
        className
      )}
    >
      {items.map((item, idx) => (
        <React.Fragment key={item.title}>
          <IconContainer
            mouseX={mouseX}
            {...item}
            icon={React.cloneElement(item.icon as React.ReactElement, { className: "text-white w-6 h-6" })}
          />
          {/* Example divider after 2nd icon */}
          {/* {idx === 1 && <div className="h-6 w-px bg-neutral-700 mx-2" />} */}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactElement;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-900 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-10 left-1/2 w-auto rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-white shadow-lg z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {React.isValidElement(icon)
            ? React.cloneElement(icon, {
                // Ensure icon props are properly typed by checking for className property
                className: [
                  (icon.props as { className?: string })?.className || "",
                  "text-white w-8 h-8"
                ].join(" ").trim()
                // Don't spread icon.props since it may not be an object type
              })
            : icon}
        </motion.div>
      </motion.div>
    </a>
  );
} 