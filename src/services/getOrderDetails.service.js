import { ordersByCustomerId, orderByOrderId } from "./mockData";
export const getOrdersByCustomerId = async (customerId) => {
  //Use Fetch or Axios
  //let url = `customer/${customerId}/order?limit=1`;
  //Mocking Data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ordersByCustomerId.multipleItemsShipped);
    }, 500);
  });
};

export const getOrderByOrderId = (orderId) => {
  //Use Fetch or Axios
  //let url = `order/${orderId}`;
  //Mocking Data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orderByOrderId.orderDelayedShipping);
    }, 500);
  });
};
