import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getPageSlugs(directory: string) {
  const postsDirectory = join(process.cwd(), directory);
  return fs.readdirSync(postsDirectory);
}

export function getPageBySlug(
  directory: string,
  slug: string,
  fields: string[] = [],
) {
  const postsDirectory = join(process.cwd(), directory);

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPages(directory: string, fields: string[] = []) {
  const slugs = getPageSlugs(directory);
  const posts = slugs
    .map((slug) => getPageBySlug(directory, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
