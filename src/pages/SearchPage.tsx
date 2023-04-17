import { useState, useCallback, useRef, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { newsApiService } from "service/NewsApi.service"; // Import the newsApiService
import { Article } from "types/Article";
import BackdropProgress from "components/Common/BackdropProgress";
import { Link } from "react-router-dom";
import useFilterNews from "hooks/useFilterNews";
import { Search } from "@mui/icons-material";
import { useCountry } from "context/CountryContext";

export function SearchPage() {
  const [topNews, setTopNews] = useState<Article[]>([]); // State to hold the top news articles
  const [isLoading, setIsLoading] = useState(false); // State to hold the loading status
  const [isShowNoRecord, setIsShowNoRecord] = useState(false); // State to hold the loading status
  const { country } = useCountry();
  const textRef = useRef("");

  const fetchNews = useCallback(
    async (search: string) => {
      // Fetch top headlines from newsApiService on component mount
      try {
        setIsLoading(true);
        const res = await newsApiService.fetchTopHeadlines(country, search);
        setTopNews(res.articles); // Update the state with fetched news articles
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setTopNews([]); // Update the state with fetched news articles
        console.error("Failed to fetch top headlines:", error);
      }
    },
    [country]
  );

  useEffect(() => {
    fetchNews(textRef.current);
  }, [country]); // Empty dependency array to fetch only on component mount

  const changeCallback = useCallback(
    (val: string) => {
      textRef.current = val;
      fetchNews(val);
      setIsShowNoRecord(true);
    },
    [fetchNews]
  );

  const { handleSearchKeywordChange, keyword } = useFilterNews(changeCallback);

  return (
    <>
      <BackdropProgress open={isLoading} />
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Typography variant="h5" my={2}>
          Search top news from{" "}
          {country === "gb" ? "Great Britain" : "United State"} by term
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              value={keyword}
              placeholder="Search term..."
              onChange={(e) => {
                setIsShowNoRecord(false);
                handleSearchKeywordChange(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {topNews.length > 0 ? (
            topNews.map((article, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                {/* Render the card component for each article */}
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    height: "100%",
                  }}
                >
                  {/* Card content */}
                  {/* Render the article title */}
                  <CardHeader
                    title={article.title}
                    titleTypographyProps={{ variant: "h6" }}
                    className="ellipse-2-line"
                  />
                  {/* Render the article image */}
                  <Box
                    sx={{
                      height: "12.125rem",
                      backgroundImage: `url(${article.urlToImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                  {/* Render the article description */}
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="ellipse-3-line"
                    >
                      {article.description}
                    </Typography>
                  </CardContent>

                  {/* Card actions */}
                  {/* Render the article source and publish date */}
                  <CardActions>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="span"
                      className="ellipse-1-line"
                    >
                      {article.source.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="span"
                    >
                      {new Date(article.publishedAt).toDateString()}
                    </Typography>
                  </CardActions>

                  {/* Render the read more button */}
                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link to="/newsDetail">Read More</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : keyword && !isLoading && isShowNoRecord ? (
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                No result found for <strong>"{keyword}"</strong>
              </Typography>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Container>
    </>
  );
}
