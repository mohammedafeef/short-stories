import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Story from "../components/Story";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Story | Bite</title>
        <meta name="description" content="all stories list" />
      </Head>
      <h1 className={styles.appTitle}>Short Bite</h1>
      <div className={styles.storyContainer}>
        <Story
          title={"Ammayum Muyalum"}
          author={"Simham"}
          body={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          }
        />
        <Story
          title={"Ammayum Muyalum"}
          author={"Simham"}
          body={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          }
        />
      </div>
    </div>
  );
};

export default Home;
