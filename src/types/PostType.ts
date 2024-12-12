interface PostType {
  post_id: number;
  title: string;
  author: string;
  date: string;
  hits: number;
  content: string;
  type: string;
  comment_count: number;
}

export default PostType;
