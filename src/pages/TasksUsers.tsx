import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  let params = useParams();

	const [tasks, setTasks] = useState([
		{ id: 1, title: "blabla", completed: false },
		{ id: 2, title: "blabla", completed: true },
	]);

  useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
			.then((response) => response.json())
			.then((json) => {setTasks(json);});
	});

  return (
    <Container maxWidth="sm">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
      {tasks.map((task: any) => {
        const labelId = `checkbox-list-label-${task.id}`;

        return (
          
          <ListItem>
            <ListItemButton role={undefined} onClick={handleToggle(task.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </Container>
  );
}
