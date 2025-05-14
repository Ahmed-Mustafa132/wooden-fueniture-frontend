import  { useState, useEffect } from "react";
import {Link} from "react-router-dom" 
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import theme from "../../Theme/Theme";
import axiosInstance from "../../axiosConfig/axiosConfig";

export default function DashboardProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosInstance.get("/products").then((response) => {
            setProducts(response.data.products);
            console.log(response.data.products);
        });
      }, []);
    
  const handleEdit = (id) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id) => {
    axiosInstance.delete(`/products/${id}`).then((response) => {
      setProducts(products.filter((product) => product._id !== id));
    });
  };

  return (
    
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: theme.colors.text.primary, mb: 3 }}
        >
          Products Management
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Search products..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flexGrow: 1 }}
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{ mr: 1, color: theme.colors.text.secondary }}
                />
              ),
            }}
          />
          <Link to="/dashboard/CreateProduct">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: theme.colors.primary.main,
                "&:hover": { backgroundColor: theme.colors.primary.dark },
              }}
            >
              Add New Product
            </Button>
          </Link>
        </Stack>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow
                sx={{ backgroundColor: theme.colors.background.default }}
              >
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>rate</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.stockQuantity}</TableCell>
                  <TableCell>{product.rating}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleEdit(product.id)}
                      sx={{ color: theme.colors.primary.main }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(product._id)}
                      sx={{ color: theme.colors.primary.dark }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
