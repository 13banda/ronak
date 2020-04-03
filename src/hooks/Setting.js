import { useContext } from "react"
import { SettingContext } from "pages/.App/Routers"

 const useSetting = () => useContext(SettingContext);
 export default useSetting;