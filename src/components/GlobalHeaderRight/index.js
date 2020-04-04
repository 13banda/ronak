import "./index.less";
import React from "react";
import { useAuth0 } from "auth0";
import AvatarDropDown from "./AvatarDropDown";
import ClipLoader from "react-spinners/ClipLoader";

/* 
email: "wwaheguru9509088985@gmail.com"
​
email_verified: true
​
family_name: "Singh"
​
given_name: "Sandeep"
​
locale: "en"
​
name: "Sandeep Singh"
​
nickname: "wwaheguru9509088985"
​
picture: "https://lh6.googleusercontent.com/-wg2B9FV1O7Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJOJ6E1cNBYhonCTVcFD6w4iB6RFnA/photo.jpg"
​
sub: "google-oauth2|115137941033023121461"
​
updated_at: "2020-04-04T10:56:02.073Z"
*/
function GlobalHeaderRight(props) {
  const { loading, user } = useAuth0();
  console.log(user)
  let content = <AvatarDropDown user={user} />;

  if (loading || !user) {
    content = (
      <ClipLoader
        size={25}
        color={"#123abc"}
        loading={true}
      />
    );
  }
  return <div className="ant-global-header-right-content">{content}</div>;
}

export default GlobalHeaderRight;
