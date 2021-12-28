import Head from "next/head";
import Layout, { siteTitle } from "./components/layout";
import { getSortedPostsData } from "./lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>I love React. I love Next.js</p>
        <p>
          This is a sample website - you will be building a site like this on
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        </p>
      </section>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
