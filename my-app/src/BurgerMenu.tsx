import { ReactNode } from "react";
import style from "./BurgerMenu.module.css"

type Props = {
    enabled: boolean,
    handleclick: () => void
}

export const Burger = ({ enabled, handleclick }: Props) => (
  <button className={style.burger} disabled={!enabled} onClick={handleclick}>
    <div className={style.line}>
      <span className={style.line_first}></span>
      <span className={style.line_second}></span>
      <span className={style.line_third}></span>
      <span className={style.line_forth}></span>
    </div>
  </button>
);