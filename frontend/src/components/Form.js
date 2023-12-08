import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap"
import { BiBlock, BiCheck } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom";
import { submitPlatForm } from '../services/platService';

function FormComponent({ operationMode, plat}) {

    const [validated, setValidated] = useState(false)
    const [newPlat, setNewPlat] = useState({
        nom: '',
        image: '',
        prix: ''
    })
    const navigate = useNavigate();
    const [nom, setNom] = useState('');
    const [image, setImage] = useState('');
    const [prix, setPrix] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        setValidated(true)
        if (form.checkValidity() === true) {
            await submitPlatForm(e, operationMode)
            navigate('/admin', { replace: true });
        }
    }

    useEffect(() => {
        if (plat!==null && plat!==undefined) {
            if (plat._id!=null) {
                setNewPlat({ nom: plat.nom, image: plat.image, prix: plat.prix })
            }
        }
    }, [plat])
console.log(newPlat);
    const handleChangeAtt = (e) => {
        if (plat===null) {
            if (plat._id==null) {
                setNewPlat({ ...newPlat, [e.target.name]: e.target.value })
            }
        } else {
            e.target.name === "nom" && setNom(e.target.value )
            e.target.name === "prix" && setPrix(e.target.value )
            setNewPlat({ ...newPlat, [e.target.name]: e.target.value })
        }
    }

    const handlePicture = (e) => {
        if (plat===null) {
            if (plat._id==null) {
                setNewPlat({ ...newPlat, image: e.target.files[0] })
            }
        }  else {
            setImage(e.target.files[0] )
            setNewPlat({ ...newPlat, [e.target.name]: e.target.value })
        }
    }

  return (
    <div className="container-xxl p-0">
        <div className="container-xxl">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h1>{operationMode}</h1>
                <Form encType="multipart/form-data" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Control value={plat!==null && plat!==undefined && plat._id} name="id" type="hidden" className="form-control" id="id"/>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nom">Nom</Form.Label>
                        <Form.Control value={newPlat.nom} name="nom" type="text" className="form-control" id="nom" placeholder="nom" required onChange={handleChangeAtt} />
                        <Form.Control.Feedback type="valid">
                            Bravo !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                            Veuillez entrer un nom pour le plat !
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="image">Image</Form.Label>
                        <Form.Control defaultValue={newPlat.image} name="image" type="file" className="form-control" id="image" placeholder="image" required onChange={handlePicture} />
                        <Form.Control.Feedback type="valid">
                            Bravo !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                            Veuillez entrer une image pour le plat !
                        </Form.Control.Feedback>
                        {newPlat.image && <img src={`http://localhost:3001/PlatPictures/${newPlat.image}`} alt='platPic' style={{width: "60%", height: "60%"}}/>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="prix">Prix</Form.Label>
                        <Form.Control value={newPlat.prix} name="prix" type="number" className="form-control" id="prix" placeholder="prix" required onChange={handleChangeAtt} />
                        <Form.Control.Feedback type="valid">
                            Bravo !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                            Veuillez entrer un prix pour le plat !
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        {operationMode} <BiCheck></BiCheck>
                    </Button>
                    <Link to="/admin" className="btn btn-light" type="submit">
                        Cancel <BiBlock></BiBlock>
                    </Link>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FormComponent;