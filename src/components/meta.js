import Images from "@/constant";
import { getImgLink } from "@/utils/tools";
import { Box, makeStyles } from "@material-ui/core";
import React, { useMemo, useState } from "react";

const Meta = (props) => {
  const {
    hideTrigger = false, // Hide the picture-video toggle button
    auto = false, //  Switch directly to video
    autoPlay = false, //  Does the video play automatically
  } = props;
  const classes = useStyle();

  const { animationUrl, avatorUrl, fileType } = props.data;
  const [show, setShow] = useState(auto);

  const ImgWrapper = useMemo(
    () => (
      <img
        className={classes.imgStyle}
        src={getImgLink(avatorUrl)}
        alt=""
        draggable="false"
      />
    ),
    [avatorUrl]
  );

  const triggerVideo = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    e.nativeEvent?.stopImmediatePropagation();
    animationUrl && setShow(!show);
  };

  if (!animationUrl || !fileType || fileType?.includes("image")) {
    return ImgWrapper;
  }

  if (
    !!animationUrl ||
    fileType?.includes("video") ||
    fileType?.includes("audio")
  ) {
    return (
      <Box className={classes.videoBoxStyle}>
        {show ? (
          <video
            className={classes.videoStyle}
            poster={getImgLink(avatorUrl)}
            src={getImgLink(animationUrl)}
            autoPlay={autoPlay}
            controls
          />
        ) : (
          ImgWrapper
        )}
        {!!animationUrl && !hideTrigger && !show && (
          <Box
            title="Play"
            className={classes.playBtn}
            onClick={triggerVideo}
          />
        )}
        {!hideTrigger && show && (
          <Box
            title="Back"
            className={classes.backBtn}
            onClick={triggerVideo}
          />
        )}
      </Box>
    );
  }

  return <div>No Assets</div>;
};
export default Meta;
const useStyle = makeStyles((theme) => ({
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
  videoStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "#f7f7f7",
  },
  videoBoxStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  playBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "100%",
    cursor: "pointer",
    transition: " all .3s ease",
    backgroundColor: "rgba(0,57,141,0.6)",
    backgroundImage: `url(${Images.play})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: 48,
    "&:hover": {
      backgroundColor: "rgba(0,57,141,0.8)",
      transform: "translate(-50%,-50%) scale(1.2)",
    },
  },
  backBtn: {
    position: "absolute",
    top: 24,
    left: 24,
    borderRadius: "100%",
    cursor: "pointer",
    transition: " all .3s ease",
    backgroundColor: "rgba(0,57,141,0.6)",
    backgroundImage: `url(${Images.back})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: 24,
    opacity: 0.8,
    "&:hover": {
      backgroundColor: "rgba(0,57,141,0.8)",
      transform: "scale(1.2)",
      opacity: 1,
    },
  },
}));
