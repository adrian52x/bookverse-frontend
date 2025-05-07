export interface Genre {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  user: User;
  coverImage: string;
  status: Status;
  createdAt: string;

}

export type Status = 'to_read' | 'in_progress' | 'read';

export interface User {
    id: number;
    username: string;
    password: string;
}