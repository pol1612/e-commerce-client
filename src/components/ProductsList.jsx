import {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";
import ProductCard from "./ProductCard.jsx";

const ProductsList = () => {
    const baseApiUrl = import.meta.env.VITE_BASE_URL
    const [productsList,setProductsList] = useState([])

    useEffect(() => {
        fetchProductsList()
    }, []);

    const handleDelete = (product) => {
        setProductsList(prevState =>
            prevState.filter((productValue) => productValue._id !== product._id)
        )
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

        <div style={{ width: '100%', justifyContent: 'flex-end'}}>
            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{display: 'flex', justifyContent: 'center', }}>
                <Grid container spacing={10} sx={{marginX: -2}}>
                    {productsList.map(
                        (product, index) => (
                            <Grid item key={product._id} xs={4} sx={{paddingX: 2,}}>
                                <ProductCard
                                    index={index}
                                    product={product}
                                    onDelete={handleDelete}
                                />
                            </Grid>
                            )
                        )
                    }
                </Grid>
            </div>
        </div>
    )
}

export default ProductsList