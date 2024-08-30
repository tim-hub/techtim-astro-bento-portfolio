import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeClassNamesSafely(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
