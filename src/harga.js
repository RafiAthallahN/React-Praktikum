import React, { Component } from "react";

class Hitung extends Component {
    constructor() {
        super();
        this.state = {
            hargaAwal: 0,
            ppn: 0,
            diskon: 0,
            hargaAkhir: 0
        }
    }

    Hitung = () => {
        let hargaAwal = this.state.hargaAwal;
        let ppn = this.state.ppn;
        let diskon = this.state.diskon;
        let hargaAkhir = ((hargaAwal - ((diskon / 100) * hargaAwal)) + ((ppn) / 100) * hargaAwal);

        this.setState({
            hargaAkhir
        });
    }

    changeHargaAwal = (event) => {
        this.setState({
            hargaAwal: event.target.value
        })
    }
    changePpn = (event) => {
        this.setState({
            ppn: event.target.value
        })
    }
    changeDiskon = (event) => {
        this.setState({
            diskon: event.target.value
        })
    }

    render() {
        return (
            <center>
                <div>
                    <div className='col-sm-4'>
                        <div className='card-header bg-primary'>
                            <h2 className='text-center'>
                                Hitung Harga Akhir
                            </h2>
                        </div>
                        <br></br>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Harga Awal</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeHargaAwal}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>PPN</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changePpn}></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-3 col-form-label'>Diskon</label>
                            <div class="col-sm-9">
                                <input type='number' className='form-control' onChange={this.changeDiskon}></input>
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
                            <p className="form-control bg-light">Rp.{this.state.hargaAkhir},00</p>
                        </div>
                    </div>
                </div>
            </center>
        );
    }
}

export default Hitung;