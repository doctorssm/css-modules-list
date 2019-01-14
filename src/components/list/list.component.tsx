import React, { Component } from "react";
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
    console.log('TOGGLE', this.state);    
  }

  render() {
    return (
      <nav>
        <ul>
          <li className={this.state.isActive ? styles.active : ''}>
            <span onClick={this.toggleList}>Item 1</span>
            <ul>
              <li className={`${styles.red} ${styles.bold}`} >Nested item 1</li>
              <li className="global-orange">Nested item 2</li>
              <li className="global-green">Nested item 3</li>
            </ul>
          </li>
          <li className="global-orange">Item 2</li>
          <li className={styles['list-item']}>Item 3</li>
        </ul>

        <div className={styles.wrapper}>
          <span className={styles.message}>SPAN</span>
        </div>
      </nav>
    );
  }
}

export default List;
