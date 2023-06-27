import { Trends } from "../Trends/Trends";
import style from "./Sidebar.module.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <nav>
        <ul>
            <li className={style.li}><Link to="/"><span className={style.a}><svg className={style.svg} width="18" height="18" viewBox="0 0 18 18">
<path fill-rule="evenodd" d="M11.4537 0.803197L16.4558 4.49793C17.4198 5.1956 17.9934 6.31112 18 7.50109V14.1895C17.938 16.3342 16.1566 18.0268 14.0116 17.979H3.99789C1.8492 18.032 0.0619475 16.338 0 14.1895V7.50109C0.00659331 6.31112 0.580187 5.1956 1.54421 4.49793L6.54632 0.803197C8.00682 -0.267732 9.99318 -0.267732 11.4537 0.803197ZM4.73684 13.9716H13.2632C13.6556 13.9716 13.9737 13.6535 13.9737 13.2611C13.9737 12.8687 13.6556 12.5506 13.2632 12.5506H4.73684C4.34443 12.5506 4.02632 12.8687 4.02632 13.2611C4.02632 13.6535 4.34443 13.9716 4.73684 13.9716Z" fill="#7B61FF"/>
</svg> Home </span></Link></li>
            <li className={style.li}><Link to="/trends"><span className={style.a}><svg className={style.svg} width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.0513 0L5.6813 2.8C4.70235 4.80035 3.39031 6.61962 1.8013 8.18L1.6213 8.35C0.600764 9.34076 0.0176634 10.6977 0.00130184 12.12V12.3C-0.025728 15.0851 1.63391 17.6101 4.2013 18.69L4.4613 18.8C6.14517 19.5152 8.04744 19.5152 9.7313 18.8H9.7913C12.3779 17.6762 14.0375 15.1099 14.0013 12.29V7.95C13.1393 9.91853 11.5739 11.4946 9.6113 12.37C9.6113 12.37 9.6113 12.37 9.5513 12.37C9.4913 12.37 8.7913 12.66 8.4913 12.37C8.22335 12.0989 8.19769 11.6712 8.4313 11.37L8.5013 11.32H8.5513C10.8471 9.57498 11.3823 6.34172 9.7713 3.95C8.4713 1.97 7.0513 0 7.0513 0Z" fill="#80858B"/>
</svg>
 Trends</span></Link></li>
            <li className={style.li}><Link to="/filter"><span className={style.a}><svg className={style.svg} width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.77 17.7843L7.48 14.4943C7.07224 14.1843 6.50776 14.1843 6.1 14.4943L1.77 17.7843C1.45424 18.0381 1.02377 18.0959 0.652275 17.9343C0.280782 17.7727 0.0295672 17.4184 0 17.0143V2.95431C0.0387838 2.12998 0.404652 1.35513 1.01656 0.80141C1.62847 0.247691 2.4359 -0.0391904 3.26 0.0043149H10.26C11.0891 -0.0335703 11.8987 0.262563 12.5077 0.826425C13.1166 1.39029 13.4741 2.17479 13.5 3.00431V17.0143C13.4611 17.4038 13.2163 17.7426 12.8586 17.9017C12.501 18.0609 12.0855 18.0161 11.77 17.7843Z" fill="#80858B"/>
</svg>
 Filter</span></Link></li>
            <li className={style.li}><img src="./Images/Icons/1615049.svg" width="14" height="19"></img><Link to="/settings"><span className={style.a}>  Settings</span></Link></li>
        </ul>
      </nav>
    </div>
  );
};
