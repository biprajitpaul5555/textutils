import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            showAlert("Dark mode has been enabled", "success");
            // document.title = "TextUtils - Dark Mode";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
            // document.title = "TextUtils - Light Mode";
        }
    };
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            Type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const secret = process.env.REACT_APP_SECRET;
    console.log(secret);

    return (
        <>
            <Navbar nav_title="TextUtils" about_text="About" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}
                />
                <Route exact path="/about" element={<About mode={mode} />}></Route>
            </Routes>
        </>
    );
}

export default App;
