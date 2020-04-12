import { useContext } from "react"
import { SettingContext } from "pages/.app/Routers"

 const useSetting = () => useContext(SettingContext);
 export default useSetting;