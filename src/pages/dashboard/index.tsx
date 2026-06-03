import { GetServerSideProps } from "next";
import style from "./style.module.css";
import Head from "next/head";

import { getSession } from "next-auth/react";

export default function Dashboard() {
  return (
    <>
      <div className={style.container}>
        <Head>
          <title>Meu painel de tarefas</title>
        </Head>

        <h1 className={style.title}>Qual sua tarefa?</h1>
        <input className={style.input} placeholder="Digite sua tarefa..." />
        <div>
          <button className={style.button}></button>
          <label className={style.label}>Deixar tarefa pública</label>
        </div>
        <button className={style.button}>Registrar</button>
      </div>

      <div className={style.containerTarefas}>
        <h1 className={style.titleTarefas}>Minhas Tarefas</h1>
        <div className={style.task}>
          <input className={style.taskTitle} />
          <input className={style.taskTitle} />
          <input className={style.taskTitle} />
        </div>
      </div>
    </>
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
