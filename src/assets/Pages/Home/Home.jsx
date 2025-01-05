import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
  Box,
  Rating,
  Avatar,
  Stack,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import style from "./Home.module.css";

const theme = {
  colors: {
    primary: {
      main: "#1976d2",
      dark: "#1565c0",
      light: "#2196F3",
    },
    secondary: {
      main: "#21CBF3",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#555555",
    },
    divider: "rgba(255,255,255,0.1)",
    overlay: "rgba(0,0,0,0.1)",
    shadow: "rgba(0,0,0,0.15)",
  },
};

export default function Home() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Wooden Table",
      price: 500,
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
    },
    {
      id: 2,
      title: "Wooden Chair",
      price: 300,
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
    },
    {
      id: 3,
      title: "Coffee Table",
      price: 400,
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
    },
  ];

  return (
    <>
      <section className="section1">
        <Box
          sx={{
            minHeight: "100vh",
            background: `linear-gradient(135deg, ${theme.colors.background.paper} 0%, ${theme.colors.background.default} 100%)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Animated Shapes */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: `linear-gradient(45deg, ${theme.colors.primary.light}, ${theme.colors.secondary.main})`,
              opacity: 0.1,
              animation: "float 6s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-20px)" },
              },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              left: "10%",
              width: "200px",
              height: "200px",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              background: `linear-gradient(-45deg, ${theme.colors.secondary.main}, ${theme.colors.primary.light})`,
              opacity: 0.08,
              animation: "morph 8s ease-in-out infinite",
              "@keyframes morph": {
                "0%, 100%": {
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                },
                "50%": { borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%" },
              },
            }}
          />

          <Container maxWidth="xl">
            <Grid
              container
              spacing={8}
              alignItems="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  {/* Animated Badge */}
                  <Box
                    sx={{
                      display: "inline-block",
                      background: `linear-gradient(45deg, ${theme.colors.primary.light}, ${theme.colors.secondary.main})`,
                      px: 3,
                      py: 1,
                      borderRadius: 5,
                      mb: 4,
                      animation: "slideIn 1s ease-out",
                      "@keyframes slideIn": {
                        from: { transform: "translateX(-100px)", opacity: 0 },
                        to: { transform: "translateX(0)", opacity: 1 },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 600,
                        letterSpacing: 2,
                      }}
                    >
                      PREMIUM WOODCRAFT
                    </Typography>
                  </Box>

                  {/* Main Title */}
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "3.5rem", sm: "4rem", md: "5rem" },
                      fontWeight: 900,
                      lineHeight: 1.1,
                      mb: 3,
                      background: `linear-gradient(45deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "fadeIn 1s ease-out",
                      "@keyframes fadeIn": {
                        from: { opacity: 0, transform: "translateY(20px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                  >
                    Crafting Dreams Into Reality
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.colors.text.secondary,
                      mb: 4,
                      maxWidth: 600,
                      lineHeight: 1.8,
                      fontWeight: 300,
                      animation: "fadeIn 1s ease-out 0.3s backwards",
                    }}
                  >
                    Experience the perfect fusion of traditional craftsmanship
                    and modern innovation. Each piece we create is a masterpiece
                    of dedication and artistry.
                  </Typography>

                  {/* CTA Buttons */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                    sx={{
                      mb: 6,
                      animation: "fadeIn 1s ease-out 0.6s backwards",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        py: 2,
                        px: 6,
                        borderRadius: "50px",
                        fontSize: "1.1rem",
                        textTransform: "none",
                        background: `linear-gradient(45deg, ${theme.colors.primary.main}, ${theme.colors.primary.dark})`,
                        boxShadow: `0 10px 30px ${theme.colors.shadow}`,
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: `0 15px 40px ${theme.colors.shadow}`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Start Your Project
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        py: 2,
                        px: 6,
                        borderRadius: "50px",
                        fontSize: "1.1rem",
                        textTransform: "none",
                        borderWidth: 2,
                        "&:hover": {
                          borderWidth: 2,
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      View Gallery
                    </Button>
                  </Stack>

                  {/* Stats */}
                  <Box
                    sx={{
                      p: 4,
                      bgcolor: "rgba(255,255,255,0.8)",
                      borderRadius: 3,
                      backdropFilter: "blur(10px)",
                      animation: "fadeIn 1s ease-out 0.9s backwards",
                    }}
                  >
                    <Grid container spacing={4}>
                      {[
                        { number: "25+", label: "Years Experience" },
                        { number: "1000+", label: "Projects Completed" },
                        { number: "100%", label: "Client Satisfaction" },
                      ].map((stat, index) => (
                        <Grid item xs={4} key={index}>
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 900,
                              color: theme.colors.primary.main,
                              mb: 1,
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            sx={{
                              color: theme.colors.text.secondary,
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    animation: "fadeIn 1s ease-out 1.2s backwards",
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f"
                    alt="Premium Woodworking"
                    sx={{
                      width: "100%",
                      borderRadius: 4,
                      position: "relative",
                      boxShadow: `20px 20px 60px ${theme.colors.shadow}`,
                      transition: "all 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.02) rotate(1deg)",
                        boxShadow: `25px 25px 80px ${theme.colors.shadow}`,
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      left: -20,
                      right: 20,
                      bottom: 20,
                      borderRadius: 4,
                      background: `linear-gradient(45deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main})`,
                      opacity: 0.1,
                      zIndex: -1,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>

      <section className="section2">
        <Container>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ color: theme.colors.text.primary }}
          >
            Products Featured
          </Typography>

          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: theme.colors.text.primary }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: theme.colors.primary.main }}
                    >
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="section3">
        <Container>
          <Box sx={{ py: 8 }}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: "bold",
                mb: 6,
                color: theme.colors.text.primary,
              }}
            >
              About Us
            </Typography>

            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="450"
                  image="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f"
                  alt="Woodworking"
                  sx={{
                    borderRadius: 2,
                    boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: theme.colors.text.primary }}
                >
                  Crafting Excellence
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    mb: 3,
                    color: theme.colors.text.secondary,
                  }}
                >
                  At WoodCraft, we transform raw wood into masterpieces. Our
                  passion for woodworking drives us to create furniture that
                  combines traditional craftsmanship with modern design.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: theme.colors.primary.main,
                    "&:hover": {
                      bgcolor: theme.colors.primary.dark,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <section className="section4">
        <Container>
          <Box sx={{ py: 8 }}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: "bold",
                mb: 6,
                color: theme.colors.text.primary,
              }}
            >
              Client Reviews
            </Typography>

            <Grid container spacing={4}>
              {[
                {
                  name: "John Smith",
                  rating: 5,
                  comment:
                    "Exceptional quality furniture. The attention to detail is remarkable.",
                  position: "Interior Designer",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
                {
                  name: "Sarah Johnson",
                  rating: 5,
                  comment:
                    "Beautiful craftsmanship. My custom table exceeded expectations.",
                  position: "Home Owner",
                  image: "https://randomuser.me/api/portraits/women/1.jpg",
                },
                {
                  name: "Mike Wilson",
                  rating: 5,
                  comment:
                    "Professional service and outstanding results. Highly recommended!",
                  position: "Business Owner",
                  image: "https://randomuser.me/api/portraits/men/2.jpg",
                },
              ].map((review, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
                      boxShadow: `0 4px 20px ${theme.colors.shadow}`,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar src={review.image} sx={{ mr: 2 }} />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: theme.colors.text.primary }}
                        >
                          {review.name}
                        </Typography>
                        <Typography sx={{ color: theme.colors.text.secondary }}>
                          {review.position}
                        </Typography>
                      </Box>
                    </Box>

                    <Rating value={review.rating} readOnly sx={{ mb: 2 }} />

                    <Typography sx={{ color: theme.colors.text.secondary }}>
                      "{review.comment}"
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>

      <footer>
        <Box
          sx={{
            bgcolor: theme.colors.primary.main,
            backgroundImage: `linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%)`,
            color: theme.colors.background.paper,
            py: 6,
            boxShadow: `0 -4px 20px ${theme.colors.shadow}`,
          }}
        >
          <Container>
            <Grid container spacing={8}>
              {/* Brand Section */}
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textShadow: `2px 2px 4px ${theme.colors.shadow}`,
                  }}
                >
                  WoodCraft
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 300 }}>
                  Crafting Excellence Since 2010
                </Typography>
              </Grid>

              {/* Quick Links */}
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Quick Links
                  </Typography>
                  {["Home", "Products", "About", "Contact"].map((link) => (
                    <Link
                      key={link}
                      href={`/${link.toLowerCase()}`}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        transition: "0.3s",
                        "&:hover": {
                          pl: 1,
                          opacity: 0.8,
                        },
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Contact & Social */}
              <Grid item xs={12} md={4}>
                <Stack spacing={3}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Stay Connected
                  </Typography>

                  <Box>
                    <Typography>info@woodcraft.com</Typography>
                    <Typography>(123) 456-7890</Typography>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      "& .MuiIconButton-root": {
                        bgcolor: theme.colors.overlay,
                        transition: "0.3s",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.2)",
                          transform: "translateY(-3px)",
                        },
                      },
                    }}
                  >
                    <IconButton
                      color="inherit"
                      href="https://facebook.com"
                      target="_blank"
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      href="https://instagram.com"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      href="https://twitter.com"
                      target="_blank"
                    >
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      href="https://linkedin.com"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4, borderColor: theme.colors.divider }} />

            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ mb: 1 }}>
                © {new Date().getFullYear()} WoodCraft. All Rights Reserved.
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                All content and designs presented on this website are protected
                under international copyright laws.
              </Typography>
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
}
