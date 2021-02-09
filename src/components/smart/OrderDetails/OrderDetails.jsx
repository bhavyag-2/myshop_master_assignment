import "./OrderDetails.scss";
import { Card } from "../../presentational/Card/Card";
import { StatusBar } from "../../presentational/StatusBar/StatusBar";
import { Fragment, useEffect, useState } from "react";
import { getOrderByOrderId } from "../../../services/getOrderDetails.service";
import { ReactComponent as Warning } from "../../../assets/svg/warning.svg";
import { getDateOnly } from "../../../utility/utility";

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await getOrderByOrderId();
        const order = res;
        console.log(order);
        formatOrder(order);
        setOrderDetails(order);
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, []);

  const formatOrder = (order) => {
    if (order.status === "ordered") {
      if (order.items[0].newEstimatedShipDateRange.fromDate) {
        order.isDelayed = true;
        order.userAcceptedDelay = order.items[0].userAcceptedDelay;
      }
    } else if (order.status === "shipped") {
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
  const getImage = (item) => {
    return (
      <img
        height={100}
        src={require(`../../../assets/images/${item.id}.jpeg`).default}
        alt="Phone"
      />
    );
  };
  const getBody = (item) => {
    return (
      <div className="details">
        <h3>{item.name}</h3>
        <small>Quantity: {item.quantity}</small>
        <small>{item.telephoneNumber}</small>
        <small>
          {item.skuAttributes.color} {item.skuAttributes.size}
        </small>
      </div>
    );
  };
  return (
    <div className="order-details-container">
      {orderDetails ? (
        <Fragment>
          <div className="order-details">
            {orderDetails.status === "ordered" && !orderDetails.isDelayed && (
              <>
                <strong>Order is not shipped yet.</strong>
                <p>Order will be shipped soon.</p>
              </>
            )}
            {orderDetails.status === "ordered" && orderDetails.isDelayed && (
              <>
                <strong>Heads up : The Shipping date is changed.</strong>
                <p>
                  Before we can complete your order, review the new date to
                  confirm if you're OK with it
                </p>
              </>
            )}
            {orderDetails.status === "shipped" && (
              <>
                <strong>Get Excited.</strong>
                <p>Fun Stuff is headed your way</p>
              </>
            )}
            {orderDetails.status === "delivered" && (
              <>
                <strong>Order Delivered</strong>
                <p>Fun Stuff is delivered to you.</p>
              </>
            )}
            <StatusBar
              showStatusText
              status={orderDetails.status}
              orderDelayed={orderDetails.isDelayed}
            />
            <h4>
              Items {orderDetails.status} :{" "}
              {orderDetails.items.reduce((curr, acc) => curr + acc.quantity, 0)}
            </h4>
            {orderDetails.status === "ordered" &&
              orderDetails.isDelayed &&
              !orderDetails.userAcceptedDelay && (
                <p>
                  <Warning style={{ height: "14px", marginRight: "4px" }} />
                  Don't forget to let us know if you accept the new ship date.
                  We'll cancel your order if we don't hear from you soon.
                </p>
              )}
            {orderDetails.status === "ordered" && orderDetails.isDelayed && (
              <>
                <h4>New estimated ship date :</h4>
                <p>
                  {getDateOnly(
                    orderDetails.items[0].newEstimatedShipDateRange.fromDate
                  )}
                  -
                  {getDateOnly(
                    orderDetails.items[0].newEstimatedShipDateRange.toDate
                  )}
                </p>
                <p>Original estimated ship date :</p>
                <p>
                  {getDateOnly(
                    orderDetails.items[0].estimatedShipDateRange.fromDate
                  )}
                  -
                  {getDateOnly(
                    orderDetails.items[0].estimatedShipDateRange.toDate
                  )}
                </p>
              </>
            )}
            {orderDetails.status === "shipped" && (
              <>
                <strong>{orderDetails.shipments[0].carrier} tracking:</strong>
                <p>{orderDetails.shipments[0].trackingNumber}</p>
                <strong>Estimated delivery date :</strong>
                <p>
                  {getDateOnly(orderDetails.shipments[0].estimatedDeliveryDate)}
                </p>
              </>
            )}
            <strong>Address: </strong>
            <div className="address-container">
              {orderDetails.shipingAddress.street}
              {", "}
              {orderDetails.shipingAddress.city}
              {", "}
              {orderDetails.shipingAddress.state}{" "}
              {orderDetails.shipingAddress.zip}
            </div>
            {orderDetails.status === "ordered" &&
              orderDetails.isDelayed &&
              !orderDetails.userAcceptedDelay && (
                <div className="btn-container">
                  <button className="btn btn-primary">
                    Accept New Ship Date
                  </button>
                  <button className="btn">Cancel Your Order</button>
                </div>
              )}
          </div>
          <div className="item-list">
            {orderDetails.items.map((item, i) => (
              <Card key={i} image={getImage(item)} body={getBody(item)} />
            ))}
          </div>
        </Fragment>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </div>
  );
};

export default OrderDetails;
