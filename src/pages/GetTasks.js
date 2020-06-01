import React, { useState } from "react";
import {
  Button,
  Grid,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { getTasks } from "../state/actions/actions";
import FolderIcon from "@material-ui/icons/Folder";

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async () => {
    let tasks = await getTasks();
    setTasks(tasks);
  };

  return (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      container
      style={{ margin: 16 }}
    >
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleGetTasks}>
          Get Tasks
        </Button>
      </Grid>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Grid item key={task.id} direction="row">
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={task.title} secondary={task.description} />
            </ListItem>
            <Divider />
          </Grid>
        ))}
    </Grid>
  );
};

export default GetTasks;
