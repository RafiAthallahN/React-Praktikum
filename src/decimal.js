import React, { Component } from "react";

class Decimal extends Component {
    constructor() {
        super();
        this.state = {
            decimal: 0,
            konversi: "",
            result: 0
        }
    }

    Hitung = () => {
        let decimal = +this.state.decimal

        if (this.state.konversi === "biner") {
            return this.setState({
                result: decimal.toString(2)
            })
        }
        else if (this.state.konversi === "oktal") {
            return this.setState({
                result: decimal.toString(8)
            })
        }
        else if (this.state.konversi === "hexadecimal") {
            return this.setState({
                result: decimal.toString(16)
            })
        }
    }

    changeDecimal = (event) => {
        this.setState({
            decimal: event.target.value
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
                                Konversi Bilangan Decimal
                            </h2>
                        </div>
                        <br></br>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Decimal</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeDecimal}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Konversi ke</label>
                            <div class="col-sm-9">
                                <select className='form-control' onChange={this.changeKonversi}>
                                    <option value="biner">Biner</option>
                                    <option value="oktal">Oktal</option>
                                    <option value="hexadecimal">Hexadecimal</option>
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

export default Decimal;