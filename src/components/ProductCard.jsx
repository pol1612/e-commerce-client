import {useState} from "react";
import {Card, CardContent, CardHeader, CardMedia, Rating, Stack, Typography} from "@mui/material";

const ProductCard = (props) => {
    const [product , setProduct] = useState(props.product)

    return (
        <>
            <Card
                sx={{
                    width: 345,
                    height: 450,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
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
                        <Typography variant="body2" color="text.secondary">
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
                            <Typography variant="body1" color="text.primary">
                                {product.price} $
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Price discount: {product.discountPercentage}%
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

            </Card>
        </>
    )

}

export default ProductCard