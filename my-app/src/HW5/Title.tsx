import { ReactNode } from "react"
import styles from "./css/Title.module.css";

type Props = {
   children: ReactNode
}

export const Title = ({ children }: Props) => (
   <div className={styles.title}>
      <p className={styles.text}>{children}</p>
   </div>
)