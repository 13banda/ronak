import RenderAuthorize from 'components/Authorized/Authorized';
import { getAuthority } from './authority';

let Authorized = RenderAuthorize(getAuthority());

// Reload the right components
const reloadAuthorized = () => {
 Authorized = RenderAuthorize(getAuthority());
}
export { reloadAuthorized };
export default Authorized;