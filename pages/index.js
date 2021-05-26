import Head from "next/head";
import { useAuth } from "../lib/auth";
import styles from "../styles/Home.module.css";

export default function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Feedback !</h1>
        {auth.user ? (
          <div className={styles.description}>
            Current user: <span>{auth?.user?.email}</span>
          </div>
        ) : (
          ""
        )}
        {auth.user ? (
          ""
        ) : (
          <button onClick={(e) => auth.signinWithGithub()}>
            Sign In with Github
          </button>
        )}
        <button onClick={(e) => auth.signinWithGoogle()}>
          Sign In with Google
        </button>
        {auth?.user && (
          <button onClick={(e) => auth.signout()}>Sign out</button>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
  console.log(auth);
}
