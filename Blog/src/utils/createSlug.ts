import slugify from "slugify";

export function createSlug(value: string): string {
  return slugify(value);
}
