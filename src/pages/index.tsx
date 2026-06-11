import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import heroImg from "@/assets/hero.png";
import { db } from "../services/firebaseConection";
import { collection, getDocs } from "firebase/firestore";

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma simples </title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContant}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas"
            src={heroImg}
            priority
          />
        </div>

        <h1 className={styles.title}>
          Sistema feito para você organizar
          <br />
          suas tarefas de forma simples e eficiente.
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+{posts} posts</span>
          </section>
          <section className={styles.box}>
            <span>+{comments} comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const comementRef = collection(db, "comments");
  const postRef = collection(db, "tarefas");

  const commentSnapshot = await getDocs(comementRef);
  const postSnapshot = await getDocs(postRef);

  return {
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    revalidate: 60,
  };
};
