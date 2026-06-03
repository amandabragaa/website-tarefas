import Head from "next/head";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import heroImg from "@/assets/hero.png";

export default function Home() {
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
            <span>+ 7 mil posts</span>
          </section>
          <section className={styles.box}>
            <span>+ 10 mil comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}
