import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { getTasks } from '../state/actions/actions';

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async () => {
    let tasks = await getTasks();
    setTasks(tasks);
  }

  return (
    <Grid
      justify="center"
      alignItems="center"
      direction="row"
      container
      style={{ margin: 16 }}
    >
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleGetTasks}>
          Get Tasks
        </Button>
        {tasks.length > 0 &&
        tasks.map(task => (
          <Grid item key={task.id}>
            {task.title}
          </Grid>
        ))
        }
      </Grid>
    </Grid>
  );
}

export default GetTasks;