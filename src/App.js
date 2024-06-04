import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import Login from "./components/Login";
import Register from "./components/Register";
import BlankLayout from "./common/layouts/BlankLayout";
import AppLayout from "./common/layouts/AppLayout";
import { NotesList } from "./components/Notes";
import "./App.scss";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "rgb(205, 173, 29)",
                },
            }}
        >
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AppLayout />}>
                            <Route path="/" exact element={<NotesList />} />
                        </Route>
                        <Route path="/" element={<BlankLayout />}>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                        <Route path="*" element={<h1>Hello</h1>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ConfigProvider>
    );
}

export default App;
