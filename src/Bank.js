import React, { Component } from "react";

class Bank extends Component {
    constructor() {
        super();
        this.state = {
            nominal: 0,
            bunga: 0,
            periode: 0,
            cicilan: 0
        }
    }

    Hitung = () => {
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;
        let cicilan = (nominal / (periode)) + ((nominal * ((bunga) / 100)) / (periode));

        this.setState({
            cicilan
        });
    }

    changeNominal = (event) => {
        this.setState({
            nominal: event.target.value
        })
    }
    changeBunga = (event) => {
        this.setState({
            bunga: event.target.value
        })
    }
    changePeriode = (event) => {
        this.setState({
            periode: event.target.value
        })
    }

    render() {
        return (
            <center>
                <div>
                    <div className='col-sm-4'>
                        <div className='card-header bg-primary'>
                            <h2 className='text-center'>
                                Cicilan Bank
                            </h2>
                        </div>
                        <br></br>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Nominal</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeNominal}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Bunga</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeBunga}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Periode</label>
                            <div class="col-sm-9">
                                <select className='form-control' onChange={this.changePeriode}>
                                    <option value={3}>3 Bulan</option>
                                    <option value={6}>6 Bulan</option>
                                    <option value={9}>9 Bulan</option>
                                    <option value={12}>12 Bulan</option>
                                    <option value={15}>15 Bulan</option>
                                </select>
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
                            <p className="form-control bg-light">Rp.{this.state.cicilan},00</p>
                        </div>
                    </div>
                </div>
            </center>
        );
    }
}

export default Bank;