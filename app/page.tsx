import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://charmingbuddiesdogtraining.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Charming Buddies →
        </a>
      </footer>
    </div>
  );
}
