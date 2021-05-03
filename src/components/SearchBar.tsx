import React from "react";
import styles from "./SearchBar.module.css";

interface PROPS {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  changeUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
}

const SearchBar: React.FC<PROPS> = (props) => {
  return (
    <div className="left floated column">
      <form onSubmit={props.onSubmit}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            value={props.userInput}
            onChange={props.changeUserInput}
          />
          <button type="submit" className={styles.button}>
            <i
              className="circular search link icon"
              style={{ border: "none" }}
            ></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
