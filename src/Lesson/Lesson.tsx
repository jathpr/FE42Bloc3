import { ClassComponent } from "./ClassExamples/ClassComponent";
import { FunctionComponent } from "./ClassExamples/FunctionComponent";
import { CounterClass } from "./Counter/CounterClass";
import { CounterFunction } from "./Counter/CounterFunction";
import { HWFunc } from "./HW/HWFunc";
import { Inputs } from "./Inputs";
import { Posts } from "./Posts";
import { WrongStateExample } from "./WrongStateExample";

export const Lesson = () => {
  const arr = [1, 2, 3, 4, 1];
  const posts = [
    {
      id: 1,
      image:
        "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
      text: "фыв",
      date: "2021-10-06",
      lesson_num: 123,
      title: "фывфывфыв",
      description:
        "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 7,
    },
    {
      id: 2,
      image:
        "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
      text: "Text",
      date: "2021-10-07",
      lesson_num: 48,
      title: "Title",
      description:
        "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 7,
    },
    {
      id: 3,
      image: "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
      text: "Hello!",
      date: "2021-10-07",
      lesson_num: 23,
      title: "B-52!",
      description:
        "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 97,
    },
  ];
  return (
    <>
      <Posts />
    </>
  );
};
