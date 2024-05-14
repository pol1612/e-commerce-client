import {useState} from "react";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Rating, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import process from 'process'
import productsList from "./ProductsList.jsx";

const ProductCard = (props) => {

    const [product , setProduct] = useState(props.product)
    const navigate = useNavigate();
    const baseApiUrl = import.meta.env.VITE_BASE_URL

    const onUpdateButtonClick = (id) => {

        navigate("/update-product/"+id)
    }
    const onDeleteButtonClick = async (id) => {
        try{
            console.log(baseApiUrl)
            const response = await axios.delete(`${baseApiUrl}/products/${id}`)
            if (response.status === 200){
                console.log(200)
                props.onDelete(product)
            }

        }catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Card
                sx={{
                    width: 345,
                    height: 550,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    backgroundColor: '#ADD8E6',
                }}
            >
                <CardHeader title={product.title}/>
                <CardMedia
                    component="img"
                    height="194"
                    image={product.images}
                    alt="Product Image"
                />
                <CardContent>
                    <Stack direction="column" spacing={1}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            component="div"
                            sx={{
                                width: 300,
                                height: 50,
                                overflow: 'auto',
                                border: '1px solid #000',
                                padding: '5px',
                            }}
                        >
                            {product.description}
                        </Typography>

                        <Stack direction="row" spacing={1}>

                            <Rating
                                name="half-rating-read"
                                defaultValue={product.rating}
                                precision={0.5}
                                readOnly
                            />

                            <Typography variant="body1" color="text.primary">
                                {product.rating}
                            </Typography>

                        </Stack>

                        <Stack direction="column">

                            <Typography variant="body1" color="text.primary" >
                                $ {product.price}
                            </Typography>

                            <Typography variant="body1" color="text.primary">
                                Price discount: {product.discountPercentage}%
                            </Typography>

                        </Stack>

                    </Stack>
                </CardContent>
                <CardActions>
                    <Stack direction="row" gap={2}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => onUpdateButtonClick(product._id)}
                        >
                            Update Product
                        </Button>
                        <Button
                            color="error"
                            variant="contained"
                            onClick={() => onDeleteButtonClick(product._id)}
                        >
                            Delete Product
                        </Button>
                    </Stack>
                </CardActions>
            </Card>

        </>
    )

}

export default ProductCard