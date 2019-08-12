import React from "react";
import './panelImage.scss';

interface Props {
  url: string;
  alt: string;
}

const PanelImage = ({ url, alt }: Props) => (
  <img src={url} alt={alt} className="panel-image" />
);

export default PanelImage;
