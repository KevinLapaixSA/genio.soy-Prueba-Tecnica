import HomePage from '../components/HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Genio.soy Post',
  description: 'Si no está en Internet, no existe.',
};

const Page = () => {
  return <HomePage />;
};

export default Page;
