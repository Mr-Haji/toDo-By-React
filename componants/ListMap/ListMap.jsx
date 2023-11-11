import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import CustomButton from "../Button/Button";

export default function ListMap({ todo, delBtn, editBtn, label }) {
  return (
    <List sx={{ width: "100%", minWidth: 300 }}>
      {todo.map((e, i) => {
        return (
          <ListItem sx={{ margin:2 }}>
            <h1>{e.todo}</h1>

            <CustomButton
              label={"Del"}
              onClick={() => delBtn(e.id)}
              variant={"outlined"}
            />

            <CustomButton
              label={"Edit"}
              onClick={() => editBtn(e.id, e.todo)}
              variant={"outlined"}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
