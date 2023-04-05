import http from "services/http";
import urls from "configs/requestEndpoints";

export const createOrder = async (data) => {
  const response = await http
    .post(urls.createOrder, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const calculatePrice = async (data) => {
  const response = await http
    .post(urls.calculatePrice, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const fetchData = async (sortModel) => {
  const response = await http
    .get(urls.getCustomers, sortModel, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export default function Home1() {
  return <div/>;
}
