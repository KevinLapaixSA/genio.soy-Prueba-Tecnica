import { GetServerSideProps } from 'next';
import { getPostById } from '../../services/api/wordpress';
import PostDetail from '../../components/PostDetail';
import { Metadata } from 'next';
import '../../app/globals.css'

interface PostPageProps {
  post: {
    title: { rendered: string };
    content: { rendered: string };
    featuredMedia: string | null;
  };
}

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
  return {
    title: `Post ${params.id} - The Genio.soy Post`,
    description: `Detalle del post ${params.id}`,
  };
};

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return <PostDetail post={post} />
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
