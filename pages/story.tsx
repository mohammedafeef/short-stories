import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Story from "../components/Story";

type homeP = {
  stories: {
    id: number;
    attributes: {
      title: string;
      author: string;
      body: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
};
const Home: NextPage<homeP> = ({ stories }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Story | Bite</title>
        <meta name="description" content="all stories list" />
      </Head>
      <h1 className={styles.appTitle}>Short Bite</h1>
      <div className={styles.storyContainer}>
        {stories.map((story) => (
          <Story
            title={story.attributes.title}
            author={story.attributes.author}
            body={story.attributes.body}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/stories/");
  const story = await res.json();
  return {
    props: { stories: story.data },
  };
};

export default Home;
