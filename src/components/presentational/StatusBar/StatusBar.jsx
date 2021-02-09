import "./StatusBar.scss";
import { ReactComponent as CheckMark } from "../../../assets/svg/checkmark.svg";
import { ReactComponent as ShippingTruck } from "../../../assets/svg/delivery.svg";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";

export const StatusBar = ({ status, showStatusText, orderDelayed }) => {
  let color = "";
  if (status === "ordered") {
    color = "orange";
  } else if (status === "shipped") {
    color = "blue";
  } else if (status === "delivered") {
    color = "green";
  }
  return (
    <div className="status-bar-container">
      <div className="status-bar">
        <div className="svg" style={{ borderColor: color }}>
          <CheckMark style={{ fill: color }} />
        </div>
        {showStatusText && <h6>Ordered</h6>}
      </div>
      <div className={`status-bar ${orderDelayed ? "relative" : ""}`}>
        <div
          className="svg"
          style={
            status === "shipped" || status === "delivered"
              ? { borderColor: color }
              : {}
          }
        >
          <ShippingTruck
            style={
              status === "shipped" || status === "delivered"
                ? { fill: color }
                : {}
            }
          />
          {orderDelayed && <div className="order-delay"> &#10006;</div>}
        </div>
        {showStatusText && <h6>Shipped</h6>}
      </div>
      <div className="status-bar">
        <div
          className="svg"
          style={status === "delivered" ? { borderColor: color } : {}}
        >
          <Home style={status === "delivered" ? { fill: color } : {}} />
        </div>
        {showStatusText && <h6>Delivered</h6>}
      </div>
    </div>
  );
};
