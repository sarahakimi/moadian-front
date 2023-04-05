import http from "services/http";
import urls from "configs/requestEndpoints"

export const fetchMe = async () => {
  const response = await http
    .get(urls.meEndpoint, {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const getHubs = async () => {
  const response = await http
    .get(urls.getHubsFromAdmin, {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};


export const sendSms = async () => {
  const response = await http
    .post(urls.validatePhoneByToken, {}, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const changePassword = async (data) => {
  const response = await http
    .post(urls.resetPassword, data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export default function Home1() {
  return <div/>;
}
