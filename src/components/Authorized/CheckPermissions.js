import React from "react";
import { CURRENT } from "./renderAuthorize";
import PromiseRender from "./PromiseRender";

/** credit to ant pro 
 * Comon check permission method
 * @param { Permission judgment } authority
 * @param { Your permission description} currentAuthority
 * @param { passing components } target
 * @param { no pass components } Exception
 */
const checkPermission = (authority, currentAuthority, target, Exception) => {
  // Retirement authority, return target;
  if (!authority) {
    return target;
  }
//   Array
  if (Array.isArray(authority)) {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some((item) => authority.includes(item))) {
        return target;
      }
    } else if (authority.includes(currentAuthority)) {
      return target;
    }
    return Exception;
  } 
  //  string
  if (typeof authority === 'string') {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some((item) => authority === item)) {
        return target;
      }
    } else if (authority === currentAuthority) {
      return target;
    }
    return Exception;
  } 
  // Promise
  if(authority instanceof Promise) {
      return <PromiseRender ok={target} error={Exception} promise={authority} />
  }
    // Function
    if(typeof authority === 'function') {
        try {
            const bool = authority(currentAuthority);
            if(bool instanceof Promise) {
                return <PromiseRender ok={target} error={Exception} promise={bool} />
            }
            if(bool) {
                return target;
            }
            return Exception;
        } catch (error) {
            throw error
        }
    }
    throw new Error("unsupported parameters");
};

export { checkPermission };

function check(authority,target, Exception) {
    return checkPermission(authority,CURRENT, target, Exception);
}
export default check;