import { ReactNode, useContext } from "react"
import styles from "../css/Title.module.css";
import { ThemeContext } from "./Context/themeContext";

type Props = {
   children: ReactNode
}

export const Title = ({ children }: Props) => {

   const theme = useContext(ThemeContext)

   const textNode = theme === 'light' ? <h2 className={styles.text}>{children}</h2> : <h2 className={`${styles.text} ${styles['dark-theme-text']}`}>{children}</h2>

   return (
      <div className={styles.title}>

         {textNode}
      </div>
   );
}