import { Button } from "./Button/ButtonBurger"
import { Title } from "./Title/Title";
import style from "./Button/ButtonBurger.module.css"
import { Tabs, tabNames } from "./Tabs/Tabs";
import margin from "./HW-37.module.css"

export const Hw37 = () => (
    <div className={margin.div}>
        <Title />
        <div className={style.buttonDiv}>
            <Button touched handleClick={() => console.log('OK')}/>
        </div>
        <Tabs active tabs={tabNames} activeTabName={'All'}/>
    </div>
)