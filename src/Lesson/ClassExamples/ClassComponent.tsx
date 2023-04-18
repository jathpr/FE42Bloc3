import React from "react";

type Props = {
  children?: React.ReactNode;
  name?: string;
};

export class ClassComponent extends React.Component<Props> {
  //body of class
  render() {
    // body of view
    return (
      <div>
        <span>hello: {this.props.name}</span>
        <br />
        {this.props.children}
      </div>
    );
  }
}
