import React from "react";

type Props = { initialCount?: number };

type State = { count: number };

export class CounterClass extends React.Component<Props, State> {
  state = { count: this.props.initialCount || 0 };

  handleClear = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        current count: {this.state.count}
        <br />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc count
        </button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
