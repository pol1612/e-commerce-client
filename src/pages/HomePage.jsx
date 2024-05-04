import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard.jsx";
import {Grid, Stack} from "@mui/material";

const HomePage = () => {
    const [productsList,setProductsList] = useState([])

    useEffect(() => {
        fetchProductsList()
    }, []);

    const fetchProductsList = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/v1/products')
            const data = await response.json()
            setProductsList(data)

        }catch(e){
            console.log(e)
        }
    }
    return (

        <>
            <h1>My HomePage</h1>
            <Grid container spacing={10} sx={{marginX: -2}}>

                    {productsList.map(
                        (product, index) =>(
                            <Grid item key={index} xs={4}  sx={{ paddingX: 2}}>
                                <ProductCard product={product}/>
                            </Grid>
                        )
                    )
                    }
                </Grid>
        </>
    )
}
export default  HomePage