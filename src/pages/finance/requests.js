import http from "services/http";
import urls from "configs/requestEndpoints";

export const fetchData = async () => {
  const response = await http
    .get(urls.connection_to_finance, {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const editData = async (data) => {
  const response = await http
    .put(urls.connection_to_finance, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};



export default function Home1() {
  return <div/>;
}
