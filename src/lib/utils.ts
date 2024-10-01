import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCollection } from "astro:content";
import { PROFILE } from "@/content/profileData.ts";


/**
 * mergeClassNamesSafely
 * @param inputs
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shuffleArray = (array: Array<any>) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getUserTimeZoneInBrowser = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

const getLocalLanguage = (): string => {
  return PROFILE.language;
}

export const formateLocalDate = (
  date: Date,
  timeZone: string = PROFILE.timezone,
): string => {
  return new Intl.DateTimeFormat(getLocalLanguage(), {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: timeZone,
  }).format(date);
};

export const formateLocalMonth = (
  date: Date,
  timeZone: string = PROFILE.timezone,
): string => {
  return new Intl.DateTimeFormat(getLocalLanguage(), {
    year: "numeric",
    month: "short",
    timeZone: timeZone,
  }).format(date);
};

export const getAndGroupUniqueTags = async (): Promise<Map<string, any[]>> => {
  const allProjects = await getCollection("projects");
  const allExperiences = await getCollection("experiences");
  const books = await getCollection("books");
  const posts = await getCollection("posts");

  const allItems = [...allProjects, ...allExperiences, ...books, ...posts];

  // @ts-ignore
  const uniqueTags: string[] = [
    ...new Set(allProjects.map((post: any) => post.data.tags).flat()),
    ...new Set(allExperiences.map((post: any) => post.data.tags).flat()),
    ...new Set(books.map((post: any) => post.data.tags).flat()),
    ...new Set(posts.map((post: any) => post.data.tags).flat()),
  ];
  const tagItemsMap = new Map<string, any[]>();

  uniqueTags.forEach((tag) => {
    const filteredItems = allItems.filter((item) =>
      item?.data?.tags?.includes(tag),
    );

    tagItemsMap.set(tag, filteredItems);
  });
  return tagItemsMap;
};
