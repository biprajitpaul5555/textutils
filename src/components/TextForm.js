import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleClClick = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    };
    const handleCopy = () => {
        // const text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    };

    let wordCnt = text.split(/\s+/).filter((element) => element.length).length;

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">
                            {/* <h1>{props.heading}</h1> */}
                            <h1>Try TextUtils - word counter, character counter, remove extra spaces</h1>
                        </label>
                        <textarea
                            className="form-control"
                            id="myBox"
                            rows="8"
                            value={text}
                            onChange={handleChange}
                            style={{
                                backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                                color: props.mode === "dark" ? "white" : "#042743",
                            }}></textarea>
                    </div>
                    <button
                        type="button"
                        disabled={!text.length}
                        className="btn btn-primary mx-1 my-1"
                        onClick={handleUpClick}>
                        Convert to Uppercase
                    </button>
                    <button
                        type="button"
                        disabled={!text.length}
                        className="btn btn-primary mx-1 my-1"
                        onClick={handleLoClick}>
                        Convert to Lowercase
                    </button>
                    <button
                        type="button"
                        disabled={!text.length}
                        className="btn btn-primary mx-1 my-1"
                        onClick={handleClClick}>
                        Clear text
                    </button>
                    <button
                        type="button"
                        disabled={!text.length}
                        className="btn btn-primary mx-1 my-1"
                        onClick={handleCopy}>
                        Copy text
                    </button>
                    <button
                        type="button"
                        disabled={!text.length}
                        className="btn btn-primary mx-1 my-1"
                        onClick={handleExtraSpaces}>
                        Remove extra spaces
                    </button>
                </form>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>Your text summary</h2>
                <p>
                    {wordCnt} words and {text.length} characters
                </p>
                <p>{0.008 * wordCnt} minutes read</p>
                <h2>Preview</h2>
                <p>{wordCnt ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
