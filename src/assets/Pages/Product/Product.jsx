import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Rating,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import axiosInstance from "../../axiosConfig/axiosConfig";

const theme = {
  colors: {
    primary: {
      main: "#1976d2",
      dark: "#1565c0",
      light: "#2196F3",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#555555",
    },
    background: {
      paper: "#ffffff",
      default: "#f8f9fa",
    },
    shadow: "rgba(0,0,0,0.15)",
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
      axiosInstance.get(`/products/${id}`)
        .then((response) => {
            setProduct(response.data);
        })
        .catch((error) => {
            console.error("Error fetching product:", error);
        });
  }, [id]);

  if (!product) return null;

  return (
    <Box sx={{ bgcolor: theme.colors.background.default, py: 8 }}>
      <Container>
        <Grid container spacing={6}>
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: `0 20px 40px ${theme.colors.shadow}`,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Box>
              <Chip
                label={product.category}
                sx={{
                  bgcolor: theme.colors.primary.light,
                  color: "white",
                  mb: 2,
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: theme.colors.text.primary,
                  mb: 2,
                }}
              >
                {product.title}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Rating value={4.5} precision={0.5} readOnly />
                <Typography
                  variant="body1"
                  sx={{ ml: 1, color: theme.colors.text.secondary }}
                >
                  (4.5 / 5)
                </Typography>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  color: theme.colors.primary.main,
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                ${product.price}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.colors.text.secondary,
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                {product.description}
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  py: 2,
                  px: 4,
                  bgcolor: theme.colors.primary.main,
                  "&:hover": {
                    bgcolor: theme.colors.primary.dark,
                  },
                }}
              >
                Add to Cart
              </Button>

              <Divider sx={{ my: 4 }} />

              {/* Features */}
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalShippingIcon
                    sx={{ color: theme.colors.primary.main, mr: 2 }}
                  />
                  <Typography>Free Delivery</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <VerifiedIcon
                    sx={{ color: theme.colors.primary.main, mr: 2 }}
                  />
                  <Typography>2 Year Warranty</Typography>
                </Box>
              </Stack>

              {/* Specifications */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: theme.colors.text.primary,
                  }}
                >
                  Specifications
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { label: "Material", value: "Solid Wood" },
                    { label: "Dimensions", value: "120 x 80 x 75 cm" },
                    { label: "Weight", value: "25 kg" },
                    { label: "Finish", value: "Natural Wood" },
                  ].map((spec, index) => (
                    <Grid item xs={6} key={index}>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.colors.text.secondary }}
                      >
                        {spec.label}:
                      </Typography>
                      <Typography variant="body1">{spec.value}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
