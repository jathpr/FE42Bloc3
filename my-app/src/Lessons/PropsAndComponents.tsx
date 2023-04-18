import React from "react";
import { ReactNode } from "react";


type Props = { example: number }

export const Lesson = (props: Props) => {
    return <div>
        <p> I LOVE REACT + {props.example}</p>
    </div>
};

// те же компоненты, только выше функциональный, а ниже классовый

export class LessonComponent extends React.Component<Props> {
    render() {
        return <div>
            <p> I LOVE REACT + {this.props.example}</p></div>
    }
}

//11 строка эквивалентна 3 и 5, если их деструктуризировать
export const Ex = ({ children, name, age }: { children?: ReactNode, name: string, age: number }) => (
    <div>{children} HAHA my name {name} and my age {age}</div>
);


