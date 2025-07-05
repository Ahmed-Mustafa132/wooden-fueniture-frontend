import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Container,
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  MonetizationOn,
  ShoppingCart,
  CheckCircle,
  Pending,
  Edit,
  Visibility,
} from "@mui/icons-material";
import axiosInstance from "../../axiosConfig/axiosConfig";
import { useNavigate } from "react-router-dom";

const OrdersDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [editDialog, setEditDialog] = useState({ open: false, order: null });
  const [productsDialog, setProductsDialog] = useState({
    open: false,
    order: null,
  });
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/");
    } else {
      fetchOrders();
    }
  }, []);

  const fetchOrders = () => {    
    axiosInstance.get("/orders").then((response) => {
      setOrders(response.data.data.orders || []);
      setTotalRevenue(response.data.data.totalRevenue || 0);
    });
  };

  const handleEditStatus = (order) => {
    setEditDialog({ open: true, order });
    setNewStatus(order.status);
  };

  const handleViewProducts = (order) => {
    setProductsDialog({ open: true, order });
  };

  const handleStatusUpdate = async () => {
    try {
      await axiosInstance.put(`/orders/${editDialog.order._id}/status`, {
        status: newStatus,
      });

      // Update local state
      setOrders(
        orders.map((order) =>
          order._id === editDialog.order._id
            ? { ...order, status: newStatus }
            : order
        )
      );

      setEditDialog({ open: false, order: null });
      setNewStatus("");
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "success";
      case "pending":
        return "warning";
      case "cancelled":
        return "info";
      default:
        return "default";
    }
  };

  const calculateProductTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const StatCard = ({ title, value, icon }) => (
    <Card elevation={3}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Box>
          {icon}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Orders Dashboard
        </Typography>

        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Total Orders"
              value={orders.length}
              icon={
                <ShoppingCart sx={{ fontSize: 40, color: "primary.main" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Total Revenue"
              value={"$" + totalRevenue || 0}
              icon={
                <MonetizationOn sx={{ fontSize: 40, color: "success.main" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Pending Orders"
              value={
                orders.filter((order) => order.status === "pending").length
              }
              icon={<Pending sx={{ fontSize: 40, color: "warning.main" }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Completed Orders"
              value={
                orders.filter((order) => order.status === "completed").length
              }
              icon={
                <CheckCircle sx={{ fontSize: 40, color: "success.main" }} />
              }
            />
          </Grid>
        </Grid>

        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Products Count</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>{order.userName}</TableCell>
                  <TableCell>{order.productsCount} items</TableCell>
                  <TableCell>${order.totalPrice}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={getStatusColor(order.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleViewProducts(order)}
                      color="info"
                      size="small"
                      title="View Products"
                    >
                      <Visibility />
                    </IconButton>
                    <IconButton
                      onClick={() => handleEditStatus(order)}
                      color="primary"
                      size="small"
                      title="Edit Status"
                    >
                      <Edit />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* View Products Dialog */}
        <Dialog
          open={productsDialog.open}
          onClose={() => setProductsDialog({ open: false, order: null })}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            Order Products - {productsDialog.order?._id}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" color="textSecondary">
                Customer: {productsDialog.order?.userName}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Order Total: ${productsDialog.order?.totalPrice}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Status:
                <Chip
                  label={productsDialog.order?.status}
                  color={getStatusColor(productsDialog.order?.status)}
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />

            {productsDialog.order?.products &&
            productsDialog.order.products.length > 0 ? (
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell align="center">Quantity</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productsDialog.order.products.map((product, index) => (
                      <TableRow key={product.id || index}>
                        <TableCell>
                          <Typography variant="body2" fontWeight="medium">
                            {product.productTitle}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={product.quantity}
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell align="right">${product.price}</TableCell>
                        <TableCell align="right">
                          <Typography fontWeight="medium">
                            $
                            {calculateProductTotal(
                              product.price,
                              product.quantity
                            )}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography color="textSecondary" align="center">
                No products found for this order
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setProductsDialog({ open: false, order: null })}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Edit Status Dialog */}
        <Dialog
          open={editDialog.open}
          onClose={() => setEditDialog({ open: false, order: null })}
        >
          <DialogTitle>Edit Order Status</DialogTitle>
          <DialogContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Order ID: {editDialog.order?._id}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Customer: {editDialog.order?.userName}
              </Typography>
            </Box>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Select New Status:
              </Typography>
              <Select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialog({ open: false, order: null })}>
              Cancel
            </Button>
            <Button onClick={handleStatusUpdate} variant="contained">
              Update Status
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default OrdersDashboard;
