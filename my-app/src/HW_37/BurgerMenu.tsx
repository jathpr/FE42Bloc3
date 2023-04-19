import React from "react";
import style from "./BurgerMenu.module.css";

type Props = {
  enabled: boolean;
};

type State = {
  opened: boolean;
};

export class ButtonComponent extends React.Component<Props, State> {
  state = { opened: !!this.props.enabled };
  click = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    return (
      <button className={style.burger} onClick={this.click}>
        {this.state.opened ? <Burger /> : <ClosedButton />}
      </button>
    );
  }
}

const Burger = () => (
  <div className={style.line}>
    <span className={style.line_first}></span>
    <span className={style.line_second}></span>
    <span className={style.line_third}></span>
    <span className={style.line_forth}></span>
  </div>
);

const ClosedButton = () => (
  <div className={style.button_close}>
    <span className={style.close_line_first}></span>
    <span className={style.close_line_second}></span>
  </div>
);
