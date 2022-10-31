import http from "./httpServices";

export const submitOrder = (orderData) => {
  return http.post("/trader/orders", orderData);
};
