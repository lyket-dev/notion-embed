import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          This is a Notion Lyket embed widget. Check how to add this to your
          Notion project{" "}
          <a href="https://github.com/lyket-dev/notion-embed">here</a>
        </p>
      </main>
    </div>
  );
}
