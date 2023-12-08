import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md"
import { BiPlus } from "react-icons/bi"
import { deletePlat, fetchData } from './services/platService';
import { Link } from "react-router-dom";

function Admin() {

  const [platsList, setPlatsList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/plats/getAllPlats")
            .then((response) => {
              console.log(response.data)
              setPlatsList(response.data)
            })
            .catch((e)=> console.log(e))
  }, [])

  const submitDelete = async (id) => {
    await deletePlat(id)
    axios.get("http://localhost:3001/plats/getAllPlats")
          .then((response) => {
            console.log(response.data)
            setPlatsList(response.data)
          })
          .catch((e)=> console.log(e))
  }

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
                <Link to="/admin/platForm" className="btn" style={{backgroundColor:"#b61919", color: "white", borderRadius: "10px"}}>
                  Ajouter des plats <BiPlus></BiPlus>
                </Link>
              </div>
              <div className="col-lg-12">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Image du Plat</th>
                      <th scope="col">Nom du Plat</th>
                      <th scope="col">Prix du plat</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platsList.length>0 && platsList.map((p, i)=><tr key={i}>
                      <td style={{width: "50%"}}><img src={`http://localhost:3001/PlatPictures/${p.image}`} alt='platPic' style={{width: "60%", height: "60%"}}/></td>
                      <td>{p.nom}</td>
                      <td>{p.prix} DT</td>
                      <td>
                        <Link to={`/admin/edit-plat/${p._id}`} className="btn" style={{backgroundColor:"#59bb1a", color: "white", borderRadius: "10px", marginRight: "20px"}}><CiEdit size="25px"/></Link>
                        <button className="btn" style={{backgroundColor:"#b61919", color: "white", borderRadius: "10px"}} onClick={()=>submitDelete(p._id)}><MdDelete size="25px"/></button>
                      </td>
                    </tr>)}
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
