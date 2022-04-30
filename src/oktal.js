import React, { Component } from "react";

class Oktal extends Component {
    constructor() {
        super();
        this.state = {
            oktal: 0,
            konversi: "",
            result: 0
        }
    }

    Hitung = () => {
        let oktal = this.state.oktal
        let decimal = parseInt(oktal, 8)

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
        else if (this.state.konversi === "hexadecimal") {
            return this.setState({
                result: decimal.toString(16)
            })
        }
    }

    changeOktal = (event) => {
        this.setState({
            oktal: event.target.value
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
                                Konversi Bilangan Oktal
                            </h2>
                        </div>
                        <br></br>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Oktal</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeOktal}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Konversi ke</label>
                            <div class="col-sm-9">
                                <select className='form-control' onChange={this.changeKonversi}>
                                    <option value="decimal">Decimal</option>
                                    <option value="biner">Biner</option>
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

export default Oktal;