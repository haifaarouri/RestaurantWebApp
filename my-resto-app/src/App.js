import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-xxl bg-white p-0">
        {/* Navbar & Hero Start */}
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
              <img src="ChilisLogo.png" alt="Logo" />
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
                <a href="/" className="nav-item nav-link">
                  Menu Page
                </a>
              </div>
            </div>
          </nav>
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="text-white animated slideInLeft m-2">
                    Chili's Tunisie
                  </h3>
                  <h1 className="display-3 animated slideInLeft m-2" style={{color: "#59bb1a"}}>
                    Découvrez les  
                    <br />
                    meilleurs recettes
                    <br />
                    syriennes
                  </h1>
                  <a
                    href=""
                    className="m-2 btn py-sm-3 px-sm-5 me-3 animated slideInLeft text-white animated slideInLeft"
                    style={{backgroundColor: "#b61919", borderRadius: "15px"}}
                  >
                    Voir notre menu
                  </a>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img className="img-fluid" src="img/hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="one.jpg"
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="two.jpg"
                      style={{ marginTop: "53%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="tri.jpg"
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="four.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="ff-secondary text-center fw-normal" style={{color: "#59bb1a"}}>
                  About Us
                </h5>
                <h1 className="mb-4">
                  Welcome to Chili's 
                </h1>
                <p className="mb-4">
                  Chili's Grill & Bar is an American casual dining restaurant chain. The company was founded by Larry Lavine in Texas in 1975 and is currently owned and operated by Brinker International. 
                </p>
                <p className="mb-4">
                  Chili's serves American food, Tex-Mex cuisine and dishes influenced by Mexican cuisine, such as shrimp tacos, quesadillas, and fajitas.
                  In addition to their regular menu, the company offers a nutritional menu, allergen menu, and vegetarian menu.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 px-3" style={{backgroundColor: "#59bb1a"}}>
                      <h1
                        className="flex-shrink-0 display-5 mb-0"
                        data-toggle="counter-up"
                        style={{color: "white"}}
                      >
                        15
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Years of</p>
                        <h6 className="text-uppercase mb-0">Experience</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 px-3" style={{backgroundColor: "#59bb1a"}}>
                      <h1
                        className="flex-shrink-0 display-5 mb-0"
                        data-toggle="counter-up"
                        style={{color: "white"}}
                      >
                        50
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Popular</p>
                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn py-3 px-5 mt-2" href="https://en.wikipedia.org/wiki/Chili%27s" style={{backgroundColor: "#59bb1a", color: "white", borderRadius: "15px"}}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Menu Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="ff-secondary text-center fw-normal" style={{color: "#59bb1a"}}>
                Food Menu
              </h5>
              <h1 className="mb-5">Notre Menu</h1>
            </div>
            <div
              className="tab-class text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 pb-3"
                    data-bs-toggle="pill"
                    href="#"
                  >
                    <i className="fa fa-hamburger fa-2x" style={{color: "#b61919"}}/>
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Launch</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                    data-bs-toggle="pill"
                    href="#"
                  >
                    <i className="fa fa-utensils fa-2x" style={{color: "#b61919"}}/>
                    <div className="ps-3">
                      <small className="text-body">Lovely</small>
                      <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {/* Service Start */}
                    <div className="container-xxl py-5">
                      <div className="container">
                        <div className="row g-4">
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="pt-3" style={{boxShadow: "0 0 45px rgba(0, 0, 0, .08)", transition: ".5s", borderRadius: "15px"}}>
                              <div className="p-4">
                                <img alt="" src="plats/plat1.png" style={{width: "100%", marginTop: "-6%", marginBottom: "6%"}}/>
                                <h5>Trio Fajitas</h5>
                                <p>49,90 DT</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="pt-3" style={{boxShadow: "0 0 45px rgba(0, 0, 0, .08)", transition: ".5s", borderRadius: "15px"}}>
                              <div className="p-4">
                                <img alt="" src="plats/plat1.png" style={{width: "100%", marginTop: "-6%", marginBottom: "6%"}}/>
                                <h5>Trio Fajitas</h5>
                                <p>49,90 DT</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="pt-3" style={{boxShadow: "0 0 45px rgba(0, 0, 0, .08)", transition: ".5s", borderRadius: "15px"}}>
                              <div className="p-4">
                                <img alt="" src="plats/plat1.png" style={{width: "100%", marginTop: "-6%", marginBottom: "6%"}}/>
                                <h5>Trio Fajitas</h5>
                                <p>49,90 DT</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="pt-3" style={{boxShadow: "0 0 45px rgba(0, 0, 0, .08)", transition: ".5s", borderRadius: "15px"}}>
                              <div className="p-4">
                                <img alt="" src="plats/plat1.png" style={{width: "100%", marginTop: "-6%", marginBottom: "6%"}}/>
                                <h5>Trio Fajitas</h5>
                                <p>49,90 DT</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Service End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu End */}
        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-0">
            <div className="col-md-12 d-flex align-items-center" style={{backgroundColor: "#b61919", borderRadius: "30px"}}>
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h1 className="  ff-secondary text-center fw-normal pb-5" style={{color: "white"}}>
                  Prendre Contact
                </h1>
                <div className="d-flex">
                  <form style={{marginLeft : "10%"}}>
                    <div className="row g-3">
                      <div className="col-8">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Nom et Prénom"
                            style={{borderRadius: "15px", color: "black"}}
                          />
                          <label htmlFor="fullName">Nom et Prénom</label>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Adresse Email"
                            style={{borderRadius: "15px", color: "black"}}
                          />
                          <label htmlFor="email">Adresse Email</label>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Votre message ici"
                            id="message"
                            defaultValue={""}
                            style={{borderRadius: "15px", height: 100, color: "black"}}
                          />
                          <label htmlFor="message">Votre message ici ...</label>
                        </div>
                      </div>
                      <div className="col-8">
                        <button style={{borderRadius: "15px"}} className="btn btn-light w-100 py-3" type="submit">
                          Envoyer
                        </button>
                      </div>
                    </div>
                  </form>
                  <img style={{marginRight : "10%"}} src="back.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container d-flex justify-content-center">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6">
                <h4 className="ff-secondary text-center fw-normal mb-4" style={{color: "#59bb1a", marginRight:"40%"}}>
                  Contact
                </h4>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  Manar, Tunis, Tunisie
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +216 345 67890
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  info@example.com
                </p>
                <div className="d-flex pt-2 justify-content-center mb-2">
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <h4 className="  ff-secondary text-center fw-normal mb-4" style={{color: "#59bb1a"}}>
                  Opening
                </h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>09AM - 09PM</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>10AM - 08PM</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  ©{" "}
                  <a className="border-bottom" href="#">
                    Chili's Tunisie
                  </a>
                  , All Right Reserved.
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-lg-square back-to-top" style={{backgroundColor: "#59bb1a", color: "white"}}>
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
}

export default App;
