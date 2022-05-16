import React from "react";
import domtoimage from "@/utils/dom-to-image";
import { saveAs } from "file-saver";
import { css } from "emotion";
import Images from "@/constant";
import TextBtn from "@/components/btn";

const DomToImg = () => {
  const getImg = () => {
    const node = document.getElementById("node");
    const width = window.getComputedStyle(node).width.split("px")[0];
    const height = window.getComputedStyle(node).height.split("px")[0];

    domtoimage
      .toPng(node, { scale: 4, width: width * 4, height: height * 4 })
      .then((defaultUrl) => {
        const img = new Image();
        img.src = defaultUrl;
        document.getElementById("export-img").appendChild(img);

        getBlobPng();
      })
      .catch(() => {
        console.log("error");
      });
  };

  const getBlobPng = async () => {
    const exportImgNode = document.getElementById("export-img");
    const node = document.getElementById("node");

    const width = window.getComputedStyle(node).width.split("px")[0];
    const height = window.getComputedStyle(node).height.split("px")[0];

    await domtoimage
      .toBlob(exportImgNode, {
        sacle: 0.25,
        width: width * 4,
        height: height * 4,
      })
      .then((blob) => {
        saveAs(blob, "test.png");
      });

    const firstChild = exportImgNode.childNodes[0];
    exportImgNode.removeChild(firstChild);
  };

  return (
    <div className={styleContainer}>
      <div id="export-img" className="my-image"></div>
      <div id="node" className={styleNFTContainer}>
        <img className="img" src={Images.nft} />
        <div className="information">
          <span className="info">some informations</span>
          <span className="info">some informations</span>
        </div>
      </div>
      <div>
        <TextBtn className="button" onClick={getImg} text="Download" />
      </div>
    </div>
  );
};

export default DomToImg;

const styleContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  .my-image {
    z-index: -1;
    position: absolute;
  }
  .button {
    color: white;
    width: auto;
    margin-top: 10px;
  }
`;

const styleNFTContainer = css`
  position: relative;
  height: 100%;
  display: inline-block;
  width: 300px;
  height: 300px;
  img {
    position: relative;
    border-radius: 10px;
  }
  .information {
    position: absolute;
    padding: 16px;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .info {
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
`;
