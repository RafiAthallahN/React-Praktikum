import React, { Component } from "react";

class Biner extends Component {
    constructor() {
        super();
        this.state = {
            biner: 0,
            konversi: "",
            result: 0
        }
    }

    Hitung = () => {
        let biner = this.state.biner;
        let decimal = parseInt(biner, 2)

        if (this.state.konversi === "Decimal") {
            return this.setState({
                result: decimal
            })
        }
        else if (this.state.konversi === "Oktal") {
            return this.setState({
                result: decimal.toString(8)
            })
        }
        else if (this.state.konversi === "Hexadecimal") {
            return this.setState({
                result: decimal.toString(16)
            })
        }
    }

    changeBiner = (event) => {
        this.setState({
            biner: event.target.value
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
                                Konversi Bilangan Biner
                            </h2>
                        </div>
                        <br></br>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Biner</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeBiner}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Konversi ke</label>
                            <div class="col-sm-9">
                                <select className='form-control' onChange={this.changeKonversi}>
                                    <option value="Decimal">Decimal</option>
                                    <option value="Oktal">Oktal</option>
                                    <option value="Hexadecimal">Hexadecimal</option>
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

export default Biner;