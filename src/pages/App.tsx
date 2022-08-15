import ResponsiveAppBar from "../components/NavBar";
import { User } from "./User";
import Tasks from "./TasksUsers";



const App = (props: any) => {
	return (
		<div>
		<nav>
			<ResponsiveAppBar/>
		</nav>
		<div>
		<User/>
		
		</div>
		<div>
		<Tasks/>
		</div>
		</div>
	);
};

export default App;