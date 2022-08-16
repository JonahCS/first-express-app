import React from "react"; //our main dependency for the project
import ReactDom from "react-dom";

//CSS
import "./index.css";
//setup vars
import { data } from "./books";
import SpecificBook from "./Book";
import {greeting} from './testing/testing'
function Booklist() {
  console.log(greeting)
  return (
    <section className="booklist">
      {data.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
