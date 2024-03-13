import { useEffect, useState } from "react"

export function useFetch(url) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(async response => {
                const data = await response.json()
                setData(data)
                setLoading(false)
            })
            .catch(error => setErrors(error)) 
    }, [])

    return {loading, data, errors}
}

/*
import {useEffect, useState} from "react";

export function useFetch (url, options = {}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        }).then(r => r.json()).then(data => {
            setData(data)
        }).catch((e) => {
            setErrors(e)
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    return {
        loading, data, errors
    }
}*/