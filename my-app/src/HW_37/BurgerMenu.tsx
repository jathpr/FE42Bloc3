import style from "./BurgerMenu.module.css";
import { useState } from "react";

type Props = {
  enabled: boolean;
};

export const ButtonComponent = ({enabled}: Props) => {

  const [isEnabled, setIsEnabled]=useState(enabled)
  
  const click = () => {
    setIsEnabled(!isEnabled)
  };

    return (
      <button className={style.burger} onClick={click}>
        {isEnabled ? <Burger /> : <ClosedButton />}
      </button>
    );
  }


const Burger = () => (
  <div className={style.line}>
    <span className={style.line_first}></span>
    <span className={style.line_second}></span>
    <span className={style.line_third}></span>
    <span className={style.line_forth}></span>
  </div>
);

const ClosedButton = () => (
  <div className={style.button_close}>
    <span className={style.close_line_first}></span>
    <span className={style.close_line_second}></span>
  </div>
);


// export class ButtonComponent ({enabled, handleClick}: Props) =>{
//   const [isCollapsed, setIsCollapsed] = useState(collapsed)
//   const click = () => {
//     handleClick()
//     setIsCollapsed(!isCollapsed)
//   };

// if (!isCollapsed){
//     return (
//       <button className={style.burger} onClick={click}>
//       </button>
//     );
// }
// }