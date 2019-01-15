import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./list.component.module.less";
import "./../../App.less";
console.log(styles);
interface Props {}

interface State {
  items: string[];
  expandedKeys: number[];
  isActive: boolean;
}

class List extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      items: ["Item 1", "Item 2", "Item 3"],
      expandedKeys: [],
      isActive: false
    };
  }

  toggleList = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <nav>
        <ul className="list">
          {/* REACT CSS Modules: conditional operator to set a class */}
          <li styleName={this.state.isActive ? "active" : ""}>
            <span onClick={this.toggleList}>Item 1</span>
            <ul>
              {/* CSS Modules: set more than 1 class to an element */}
              <li className={`${styles.red} ${styles.bold}`}>Nested item 1</li>
              {/* Global styles */}
              <li className="global-orange">Nested item 2</li>
              {/* Global styles */}
              <li className="global-green">Nested item 3</li>
            </ul>
          </li>
          {/* Global styles */}
          <li className="global-orange">Item 2</li>
          {/* REACT CSS Modules */}
          <li styleName="list-item">Item 3</li>
        </ul>

        {/* REACT CSS Modules */}
        <div styleName="wrapper">
          {/* REACT CSS Modules */}
          <span styleName="message">SPAN</span>
        </div>
      </nav>
    );
  }
}

export default CSSModules(List, styles);
