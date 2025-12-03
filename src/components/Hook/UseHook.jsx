
import axios from "axios"
import { useEffect, useState } from "react"



const UseHook = () => {
    const [products, setTrees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios("https://3d-models-server-coral.vercel.app/products")
        .then(data => setTrees(data.data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
    }, [])

    return {products, loading, error}
}

export default UseHook;