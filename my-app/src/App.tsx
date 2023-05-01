import { ButtonHamburger } from "./Components/ButtonHamburger";
import { Tabs } from "./Components/Tabs";
import { Title } from "./Components/Title";
import { User } from "./Components/User";
import { PostsList } from "./Components/PostsList";
import { Navigation } from "./Components/Navigation";

export const App = () => (

  <div>
    {/* <Title>Sign In</Title> */}
    {/* <User username="Artem Malkin"></User> */}
    {/* <ButtonHamburger handleClick={() => console.log('Ok')} collapsed></ButtonHamburger> */}
    {/* <Tabs tabsArr={['All', 'My favorites', 'Popular']} activeTab="All" disabledTabs={['Popular']} /> */}
    {/* <Tabs tabsArr={['All', 'My favorites', 'Popular']} activeTab="My favorites" /> */}
    {/* <PostsList /> */}

    <Navigation />
  </div>
);


export default App;
