import { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { newsApiService } from "service/NewsApi.service"; // Import the newsApiService
import { Article } from "types/Article";
import BackdropProgress from "components/Common/BackdropProgress";
import { useCountry } from "context/CountryContext";
import ArticalCard from "components/Common/ArticalCard";

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
              <ArticalCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
