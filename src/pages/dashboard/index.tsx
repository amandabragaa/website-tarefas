import { GetServerSideProps } from "next";
import style from "./styles.module.css";
import Head from "next/head";

import { getSession } from "next-auth/react";
import { Textarea } from "../../components/textarea";

export default function Dashboard() {
  return (
    <div className={style.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <main className={style.main}>
        <section className={style.content}>
          <div className={style.contentForm}>
            <h1 className={style.title}>Qual sua tarefa?</h1>

            <form>
              <Textarea placeholder="Digite qual sua tarefa..." />
              <div className={style.checkboxArea}>
                <input type="checkbox" className={style.checkbox} />
                <label>Deixar tarefa publica?</label>
              </div>

              <button type="submit" className={style.button}>
                Registrar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
