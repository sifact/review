import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Review from "./Review";

function App() {
    return (
        <main className="">
            <section className="container">
                <div className="title">
                    <h2 className="">Our reviews</h2>
                    <div className="underline"></div>
                </div>
                <Review />
            </section>
        </main>
    );
}

export default App;
