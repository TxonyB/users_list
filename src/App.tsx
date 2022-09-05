import ResponsiveAppBar from "./components/NavBar";
import Tasks from "./pages/TasksUsers";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Alert } from "@mui/material";

const App = (props: any) => {
	return (
		<BrowserRouter>
				<ResponsiveAppBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/task/:userId" element={<Tasks />} />
					<Route path="/posts/:userId" element={<Posts/>}/>
					<Route path="*" element={
            <Alert variant="filled" severity="warning">
              Error 404
							Not found
            </Alert>
          } />
				</Routes>
		</BrowserRouter>
	);
};

export default App;