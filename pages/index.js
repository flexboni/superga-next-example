import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "src/lib/posts";
import Layout, { siteTitle } from "src/components/layout";
import Date from "src/components/common/date";

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
        <p>I love React. I love Next.js!</p>
        <p>
          This is a sample website - you will be building a site like this on
          <a href="https://nextjs.org/learn">our Next.js tutorial!</a>
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
