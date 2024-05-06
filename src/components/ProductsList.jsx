import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

const ProductsList = () => {
    const baseApiUrl = import.meta.env.VITE_BASE_URL
    const [productsList,setProductsList] = useState([])

    useEffect(() => {
        fetchProductsList()
    }, [productsList]);
    const handleProductsListUpdate = async (newList) => {
        console.log(`NEW LIST LENGTH: ${newList.length} CURRENT LIST LENGTH: ${productsList.length}`)
        await setProductsList(newList)
        console.log(productsList.length)
        console.log(`NEW LIST LENGTH: ${newList.length} CURRENT LIST LENGTH: ${productsList.length}`)

    }
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
                            <ProductCard product={product} setProductsList={handleProductsListUpdate} productsList={productsList}/>
                        </Grid>
                    )
                )
                }
            </Grid>
        </>
    )
}

export default ProductsList