import * as C from "./App.styles";
import { Global } from "./Global";
import { useState, useEffect } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/listItem";
import { AddArea } from "./components/AddArea";

function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header>Lista de tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </C.Area>
      </C.Container>
      <Global />
    </>
  );
}

export default App;
