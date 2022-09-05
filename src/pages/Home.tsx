import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListSubheader from '@mui/material/ListSubheader';
import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const Home = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: "" },
		{ id: 2, name: "" },
	]);
  const [loading, setLoading] = useState(true);

	let navigate = useNavigate();

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	
	return (
		<Container maxWidth="sm">
		<div className="App">
			<div className="card">
        {loading ? <CircularProgress />  : null}
				
				<nav aria-label="secondary mailbox folders">
					<List 
					      sx={{ width: '100%', maxWidth: 'sm', bgcolor: 'background.paper' }}
						  component="nav"
						  aria-labelledby="Lista de usuários"
							
						  subheader={
							<ListSubheader component="div" id="Lista de usuários">
							  Usuários Existentes
							</ListSubheader>
						  }
					>
					{users.map((user) => (
						<ListItem
            key={user.id}
            secondaryAction={
							<Link to={`/posts/${user.id}`} key={user.id}>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
							</Link>
            }
            disablePadding
          >
					
						
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.name[0]}`}
                  src={`/static/images/avatar/${+ 1}.jpg`}
                />
              </ListItemAvatar>
							<Link to={`/task/${user.id}`}>
              <ListItemText  primary={user.name} />
							</Link>
            </ListItemButton>
          </ListItem>	
						))}
					</List>		
				</nav>
			</div>
		</div>
		</Container>
	);
};


export default Home;