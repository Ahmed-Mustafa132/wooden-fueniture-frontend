import { useState } from "react";
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
    imageFile: null,
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
    const formDataToSend = new FormData();

    // إضافة الصورة كملف
    formDataToSend.append("image", formData.imageFile);

    // إضافة باقي البيانات
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("stockQuantity", formData.stockQuantity);
    formDataToSend.append("material", formData.material);
    formDataToSend.append("dimensions", formData.dimensions);
    formDataToSend.append("weight", formData.weight);
    formDataToSend.append("finish", formData.finish);
    formDataToSend.append("warranty", formData.warranty);
    formDataToSend.append("delivery", formData.delivery);

    try {
      const response = await axiosInstance.post("/products", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201 || response.status === 200) {
        alert("Product created successfully!");
        setFormData({
          title: "",
          description: "",
          price: "",
          category: "",
          image: "",
          imageFile: null,
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
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Error creating product";
      alert("Failed to create product: " + errorMessage);
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
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="image-upload"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFormData({
                    ...formData,
                    imageFile: file,
                    image: URL.createObjectURL(file),
                  });
                }}
              />
              <label htmlFor="image-upload">
                <Button
                  variant="contained"
                  component="span"
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  Upload Product Image
                </Button>
              </label>
              {formData.image && (
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <img
                    src={formData.image}
                    alt="Product preview"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </Box>
              )}
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
