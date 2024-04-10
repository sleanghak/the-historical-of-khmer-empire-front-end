import { useEffect, useState } from "react";
import Content from "../routers/routers"
import axios from "axios";
import { IP_ADDRESS, PORT, URL } from "../config";

const Index = () => {

    const [index,setindex] = useState([]);  
    useEffect( ()=>{
        const getProduct = ()=>{
            axios.get(`${IP_ADDRESS}:${PORT}/${URL}/`)
            .then(function (res) {
            setindex(res.data)
                })
            .catch(error=>{ console.log(error)});
        }
        getProduct();
    },[]);

    return(
        <>
            <Content index={index}/>
        </>
    )
}

export default Index