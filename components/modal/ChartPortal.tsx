import { createPortal } from 'react-dom';

interface PortalType {
    children:any;
}

function ChartPortal({ children }: PortalType) {
  return createPortal(children, document.getElementById("portal") as HTMLElement);
}
export default ChartPortal;