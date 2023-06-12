import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Content } from "../Content/Content";
import style from "./Mainpage.module.css"
export const Mainpage = () => {
  return (
    <div className={style.container}>
    <div className={style.wrapper}>
      <Header />
      <Sidebar />
      <Content />
      </div>
    </div>
  );
};
