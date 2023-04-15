import { Button } from "./buttonBurger"
import { Title } from "./title";
import style from "./buttonBurger.module.css"
import { Tabs } from "./tabs";

export const Hw37 = () => (
    <div className={style.div}>
        <Title />
        <div className={style.buttonDiv}>
            <Button touched handleClick={() => console.log('OK')}>
                <div>
                    <hr className={style.burgerSpan}></hr>
                    <hr className={style.burgerSpan}></hr>
                    <hr className={style.burgerSpan}></hr>
                </div>
            </Button>
            <Button handleClick={() => console.log('OK')}>
                <div>
                    <span className={style.closeSpan}>✖</span>
                </div>
            </Button>
        </div>
        <Tabs>
            <div>
                <ul>
                    <li>
                        <p>All</p></li>
                    <li>
                        <p>My Favorites</p></li>
                    <li>
                        <p>Popular</p></li>
                </ul>
            </div>
        </Tabs>
    </div>
)