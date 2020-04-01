import { useContext } from "react"
import { SettingContext } from "pages/.App/Routers"

export default function useSetting(){
    const setting = useContext(SettingContext)
    return setting;
}