import { useState } from "react";
import "./search.css";

type SearchProps = { value: string }

export const Search = () => {

    return (
        <input className="header__search" type="text" placeholder="search" />
    )
}
