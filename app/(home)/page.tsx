import type { Metadata } from 'next';
import Hero from './Hero';
import TrustedBy from './TrustedBy';
import Features from './Features';
import BlogPreview from './BlogPreview';
import Contact from './Contact';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to Articul8 - The GenAI platform that brings order to chaos.',
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Features />
      <BlogPreview />
      <Contact />
    </div>
  );
};

export default HomePage;
