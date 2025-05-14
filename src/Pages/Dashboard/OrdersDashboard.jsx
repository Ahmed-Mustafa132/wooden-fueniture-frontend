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
} from "@mui/material";
import {
  MonetizationOn,
  ShoppingCart,
  CheckCircle,
  Pending,
} from "@mui/icons-material";
import axiosInstance from "../../axiosConfig/axiosConfig";

const OrdersDashboard = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosInstance.get("/orders").then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  }, []);
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "success";
      case "pending":
        return "warning";
      case "processing":
        return "info";
      default:
        return "default";
    }
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
              value={`$${orders.reduce((acc, order) => acc + order.amount, 0)}`}
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
                <TableCell>Product</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.products[0]}</TableCell>
                  <TableCell>${order.amount}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={getStatusColor(order.status)}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default OrdersDashboard;
