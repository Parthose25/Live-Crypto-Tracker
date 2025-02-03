import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { LinearProgress } from "@mui/material";
const News = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=9e455e4141f341eaa3293a240a5c6dd5"
    );
    setNews(data.articles);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!news) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <>
      <Container>
        <Typography variant="h2" style={{ marginTop: "20px" }}>
          Latest News About Crypto
        </Typography>
        <div className="news-info">
          {news.map((news, i) => {
            return (
              <Card sx={{ maxWidth: 300 }} key={i} className="news-card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={news.urlToImage}
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {news.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      BY:
                      {news.author}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                      Description: {news.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {`${news.content.substring(0, 100)}`}.
                      <br />
                      Published at : {news.publishedAt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default News;
