import { GetServerSideProps } from 'next';
import { getPostById } from '../../services/api/wordpress';
import PostDetail from '../../components/PostDetail';
import Layout from '../../app/layout';

interface PostPageProps {
  post: {
    title: { rendered: string };
    content: { rendered: string };
    featuredMedia: string | null;
  };
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <Layout>
      <PostDetail post={post} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const post = await getPostById(Number(id));

  return {
    props: {
      post,
    },
  };
};

export default PostPage;

