import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          textAlign: "center",
          gap: 3,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 100, color: "error.main" }} />

        <Typography variant="h1" color="error">
          404
        </Typography>

        <Typography variant="h4" color="text.secondary">
          Oops! Page Not Found
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600 }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
          sx={{
            mt: 2,
            px: 4,
            py: 1,
            borderRadius: 2,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Error;
