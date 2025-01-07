export interface SiteContent {
  id: string;
  section: string;
  content: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    backgroundImage?: string;
    [key: string]: any;
  };
  created_at: string;
  updated_at: string;
}

export interface Album {
  id: string;
  title: string;
  release_date: string;
  cover_image: string | null;
  created_at: string;
  updated_at: string;
}

export interface VisualEditing {
  data: {
    [key: string]: any;
  };
  component: string;
}