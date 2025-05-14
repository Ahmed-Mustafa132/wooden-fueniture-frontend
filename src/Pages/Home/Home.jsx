import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
  Box,
  Rating,
  Avatar,
} from "@mui/material";
import Header from "../../components/Header/Header";
import NewProducts from "../../components/NewProducts/NewProducts";
import theme from "../../Theme/Theme";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/Images/AboutmeImg.jpg";


export default function Home() {

const navigate = useNavigate();
  return (
    <>
      <Header />
      <NewProducts />

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
                  image={Image}
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
                  onClick={()=> navigate("/about")}
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
                      &#34;
                      {review.comment}
                      &#34;
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
}
