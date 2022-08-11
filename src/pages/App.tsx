import ResponsiveAppBar from "../components/NavBar";
import { User } from "../components/User";



const App = (props: any) => {
	return (
		<div>
		<ResponsiveAppBar/>
		<User/>
		</div>
	);
};

export default App;