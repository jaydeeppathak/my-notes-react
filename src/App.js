import logo from "./logo.svg";
import "./App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import Button from "@mui/material/Button";
import Login from "./Login";

// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }

function App() {
    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
