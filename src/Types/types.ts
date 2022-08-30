export interface Profile {
  id: number;
  created_at: string;
  user_id: string;
  username: string;
  karma: number;
  avatar: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  user_id: string;
  type: string;
  visability: boolean;
  datetime: string;
}

