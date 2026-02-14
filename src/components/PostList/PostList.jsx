// add styles here
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  if (!posts.length) {
    return null;
  }

  return (
    <>
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </>
  );
};
