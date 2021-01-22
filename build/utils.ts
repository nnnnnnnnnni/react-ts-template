import path from 'path';

export const resolve =  (dir: string): string => {
  return path.join(__dirname, '..', dir)
}