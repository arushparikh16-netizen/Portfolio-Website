import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple lerp used for magnetic button / cursor-follow interactions
export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}
