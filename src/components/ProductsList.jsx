import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

const ProductsList = () => {
    const baseApiUrl = import.meta.env.VITE_BASE_URL
    const [productsList,setProductsList] = useState([])

    useEffect(() => {
        fetchProductsList()
    }, []);

    const fetchProductsList = async () => {
        try{
            const response = await fetch(`${baseApiUrl}/products`)
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
                            <ProductCard product={product} setproductsList={setProductsList} productsList={productsList}/>
                        </Grid>
                    )
                )
                }
            </Grid>
        </>
    )
}

export default ProductsList