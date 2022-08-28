import ResponsiveAppBar from "./components/NavBar";
import { User } from "./pages/User";
import Tasks from "./pages/TasksUsers";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Posts from "./pages/Posts";



const App = (props: any) => {
	return (
		<Router>
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<User />} />
				<Route path="/tasks/:userId" element={<Tasks />} />
				<Route path="/post/:userId" element={<Posts/>}/>
			</Routes>
		</Router>
	);
};

export default App;