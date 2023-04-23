import { ButtonHamburger } from "./HW5/ButtonHamburger";
import { Tabs } from "./HW5/Tabs";
import { Title } from "./HW5/Title";
import { User } from "./HW5/User";

export const App = () => (
  <div>
    <Title>Sign In</Title>
    <User username="Artem Malkin"></User>
    <ButtonHamburger handleClick={() => console.log('Ok')} collapsed></ButtonHamburger>
    <ButtonHamburger handleClick={() => console.log('Ok')} ></ButtonHamburger>
    <Tabs tabsArr={['All', 'My favorites', 'Popular']} activeTab="All" disabledTabs={['Popular']} />
    {/* <Tabs tabsArr={['All', 'My favorites', 'Popular']} activeTab="My favorites" /> */}
  </div>
  // <div className="App">    
  //   <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  // </div>
);


export default App;
