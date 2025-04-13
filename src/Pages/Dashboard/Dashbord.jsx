import React from 'react';
import { 
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Tooltip,
  Badge,
  Chip,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  ShoppingCart,
  Assessment,
  Stars,
  Inventory,
  TrendingUp,
  People,
  AttachMoney,
  LocalShipping,
  Notifications,
  Message,
  Timeline,
  MoreVert,
  ArrowUpward,
  ArrowDownward,
  CalendarToday,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import theme from '../../Theme/Theme';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: theme.colors.background.paper,
  '&:hover': {
    transform: 'translateY(-8px)',
  },
});

const StatValue = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: theme.colors.primary.main,
});

const IconWrapper = styled(Box)({
  backgroundColor: theme.colors.background.default,
  borderRadius: '50%',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Dashboard = () => {
  const navigate = useNavigate();

  const mainMetrics = [
    {
      title: 'Total Revenue',
      value: '$145,678',
      description: 'Up 25% from last month',
      icon: <AttachMoney />,
      route: '/revenue',
      buttonText: 'Financial Details'
    },
    {
      title: 'Active Orders',
      value: '324',
      description: '48 pending shipment',
      icon: <LocalShipping />,
      route: '/orders',
      buttonText: 'View Orders'
    },
    {
      title: 'Customer Base',
      value: '2,845',
      description: '156 new this month',
      icon: <People />,
      route: '/customers',
      buttonText: 'Customer Details'
    },
    {
      title: 'Growth Rate',
      value: '+32%',
      description: 'Year over year',
      icon: <TrendingUp />,
      route: '/growth',
      buttonText: 'View Analytics'
    }
  ];

  const recentOrders = [
    { id: '#ORD-789', customer: 'John Doe', amount: '$1,200', status: 'Processing' },
    { id: '#ORD-790', customer: 'Jane Smith', amount: '$850', status: 'Shipped' },
    { id: '#ORD-791', customer: 'Mike Johnson', amount: '$2,300', status: 'Delivered' },
  ];

  const productMetrics = {
    topSelling: ['Wooden Chair', 'Dining Table', 'Coffee Table'],
    inventory: {
      inStock: 75,
      lowStock: 15,
      outOfStock: 10,
    }
  };

  const recentTransactions = [
    { id: 'TRX001', date: '2024-01-15', type: 'Sale', amount: 1200, status: 'Completed' },
    { id: 'TRX002', date: '2024-01-14', type: 'Refund', amount: -350, status: 'Processed' },
    { id: 'TRX003', date: '2024-01-14', type: 'Sale', amount: 890, status: 'Completed' },
    { id: 'TRX004', date: '2024-01-13', type: 'Sale', amount: 1500, status: 'Pending' },
  ];

  const upcomingDeliveries = [
    { id: 'DEL001', customer: 'John Smith', items: 3, date: '2024-01-16', address: '123 Main St' },
    { id: 'DEL002', customer: 'Sarah Wilson', items: 2, date: '2024-01-17', address: '456 Oak Ave' },
    { id: 'DEL003', customer: 'Mike Brown', items: 1, date: '2024-01-18', address: '789 Pine Rd' },
  ];

  const customerFeedback = [
    { customer: 'Alice Cooper', rating: 5, comment: 'Excellent quality furniture!', date: '2024-01-15' },
    { customer: 'Bob Dylan', rating: 4, comment: 'Great service, quick delivery', date: '2024-01-14' },
  ];

  const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
  ];

  const categoryData = [
    { name: 'Tables', value: 400 },
    { name: 'Chairs', value: 300 },
    { name: 'Beds', value: 300 },
    { name: 'Cabinets', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ py: 4, backgroundColor: theme.colors.background.default, minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 4,
            color: theme.colors.text.primary,
            fontWeight: 600,
            textAlign: 'center'
          }}
        >
          Dashboard Overview
        </Typography>

        {/* Main Metrics */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {mainMetrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard elevation={2}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: theme.colors.text.primary }}>
                      {metric.title}
                    </Typography>
                    <IconWrapper>
                      {metric.icon}
                    </IconWrapper>
                  </Box>
                  <StatValue variant="h3">{metric.value}</StatValue>
                  <Typography variant="body2" sx={{ color: theme.colors.text.secondary }}>
                    {metric.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: theme.colors.primary.main,
                      '&:hover': { backgroundColor: theme.colors.primary.dark }
                    }}
                    onClick={() => navigate(metric.route)}
                  >
                    {metric.buttonText}
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Charts and Analytics */}
        <Grid container spacing={3}>
          {/* Sales Analytics Chart */}
          <Grid item xs={12} lg={8}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Sales Analytics</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <RechartsTooltip />
                    <Bar dataKey="sales" fill={theme.colors.primary.main} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Category Distribution */}
          <Grid item xs={12} lg={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Product Categories</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
                <Box sx={{ mt: 2 }}>
                  {categoryData.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: COLORS[index % COLORS.length],
                          mr: 1
                        }}
                      />
                      <Typography variant="body2">{item.name}: {item.value} items</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Recent Orders */}
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Recent Orders</Typography>
                <List>
                  {recentOrders.map((order, index) => (
                    <React.Fragment key={order.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: theme.colors.primary.main }}>
                            <ShoppingCart />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={`${order.id} - ${order.customer}`}
                          secondary={`Amount: ${order.amount} | Status: ${order.status}`}
                        />
                      </ListItem>
                      {index < recentOrders.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Customer Feedback */}
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Latest Customer Feedback</Typography>
                <Stack spacing={2}>
                  {customerFeedback.map((feedback, index) => (
                    <Paper key={index} elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="subtitle2">{feedback.customer}</Typography>
                        <Stack direction="row" spacing={0.5}>
                          {[...Array(feedback.rating)].map((_, i) => (
                            <Stars key={i} sx={{ color: 'warning.main', fontSize: 18 }} />
                          ))}
                        </Stack>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {feedback.comment}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                        <CalendarToday sx={{ fontSize: 14, mr: 0.5 }} />
                        {feedback.date}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Recent Transactions */}
          <Grid item xs={12}>
            <StyledCard>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">Recent Transactions</Typography>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </Box>
                <TableContainer component={Paper} elevation={0}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Transaction ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.id}</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell align="right" sx={{
                            color: transaction.amount > 0 ? 'success.main' : 'error.main',
                            fontWeight: 'bold'
                          }}>
                            ${Math.abs(transaction.amount)}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={transaction.status}
                              color={transaction.status === 'Completed' ? 'success' : 'warning'}
                              size="small"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>Quick Actions</Typography>
                <Grid container spacing={2}>
                  {[
                    { title: 'Add New Product', icon: <Inventory />, color: '#4CAF50' },
                    { title: 'Process Orders', icon: <LocalShipping />, color: '#2196F3' },
                    { title: 'Customer Support', icon: <Message />, color: '#FF9800' },
                    { title: 'Generate Report', icon: <Assessment />, color: '#9C27B0' },
                  ].map((action, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          p: 2,
                          borderColor: action.color,
                          color: action.color,
                          '&:hover': {
                            backgroundColor: `${action.color}10`,
                            borderColor: action.color,
                          },
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1
                        }}
                      >
                        {React.cloneElement(action.icon, { sx: { fontSize: 30 } })}
                        {action.title}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Upcoming Deliveries */}
          <Grid item xs={12}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Upcoming Deliveries</Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Delivery ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Items</TableCell>
                        <TableCell>Delivery Date</TableCell>
                        <TableCell>Shipping Address</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {upcomingDeliveries.map((delivery) => (
                        <TableRow key={delivery.id}>
                          <TableCell>{delivery.id}</TableCell>
                          <TableCell>{delivery.customer}</TableCell>
                          <TableCell>
                            <Chip label={`${delivery.items} items`} size="small" />
                          </TableCell>
                          <TableCell>{delivery.date}</TableCell>
                          <TableCell>{delivery.address}</TableCell>
                          <TableCell>
                            <Tooltip title="View Details">
                              <IconButton size="small">
                                <MoreVert />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
