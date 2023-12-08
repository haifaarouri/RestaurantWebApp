function Admin() {
  return (
    <div className="container-xxl p-0">
        <div className="container-xxl p-0">
          <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#0F172B", marginLeft:"-8.4%", marginRight:"-8.4%"}}>
            <a href="" className="navbar-brand p-2">
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
                  Admin Management Page
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-xxl py-5" style={{marginTop: "5%"}}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="d-felx justify-content-between">
                <h1>Liste de tous les Plats</h1>
                <button className="btn" style={{backgroundColor:"#b61919", color: "white", borderRadius: "10px"}}>Ajouter des plats</button>
              </div>
              <div className="col-lg-12">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Admin;
