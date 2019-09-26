import React from "react";
import PropTypes from "prop-types";
import { LinkListTemplate } from "../../templates/link-list";

const LinkListPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return <LinkListTemplate title={data.title} links={data.links} />;
  } else {
    return <div>Loading...</div>;
  }
};

LinkListPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default LinkListPreview;
