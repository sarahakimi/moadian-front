import http from "../../services/http";
import urls from "../../configs/requestEndpoints";

export const getPerKiometer = async () => {
  const response = await http
    .get(urls.pricingPerKilometer, "", {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const getPerCar = async () => {
  const response = await http
    .get(urls.getPricingSizeOfCar, "", {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const getOtherOptions = async () => {
  const response = await http
    .get(urls.pricingOtherOptions, "", {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const editPerKiometer = async (data) => {
  const response = await http
    .put(urls.pricingPerKilometer, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const editPerCar = async (size, data) => {
  const response = await http
    .put(urls.pricinPerSizeOfCar(size), data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const editOtherOptions = async (data) => {
  const response = await http
    .put(urls.pricingOtherOptions, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export default function Home1() {
  return <div/>;
}
