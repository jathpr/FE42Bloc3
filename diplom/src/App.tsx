import { MainPage } from './Components/MainPage/MainPage';
import { SignPage } from './Components/SignPage/SignPage';
import './App.css';
import { SideBar } from './Components/SideBar/SideBar';
import { Article } from './Components/Article/Article';
import { Routes, Route } from 'react-router';
import { Auth } from './Components/Auth/Auth';
import { Registration } from './Components/Registration/Registration';
import { Header } from './Components/Header/Header';

export function App() {
  return (
<>
        <Header/>
        <SideBar/>
        <Article>
        {/* <Routes>
                <Route path='/auth' element={<Auth />} />
                <Route path='/reg' element={<Registration />} />
            </Routes> */}
        </Article>
      {/* <SignPage /> */}
      {/* <Header/> */}
</>
  );
}
