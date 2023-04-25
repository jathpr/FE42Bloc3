import { ButtonHamburger } from "./HW5/ButtonHamburger";
import { Tabs } from "./HW5/Tabs";
import { Title } from "./HW5/Title";
import { User } from "./HW5/User";
import { PostsList } from "./HW6/PostsList";

const posts = [
  {
    "id": 1,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
    "text": "фыв",
    "date": "2021-10-06",
    "lesson_num": 123,
    "title": "фывфывфыв",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 7
  },
  {
    "id": 2,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
    "text": "Text",
    "date": "2021-10-07",
    "lesson_num": 48,
    "title": "Title",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 7
  },
  {
    "id": 3,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
    "text": "Hello!",
    "date": "2021-10-07",
    "lesson_num": 23,
    "title": "B-52!",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 97
  },
  {
    "id": 4,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
    "text": "Hello!",
    "date": "2021-10-07",
    "lesson_num": 23,
    "title": "B-52!",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 97
  },
  {
    "id": 5,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
    "text": "Hello!",
    "date": "2021-10-07",
    "lesson_num": 23,
    "title": "B-52!",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 97
  },
  {
    "id": 6,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
    "text": "Hello!",
    "date": "2021-10-07",
    "lesson_num": 23,
    "title": "B-52!",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 97
  }
]

export const App = () => (

  <div>
    {/* <Title>Sign In</Title>
    <User username="Artem Malkin"></User> */}
    <ButtonHamburger handleClick={() => console.log('Ok')} collapsed></ButtonHamburger>
    <ButtonHamburger handleClick={() => console.log('Ok')} ></ButtonHamburger>
    {/* <Tabs tabsArr={['All', 'My favorites', 'Popular']} activeTab="All" disabledTabs={['Popular']} /> */}
    {/* <Tabs tabsArr={['All', 'My favorites', 'Popular']} activeTab="My favorites" /> */}
    <PostsList posts={posts} />
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
