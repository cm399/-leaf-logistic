import {
  Card,
  CardHeader,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Article } from "types/Article";

const ArticalCard = ({ article }: { article: Article }) => {
  return (
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
          backgroundImage: `url(${
            article.urlToImage
              ? "'" + encodeURI(article.urlToImage) + "'"
              : "/no-news.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      {article.description && (
        <CardContent sx={{ pb: 0 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            className="ellipse-3-line"
            sx={{ height: "60px" }}
          >
            {article.description}
          </Typography>
        </CardContent>
      )}
      <CardActions
        disableSpacing
        sx={{ justifyContent: "end", py: 0, mtt: "auto" }}
      >
        <Button size="large" sx={{ m: 1 }}>
          <Link to="/newsDetail">Read More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticalCard;
