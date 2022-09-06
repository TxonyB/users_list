import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Container } from '@mui/system';
import Comments from './Comments';

export default function AlignItemsList() {
  let params = useParams();

	const [posts, setPosts] = useState([
		{ userId: 1, id: 1, title: "blabla", body: "" },
		{ userId: 1, id: 2, title: "blabla", body: "" },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`)
			.then((response) => response.json())
			.then((json) => {setPosts(json); setLoading(false)});
	});
  return (
    <Container maxWidth="sm">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {posts.map((post: any) => (
        <>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={post.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.body}
              </Typography>
              <Comments post={post.id} />
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
      ))}
      
    </List>
    </Container>
  );
}
