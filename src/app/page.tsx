import RunningText from "./components/RunningText";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <RunningText lng="EN" text="CONSCIENTIOUSNESS" />
    </main>
  );
}
