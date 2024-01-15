/* eslint-disable no-unused-vars */
import axios from "axios"
import { useState } from "react"

export const useCrud = (baseUrl) => {
    const [infoApi, setInfoApi] = useState()

    //GET -- Obtener ,leer o acceder a la base de datos

    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
    }

    //POST -- Crear un nuevo registro en la base de datos
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                setInfoApi(prevState => [...prevState, res.data])
            })
            .catch(err => console.log(err))
    }

    //DELATE -- elimina un registro existente en la base de datos

    const delateApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                setInfoApi(infoApi.filter(e => e.id !== id))
            })
            .catch(err => console.log(err))
    }

    //UPDATE -- actualiza un registro en la base de datos

    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
            .then(res => {
                setInfoApi(prevState =>
                prevState.map(e => (e.id === id ? res.data : e))
            )
        })
        .catch(err => console.log(err))
}

    //
    return [infoApi, getApi, postApi, delateApi, updateApi]
}
