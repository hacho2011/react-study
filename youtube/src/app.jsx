import { useState, useEffect, useCallback } from "react";
import "./app.css";
import Header from "./components/header/header";
import VideoList from "./components/videoList/videoList";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAu6t3dvajgcHNUPzGN5RpbpjU5LyBrLfo",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const handleSearch = useCallback((query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyAu6t3dvajgcHNUPzGN5RpbpjU5LyBrLfo`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  });

  return (
    <>
      <Header onSearch={handleSearch} />
      <VideoList videos={videos} />;
    </>
  );
}

export default App;
