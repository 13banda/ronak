import React from "react";
import PropTypes from "prop-types";
import withSideEffect from "react-side-effect";

function DocumentTitle(props) {
  //return Children.only(props.children) || null;
  return <>{props.children}</> || null;
}

DocumentTitle.propTypees = {
  title: PropTypes.string.isRequired,
};

function reducePropsToState(propsList) {
  const innerMost = propsList[propsList.length - 1];
  if (innerMost) {
    return innerMost.title;
  }
}
function handleStateChange(title) {
  document.title = title || "";
}

export default withSideEffect(
  reducePropsToState,
  handleStateChange
)(DocumentTitle);
