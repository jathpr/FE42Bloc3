import { ReactNode } from "react"
import styles from "../css/Title.module.css";

type Props = {
   children: ReactNode
}

export const Title = ({ children }: Props) => (
   <div className={styles.title}>
      <h2 className={styles.text}>{children}</h2>
   </div>
)