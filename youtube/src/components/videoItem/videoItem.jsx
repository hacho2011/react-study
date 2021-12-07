import React from "react";
import styles from "./videoItem.module.css";
const VideoItem = (props) => {
  const { thumbnails, title, publishedAt, channelTitle } = props.video.snippet;
  return (
    <div className={styles.listItem}>
      <div className={styles.thumbnail}>
        <img src={thumbnails.high.url} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.channel}>{channelTitle}</span>
        <span className={styles.publishedAt}>{publishedAt}</span>
      </div>
    </div>
  );
};

export default VideoItem;
