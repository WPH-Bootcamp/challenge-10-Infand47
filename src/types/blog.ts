export interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
  headline?: string;
  avatarUrl?: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
  author: User;
  createdAt: string;
  likes: number;
  comments: number; // Count from backend (may be inaccurate, use /comments/{postId} for actual count)
}

export interface PostsResponse {
  data: Post[];
  total: number;
  page: number;
  lastPage: number;
}

export interface PostsByUserResponse extends PostsResponse {
  user: User;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  author: User;
  post?: { id: number };
}

export interface LikeUser {
  id: number;
  name: string;
  headline?: string;
  avatarUrl?: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  username: string;
}
