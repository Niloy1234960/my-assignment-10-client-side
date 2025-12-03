
import axios from "axios"
import { useEffect, useState } from "react"



const UseHook = () => {
    const [products, setTrees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios("http://localhost:3000/products")
        .then(data => setTrees(data.data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
    }, [])

    return {products, loading, error}
}

export default UseHook;