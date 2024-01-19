
import ReactDOM from "react-dom";
const Modal = ({ modal, close, children }) => {
    if(modal) {
        return ReactDOM.createPortal(
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
         
            <div className="">{children}</div>
          </div>,
          document.querySelector("#modal")
        );
    }
};

export default Modal;
