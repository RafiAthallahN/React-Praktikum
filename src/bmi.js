import React, { Component } from 'react';
import Alert from './Components/Alert';

class BMI extends Component {
    constructor() {
        super();
        this.state = {
            weight: 0,
            height: 0,
            result: 0,
            status: ""
        }
    }

    Hitung = () => {
        let weight = this.state.weight;
        let height = this.state.height;
        let result = weight / (height * height);
        let status = "";

        if (result <= 18.5) {
            status = "Underweight";
        }
        else if (result > 18.5 && result <= 24.9) {
            status = "Normal (Ideal)";
        }
        else if (result > 24.9 && result <= 29.9) {
            status = "Overweight";
        }
        else if (result >= 30) {
            status = "Obesity";
        }
        this.setState({
            result, status
        });
    }

    changeWeight = (event) => {
        this.setState({
            weight: event.target.value
        })
    }
    changeHeight = (event) => {
        this.setState({
            height: event.target.value
        })
    }

    Alert = () => {
        if (this.state.status === "") {
            return <div></div>
        }
        else if (this.state.status === "Underweight") {
            return <Alert type="danger" header="Underweight">
                Underweight</Alert>
        }
        else if (this.state.status === "Normal (Ideal)") {
            return <Alert type="success" header="Normal (Ideal)">
                Normal (Ideal)</Alert>
        }
        else if (this.state.status === "Overweight") {
            return <Alert type="warning" header="Overweight">
                Overweight</Alert>
        }
        else if (this.state.status === "Obesity") {
            return <Alert type="danger" header="Obesity">
                Obesity</Alert>
        }
    }

    render() {
        return (
            <center>
                <div>
                    <div className='col-sm-4'>
                        <div className='card-header bg-primary'>
                            <h2 className='text-center'>
                                Berat Mass Index
                            </h2>
                        </div>
                        <br></br>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Berat</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeWeight}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Tinggi (m)</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeHeight}></input>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='row mb-3'>
                            <button className='btn btn-info' onClick={this.Hitung}>
                                Hitung
                            </button>
                        </div>
                        <div className='row mb-3'>
                            <h4>Hasil</h4>
                        </div>
                        <div className='row mb-3'>
                            {this.Alert()}
                        </div>
                    </div>
                </div>
            </center>
        );
    }
}

export default BMI;