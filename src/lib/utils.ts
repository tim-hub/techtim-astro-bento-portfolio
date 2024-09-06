import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeClassNamesSafely(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const shuffleArray = (array: Array<any>) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


export const getUserTimeZone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}


export const formateLocalDate = (date: Date, timeZone: string = getUserTimeZone()): string => {
  return new Intl.DateTimeFormat(navigator.language, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: timeZone
  }).format(date);
}
