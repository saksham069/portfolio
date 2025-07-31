export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  links?: Record<string, string | undefined>;
}
