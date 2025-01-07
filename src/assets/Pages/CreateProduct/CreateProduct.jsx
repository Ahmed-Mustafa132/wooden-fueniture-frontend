import  { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Paper,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axiosInstance from "../../axiosConfig/axiosConfig";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stockQuantity: "",
    material: "",
    dimensions: "",
    weight: "",
    finish: "",
    warranty: "",
    delivery: "",
  });

  const categories = [
    { value: "furniture", label: "Furniture" },
    { value: "decor", label: "Decor" },
    { value: "kitchen", label: "Kitchen" },
    { value: "outdoor", label: "Outdoor" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const formattedData = {
    ...formData,
    price: Number(formData.price),
    stockQuantity: Number(formData.stockQuantity),
  };
console.log(formattedData);
  try {
    const response = await axiosInstance.post("/products", formattedData);
    if (response.status === 201 || response.status === 200) {
      alert("Product created successfully!");
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stockQuantity: "",
        material: "",
        dimensions: "",
        weight: "",
        finish: "",
        warranty: "",
        delivery: "",
      });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    alert(
      "Failed to create product: " + error.response?.data?.error ||
        "Unknown error"
    );
  }
};

  return (
    <Container maxWidth="md">
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Create New Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Product title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="number"
                label="Price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                variant="outlined"
                InputProps={{
                  startAdornment: "$",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                variant="outlined"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                type="number"
                label="Stock Quantity"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Length x Width x Height"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Material"
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="material used"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Weight in kg"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Finish"
                name="finish"
                value={formData.finish}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Material finish/color"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Warranty"
                name="warranty"
                value={formData.warranty}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Warranty period"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Delivery Information"
                name="delivery"
                value={formData.delivery}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Estimated delivery time"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                Create Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default CreateProduct;
