import { request } from "./generic.services";

const getPaymentIntent = (data) => {
 return request({ url: `payment`, method: "post", data });
};

export { getPaymentIntent };
