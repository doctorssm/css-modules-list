import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import styles from "./list.component.module.scss";
import "./../../App.scss";
console.log(styles)
interface IProps {}

interface IState {
  items: string[];
  expandedKeys: number[],
  isActive: boolean
}

class List extends Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props, state);

    this.state = {
      items: ["Item 1", "Item 2", "Item 3"],
      expandedKeys: [],
      isActive: false
    };
  }

  toggleList = () => {
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    return (
      <nav>
        <ul>
          <li styleName={this.state.isActive ? 'active' : ''}>
            <span onClick={this.toggleList}>Item 1</span>
            <ul>
              <li className={`${styles.red} ${styles.bold}`} >Nested item 1</li>
              <li className="global-orange">Nested item 2</li>
              <li className="global-green">Nested item 3</li>
            </ul>
          </li>
          <li className="global-orange">Item 2</li>
          <li styleName="list-item">Item 3</li>
        </ul>

        <div styleName="wrapper">
          <span styleName="message">SPAN</span>
        </div>
      </nav>
    );
  }
}

export default CSSModules(List, styles);
