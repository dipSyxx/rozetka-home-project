
import styles from '@/pages/index.module.css'
import { TestSassStyles } from "../elements/TestSassStyles";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}></div>
      <TestSassStyles />
    </div>
  )
}
