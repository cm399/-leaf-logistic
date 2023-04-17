import { useState, useEffect } from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { newsApiService } from "service/NewsApi.service"; // Import the newsApiService
import { Article } from "types/Article";
import BackdropProgress from "components/Common/BackdropProgress";
import { useCountry } from "context/CountryContext";
import { Link } from "react-router-dom";

export function TopNewsPage() {
  const [topNews, setTopNews] = useState<Article[]>([]); // State to hold the top news articles
  const [isLoading, setIsLoading] = useState(false); // State to hold the top news articles
  const { country } = useCountry();

  const fetchNews = async (selectedCountry: string) => {
    // Fetch top headlines from newsApiService on component mount
    try {
      setIsLoading(true);
      const res = await newsApiService.fetchTopHeadlines(selectedCountry);
      setTopNews(res.articles); // Update the state with fetched news articles
      setIsLoading(false);
    } catch (error) {
      setTopNews([]); // Update the state with fetched news articles
      setIsLoading(false);
      console.error("Failed to fetch top headlines:", error);
    }
  };

  useEffect(() => {
    fetchNews(country);
  }, [country]); // Empty dependency array to fetch only on component mount

  return (
    <>
      <BackdropProgress open={isLoading} />
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Typography variant="h5" my={2}>
          Top News from {country === "gb" ? "Great Britain" : "United State"}
        </Typography>

        <Grid container spacing={2}>
          {topNews.map((article, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  height: "100%",
                }}
              >
                <CardHeader
                  title={article.title}
                  titleTypographyProps={{ variant: "h6" }}
                  className="ellipse-2-line"
                />
                <Box
                  sx={{
                    height: "12.125rem",
                    backgroundImage: `url(${article.urlToImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="ellipse-3-line"
                    sx={{ height: "60px" }}
                  >
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  sx={{ justifyContent: "end", pt: 0 }}
                >
                  <Button size="large">
                    <Link to="/newsDetail">Read More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
