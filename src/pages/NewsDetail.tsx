import { Button, Container, Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { formatDateString } from "utils/commonUils";

const NewsDetail = () => {
  const data = {
    source: { id: null, name: "KTLA Los Angeles" },
    author: "Vivian Chow",
    title:
      "Frozen strawberries sold at Costco, Trader Joe’s linked to Hepatitis A outbreak in Los Angeles County - KTLA Los Angeles",
    description:
      "Health officials are warning of an outbreak of hepatitis A infections linked to frozen strawberries sold in stores across Los Angeles County. The outbreak was recently identified by the Los Angeles County of Department of Public Health. Several brands of froz…",
    url: "https://ktla.com/news/local-news/frozen-strawberries-sold-at-costco-trader-joes-linked-to-hepatitis-a-outbreak-in-los-angeles-county/",
    urlToImage:
      "https://ktla.com/wp-content/uploads/sites/4/2022/05/GettyImages-464646860.jpg?w=1280",
    publishedAt: "2023-04-16T03:01:42Z",
    content:
      "Health officials are warning of an outbreak of hepatitis A infections linked to frozen strawberries sold in stores across Los Angeles County.\r\nThe outbreak was recently identified by the Los Angeles … [+2153 chars]",
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Typography variant="h5" my={2}>
          {data.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Box
              sx={{
                height: "12.125rem",
                width: "100%",
                backgroundImage: `url("${data.urlToImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
            <Box display="flex" flexWrap="wrap" gap={{ xs: 1, md: 2 }}>
              <Box>
                <Typography variant="body1" my={2}>
                  <strong>Published On:</strong>{" "}
                  {formatDateString(data.publishedAt, "DD MMM YYYY hh:mm A")}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" my={2}>
                  <strong>Source:</strong> {data.source.name}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" my={2}>
                  <strong>Author:</strong> {data.author}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ pb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </Box>
            <Box sx={{ justifyContent: "end", mt: 2 }}>
              <Button size="large" sx={{ p: 0 }}>
                <Link to="/">Back to List</Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NewsDetail;
