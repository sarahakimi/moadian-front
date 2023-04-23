import http from "services/http";
import urls from "configs/requestEndpoints";

export const fetchData = async (sortModel) => {
  const response = await http
    .get(urls.getBackups, sortModel, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const getBackupNow = async (sortModel) => {
  const response = await http
    .get(urls.getBackupNow, sortModel, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export default function Home1() {
  return <div/>;
}
