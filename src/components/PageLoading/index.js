import React from "react";
import "./index.less";
import SyncLoader from "react-spinners/SyncLoader";
 
/* const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
 */
export default function (props) {
  return (
    <div className="container">
      <div className="loading-indegator">
        <SyncLoader
            css={{
              display: "inline-flex",
              margin: "0 auto",
              borderColor: "red",
            }}
            color={"#123abc"}
            loading={true}
          />
      </div>
    </div>
  );
}
