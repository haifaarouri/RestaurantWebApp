import React from 'react';
import FormComponent from './components/Form';

function AddPlat() {

    const operationMode = "Ajout"

  return (
    <div className="container-xxl p-0">
        <div className="container-xxl p-0">
          <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#0F172B", marginLeft:"-8.4%", marginRight:"-8.4%"}}>
            <a href="/" className="navbar-brand p-2">
              <img src="ChilisLogo.png" alt="Logo" width="100px"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0 pe-4">
                <a href="/" className="nav-item nav-link" style={{color: "white"}}>
                  Ajouter de nouveaux Plats
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-xxl py-5" style={{marginTop: "5%"}}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-12">
                <FormComponent operationMode={operationMode}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AddPlat;
