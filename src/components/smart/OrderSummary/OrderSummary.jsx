import { Fragment, useEffect, useState } from "react";
import "./OrderSummary.scss";

import { Card } from "../../presentational/Card/Card";
import { StatusBar } from "../../presentational/StatusBar/StatusBar";
import { useHistory } from "react-router-dom";
import { getOrdersByCustomerId } from "../../../services/getOrderDetails.service";
import { getDateOnly } from "../../../utility/utility";

const OrderSummary = () => {
  const [orderSummary, setOrderSummary] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await getOrdersByCustomerId();
        const order = res[0];
        formatOrder(order);
        setOrderSummary(order);
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, []);
  const formatOrder = (order) => {
    if (order.status !== "shipped") {
      order.items.forEach((item) => {
        order.shipments.some((shipment) => {
          if (shipment.items.includes(item.id)) {
            item.shipmentDate = shipment.shipDate;
            item.estimatedDeliveryDate = shipment.estimatedDeliveryDate;
            return true;
          } else {
            return false;
          }
        });
      });
    }
  };
  const history = useHistory();
  const getImage = (item) => {
    return (
      <img
        height={180}
        src={require(`../../../assets/images/${item.id}.jpeg`).default}
        alt="Phone"
      />
    );
  };
  const getBody = (item) => {
    return (
      <div className="summary">
        <StatusBar status={item.status} />
        <div className="details" onClick={(e) => history.push("/orderdetails")}>
          <small>
            {item.status === "ordered" &&
              `Expected to Ship: ${getDateOnly(
                item.estimatedShipDateRange.fromDate
              )} - ${getDateOnly(item.estimatedShipDateRange.toDate)}`}
            {item.status === "shipped" &&
              `Shipped on: ${getDateOnly(item.shipmentDate)}`}
            {item.status === "delivered" &&
              `Delivered on: ${getDateOnly(item.estimatedDeliveryDate)}`}
          </small>
          <h4>{item.name}</h4>
          <small>
            {item.skuAttributes.color} {item.skuAttributes.size}
          </small>
          <small>Qty: {item.quantity}</small>
          <small>{item.plan}</small>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {orderSummary ? (
        <div className="order-summary-container">
          {orderSummary.items.map((item, i) => (
            <Card key={i} image={getImage(item)} body={getBody(item)} />
          ))}
        </div>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </Fragment>
  );
};

export default OrderSummary;
