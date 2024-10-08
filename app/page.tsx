import type { Metadata } from 'next';
import ConvertSection from './(home)/ConvertSection';
import Hero from './(home)/Hero';
import InnovationsSection from './(home)/InnovationsSection';
import TrustedBy from './(home)/TrustedBy';
import UnlockSection from './(home)/UnlockSection';

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
      <UnlockSection />
      <InnovationsSection />
      <ConvertSection />
      {/* <Features />
      <BlogPreview />
      <Contact /> */}
    </div>
  );
};

export default HomePage;
