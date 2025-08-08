import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={"inputs"}>
          <input name="date" type="date"></input>
          <div className={"notes"}>
            <div className={"notes__element"}>
              <input type="text"></input>
              <select>Select Icon</select> 
            </div>
            <button>Add Note</button>
          </div>
          <div className={"image-upload"}>
            <label htmlFor="notes-image">Add Image</label>
            <input id="notes-image" name="notes-image" type="file" ></input>
          </div>
        </div>
        
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
