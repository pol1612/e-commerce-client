import React, { useEffect, useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_URL
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      console.log(`${baseApiUrl}/products/` + id)
      const response = await axios.get(`${baseApiUrl}/products/` + id);
      console.log(response.data);
      setProductData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    setProductData({ ...productData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${baseApiUrl}/products/` + id, productData);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <React.Fragment>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid
            container
            alignContent="center"
            justifyContent="center"
            style={{paddingTop: "50px"}}
        >
          <Paper
              elevation={3}
              style={{
                width: 550,
              }}
          >
            <Grid
                //sx={gridStyle}
                container
                direction="column"
                alignItems="center"
                gap={3}
            >
              <br/>
              <Grid item>
                <Typography variant="h5">Add product</Typography>
              </Grid>


              <Grid item>
                <Grid container direction="row" gap={3}>
                  <Grid item>
                    <Grid container direction="column" gap={2}>
                      <Grid item>
                        <TextField
                            label="Title"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={productData.title || ""}
                            name="title"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Brand"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={productData.brand || ""}
                            name="brand"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Category"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={productData.category || ""}
                            name="category"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Description"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={productData.description || ""}
                            name="description"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Discount Percentage"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            type="number"
                            value={productData.discountPercentage || ""}
                            name="discountPercentage"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container direction="column" gap={2}>
                      <Grid item>
                        <TextField
                            label="Image link"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={productData.images || ""}
                            //value={productData.images.toString()}
                            name="images"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Price"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            type="number"
                            value={productData.price || ""}
                            name="price"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Rating"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            type="number"
                            value={productData.rating || ""}
                            name="rating"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Stock"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            type="number"
                            value={productData.stock || ""}
                            name="stock"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                            label="Thumbnail"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={productData.thumbnail || ""}
                            name="thumbnail"
                            onChange={handleInputChanges}
                            sx={{
                              backgroundColor: "#ADD8E6",
                            }}
                        />
                      </Grid>
                    </Grid>

                  </Grid>

                </Grid>
              </Grid>
              <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpdate}
                >
                  Update Product
                </Button>
              </Grid>
              <Grid item></Grid>


            </Grid>
          </Paper>
        </Grid>


      </React.Fragment>
  );
};

export default UpdateProduct;
