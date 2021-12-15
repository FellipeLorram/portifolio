import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { SectionDivider } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <SectionDivider />
      <Projects />
      <SectionDivider />
    </Layout>
  );
};

export default Home;
