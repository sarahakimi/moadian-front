import http from "services/http";
import urls from "configs/requestEndpoints";

export const fetchData = async (sortModel) => {
  const response = await http
    .get(urls.customer_percent, sortModel, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const deleteUser = async (id) => {
  const response = await http
    .delete(urls.singleFinancialOrder(id), {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const registerUser = async (data) => {
  const response = await http
    .post(urls.createFinancialPrice, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const editUser = async (id, data) => {
  const response = await http
    .put(urls.singleFinancialOrder(id), data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export default function Home1() {
  return <div/>;
}
