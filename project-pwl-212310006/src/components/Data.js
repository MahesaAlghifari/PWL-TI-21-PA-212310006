import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            npm: '',
            firstName: '',
            middleName: '',
            lastName: '',
            birthdate: '',
            showModal: false,
            age: null
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Form Wajib Diisi
        if (!this.state.npm || !this.state.firstName || !this.state.lastName || !this.state.birthdate) {
            alert('Semua isian wajib diisi kecuali Middle Name!');
            return;
        }
        
        // Maksimal Digit NPM
        if (!(/^\d+$/.test(this.state.npm)) || this.state.npm.length > 10) {
            alert('NPM harus terdiri dari angka dan memiliki panjang maksimal 10 digit!');
            return;
        }

        // Menghitung umur dari tanggal lahir
        const birthdate = new Date(this.state.birthdate);
        const ageDiffMs = Date.now() - birthdate.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        this.setState({ showModal: true, age: age });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <form className="col-md-4" onSubmit={this.handleSubmit}>
                    <div className="mb-3 text-center">
                        <label htmlFor="npm" className="form-label">NPM <span style={{ color: 'red', fontSize: 'medium' }}>*</span></label>
                        <input type="number" className="form-control" id="npm" onChange={this.handleChange} />
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="firstName" className="form-label">First Name <span style={{ color: 'red', fontSize: 'medium' }}>*</span></label>
                        <input type="text" className="form-control" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="middleName" className="form-label">Middle Name </label>
                        <input type="text" className="form-control" id="middleName" onChange={this.handleChange} />
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="lastName" className="form-label">Last Name <span style={{ color: 'red', fontSize: 'medium' }}>*</span></label>
                        <input type="text" className="form-control" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="birthdate" className="form-label">Birthdate <span style={{ color: 'red', fontSize: 'medium' }}>*</span></label>
                        <input type="date" className="form-control" id="birthdate" onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Informasi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>NPM: {this.state.npm}</p>
                        <p>Fullname: {`${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`}</p>
                        <p>Umur: {this.state.age}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Data;
