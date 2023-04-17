import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { useCountry } from "context/CountryContext";

const NewsDetail = () => {
  const { country } = useCountry();

  return (
    <>
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Typography variant="h4" my={2}>
          Top News from {country === "gb" ? "Great Britain" : "United State"}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                height: "100%",
              }}
            >
              <CardHeader
                title="Das war die bisher gewaltigste Rakete aller Zeiten"
                titleTypographyProps={{ variant: "h6" }}
              />
              <Box
                sx={{
                  height: "12.125rem",
                  backgroundImage:
                    'url("https://img.welt.de/img/geschichte/mobile244760620/5911359057-ci16x9-w1200/Alabama-Huntsville-US-Space-Rocket-Center.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  "Elon Musks Starship soll den Rekord der Saturn V knacken.
                  Fast 56 Jahre lang war Wernher von Brauns Mondrakete das
                  größte und lauteste fliegende Objekt, das Menschen geschaffen
                  hatten. Ihr Schöpfer träumte von noch Größerem."
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ justifyContent: "end", pt: 0 }}>
                <Button size="large">
                  <Link to="/">Back to List</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NewsDetail;
