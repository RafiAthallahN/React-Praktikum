import React from "react";
import Utama from "./Components/utama";
import { Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <hr></hr>
                <center>
                    <Link to="/bmi">BMI</Link> |
                    <Link to="/bank"> Bank</Link> |
                    <Link to="/hitung"> Hitung</Link> |
                    <Link to="/biner"> Biner</Link> |
                    <Link to="/decimal"> Decimal</Link> |
                    <Link to="/oktal"> Oktal</Link> |
                    <Link to="/hexadecimal"> Hexadecimal</Link>
                </center>
                <hr></hr>
                <p><Utama /></p>
            </div>
        )
    }
}

export default App;