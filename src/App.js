import { useState } from "react";
import Header from "./components/Header/Header";
import CreateNote from "./components/CreateNote/CreateNote";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    console.log(note);
    setAddItem((oldItem) => {
      return [...oldItem, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((preItem) => {
      preItem.filter((currData, ind) => {
        return ind !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
