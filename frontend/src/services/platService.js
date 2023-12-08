import axios from "axios"

export const deletePlat = async (id) => {
    const res = await fetch(`http://localhost:3001/plats/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json()
    return data
}

export const fetchData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export const submitPlatForm = async (data, operationMode) => {

    const formData = new FormData()
    formData.append('nom', data.target.nom.value)
    formData.append('image', data.target.image.files[0])
    formData.append('prix', data.target.prix.value)
    console.log(data.target.id.value);
    operationMode === 'Ajout'
            ? await axios.post(`http://localhost:3001/plats/addPlat`, formData)
            : await axios.put(`http://localhost:3001/plats/${data.target.id.value}`, formData)
}