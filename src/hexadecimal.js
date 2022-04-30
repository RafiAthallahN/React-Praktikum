import React, { Component } from "react";

class Hexadecimal extends Component {
    constructor() {
        super();
        this.state = {
            hexadecimal: 0,
            konversi: "",
            result: 0
        }
    }

    Hitung = () => {
        let hexadecimal = this.state.hexadecimal
        let decimal = parseInt(hexadecimal, 16)

        if (this.state.konversi === "decimal") {
            return this.setState({
                result: decimal
            })
        }
        else if (this.state.konversi === "biner") {
            return this.setState({
                result: decimal.toString(2)
            })
        }
        else if (this.state.konversi === "oktal") {
            return this.setState({
                result: decimal.toString(8)
            })
        }
    }

    changeHexadecmal = (event) => {
        this.setState({
            hexadecimal: event.target.value
        })
    }
    changeKonversi = (event) => {
        this.setState({
            konversi: event.target.value
        })
    }

    render() {
        return (
            <center>
                <div>
                    <div className='col-sm-4'>
                        <div className='card-header bg-primary'>
                            <h2 className='text-center'>
                                Konversi Bilangan Hexadecimal
                            </h2>
                        </div>
                        <br></br>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Hexadecimal</label>
                            <div class="col-sm-9">
                                <input type='text' className='form-control' onChange={this.changeHexadecmal}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Konversi ke</label>
                            <div class="col-sm-9">
                                <select className='form-control' onChange={this.changeKonversi}>
                                    <option value="decimal">Decimal</option>
                                    <option value="biner">Biner</option>
                                    <option value="oktal">Oktal</option>
                                </select>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='row mb-3'>
                            <button className='btn btn-info' onClick={this.Hitung}>
                                Convert
                            </button>
                        </div>
                        <div className='row mb-3'>
                            <h4>Hasil</h4>
                        </div>
                        <div className='row mb-3'>
                            <p className="form-control bg-light">{this.state.result}</p>
                        </div>
                    </div>
                </div>
            </center>
        );
    }
}

export default Hexadecimal;