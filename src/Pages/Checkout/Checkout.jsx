import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Grid,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../Theme/Theme";
import { useCart } from "../../Context/CartContext";
import axiosInstance from "../../axiosConfig/axiosConfig";
const steps = ["Shipping Address", "Review Order"];

const StyledPaper = styled(Paper)(() => ({
  padding: "24px",
  marginTop: "24px",
  marginBottom: "24px",
  backgroundColor: theme.colors.background.paper,
  boxShadow: `0 4px 6px ${theme.colors.shadow}`,
}));

const StyledTextField = styled(TextField)(() => ({
  "& label": {
    color: theme.colors.text.secondary,
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.colors.primary.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.colors.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: theme.colors.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.colors.primary.dark,
  },
}));

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { cartItems } = useCart();
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
      setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    };
    const handleSubmet = () => {
        axiosInstance
          .post("/orders/create", {
            cartItems,
            formValues,
            total: calculateTotal(),
          })
          .then((response) => {
            console.log(response);
            setActiveStep(2);
          })
          .catch((error) => {
            console.log(error);
          });
    };

  return (
    <Container maxWidth="lg">
      <StyledPaper>
        <Typography variant="h4" align="center" gutterBottom>
          إتمام الطلب
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                name="name"
                label="الاسم"
                value={formValues.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                name="address"
                label="العنوان"
                value={formValues.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="city"
                label="المدينة"
                value={formValues.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="phone"
                label="رقم الهاتف"
                value={formValues.phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        )}

        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              ملخص الطلب
            </Typography>
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.name}
                    secondary={`الكمية: ${item.quantity}`}
                  />
                  <Typography variant="body1">
                    ${item.price * item.quantity}
                  </Typography>
                </ListItem>
              ))}
              <Divider sx={{ my: 2 }} />
              <ListItem>
                <ListItemText primary="الإجمالي" />
                <Typography variant="h6">${calculateTotal()}</Typography>
              </ListItem>
            </List>
          </Box>
        )}

        {activeStep === steps.length ? (
          <Box>
            <Typography variant="h5" gutterBottom>
              شكراً لطلبك!
            </Typography>
            <Typography variant="subtitle1">
              رقم طلبك هو #123456. سنرسل لك رسالة تأكيد.
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                رجوع
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <StyledButton type="submet" onClick={handleSubmet}>
                submet
              </StyledButton>
            ) : (
              <StyledButton onClick={handleNext}>next</StyledButton>
            )}
          </Box>
        )}
      </StyledPaper>
    </Container>
  );
};


export default Checkout;
