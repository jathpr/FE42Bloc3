import React from "react";
import styles from "../css/Search.module.css";

type Props = {
   username: string | null
}

type State = {
   value: string
}

export class Search extends React.Component<Props, State> {
   state = { value: '' }
   render(): React.ReactNode {
      return <div className={this.props.username ? styles.search : styles['search-no-auth']}>
         <input placeholder="Search" className={styles['search__input']} value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }} type="text" />
         <button className={styles['search__btn']}>Search</button>
      </div>
   }
}