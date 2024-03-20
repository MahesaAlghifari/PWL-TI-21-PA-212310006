import React from 'react';

const styles = {
    navbar: {
        backgroundColor: "blueviolet"
    },
    navbarBrand: {
        color: "white"
    },
    navLink: {
        color: "#cccccc",
        fontSize: "14px"
    },
    activeNavLink: {
        color: "white",
        fontSize: "14px"
    },
};

export default function Headers() {
    return (
        <nav className="navbar navbar-expand-lg" style={styles.navbar}>
            <div className="container">
                <a className="navbar-brand" href="#" style={styles.navbarBrand}><b>Mahesa.AI</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" style={styles.navLink}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={styles.activeNavLink}>Messenger</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" style={styles.navLink}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
