import About from '@/components/About';
import Layout from '@/components/Layout';
import Projects from '@/components/Projects';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { getGitHubData } from '../lib/github';
import type { RepositoryConnection } from '../types/github';

type Props = {
  repositories: RepositoryConnection;
};

const Home: NextPage<Props> = ({ repositories }) => {
  return (
    <>
      <NextSeo
        title="Matt Simpson - Developer, tech enthusiast, creator"
        twitter={{
          handle: '@msmps_',
          cardType: 'summary_large_image'
        }}
        description="Hey I'm Matt! I'm a developer, tech enthusiast, and creator."
      />

      <Layout>
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects repositories={repositories} />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const githubContent = await getGitHubData();
  const repositories = githubContent?.user?.repositories || [];

  return {
    props: {
      repositories
    }
  };
}

export default Home;
