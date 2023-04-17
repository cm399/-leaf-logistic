import { Button, Container, Grid, Typography, Box } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Article } from "types/Article";
import { formatDateString } from "utils/commonUils";

const NewsDetail = () => {
  const location = useLocation();
  const history = useHistory();

  const data = location ? (location.state as null | Article) : null;

  // if (!data) {
  //   history.push("/");
  //   return;
  // }

  return (
    <>
      {data && (
        <Container maxWidth="xl" sx={{ pb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={3}></Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Typography variant="h5" my={2}>
                {data.title}
              </Typography>

              <Box
                component="img"
                src={encodeURI(data.urlToImage)}
                sx={{ height: "auto", width: "100%" }}
              ></Box>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={{ xs: 1, md: 1 }}
                sx={{ mb: 2 }}
              >
                <Box>
                  <Typography variant="body2">
                    <strong>Published On:</strong>{" "}
                    {formatDateString(data.publishedAt, "DD MMM YYYY hh:mm A")}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">
                    <strong>Source:</strong> {data.source.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">
                    <strong>Author:</strong> {data.author}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ pb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  {data.content ? data.content : data.description}
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
      )}
    </>
  );
};

export default NewsDetail;
