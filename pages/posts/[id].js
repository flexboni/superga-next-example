import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getAllPostIds, getPostData } from "src/lib/posts";
import Layout from "src/components/layout";
import Date from "src/components/date";

export default function Post({ postData }) {
  const router = useRouter();

  useEffect(() => {
    const getText = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();

      alert(data.text);
    };

    getText();
  }, []);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths: [{ params: { id: "ssg-ssr" } }],
    fallback: false, // 404
    // fallback: true, // router.isFallback
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
