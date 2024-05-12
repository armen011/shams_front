import { TPage } from '@/types/global.d';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const merge = (...className: ClassValue[]) => twMerge(clsx(className));

export const getPageTitle = (segment: string | null) => {
  if (!segment) return null;
  const title = Object.entries(TPage).find(
    ([, value]) => value === segment
  )?.[0];

  if (!title) return null;

  return title;
};
