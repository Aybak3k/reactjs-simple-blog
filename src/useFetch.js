import {useEffect, useState} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(_ => {
        const abortCont =  new AbortController()

        // setTimeout(_ => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if (!res.ok) throw Error('could not fecth the data for dat resource')
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })
        // }, 1000)
        return _ => abortCont.abort()
    },[url])

    return {data, isPending, error}
}

export default useFetch