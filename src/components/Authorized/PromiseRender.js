import React, { Component } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import isEqual from "lodash/isEqual";
import { isComponentClass } from "./Secured";

export default class PromiseRender extends Component {
  state = {
    component: () => null,
  };

  componentDidMount() {
    this.setRenderComponent(this.props);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { component } = this.state;

    if (!isEqual(nextProps, this.props)) {
      this.setRenderComponent(nextProps);
    }
    if (nextState.component !== component) return true;
    return false;
  };

  // set render component: ok or error
  setRenderComponent(props) {
    const ok = this.checkIsInstantiation(props.ok);
    const error = this.checkIsInstantiation(props.error);
    props.promise
      .then(() => {
        this.setState({
          component: ok,
        });
        return true;
      })
      .catch(() => {
        this.setState({
          component: error,
        });
      });
  }
  // eslint-disable-next-line
  // Determine whether the incoming component has been instantiated
  // AuthorizedRoute is already instantiated
  // Authorized  render is already instantiated, children is no instantiated
  // Secured is not instantiated

  checkIsInstantiation = (target) => {
    if (isComponentClass(target)) {
      const Target = target;
      return (props) => <Target {...props} />;
    }

    if (React.isValidElement(target)) {
      return (props) => React.cloneElement(target, props);
    }

    return () => target;
  };

  render() {
    const { component: Component } = this.state;
    const { ok, error, promise, ...rest } = this.props;
    return Component ? (
      <Component {...rest} />
    ) : (
  
         <SyncLoader
            css={{
                width: "100%",
                height: "100%",
                paddingTop: 50,
                textAlign: "center",
              display: "inline-flex",
              margin: "0 auto",
              borderColor: "red",
            }}
            color={"#123abc"}
            loading={true}
          />
    );
  }
}
