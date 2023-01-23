import http from "../../services/http";
import urls from "../../configs/requestEndpoints";

export const fetchData = async (sortModel) => {
  const response = await http
    .get(urls.getCompaniesFromSuperAdminPageEndpoint, sortModel, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const deleteCompany = async (id) => {
  const response = await http
    .delete(urls.singleCompany(id), {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};

export const registerCompany = async (data) => {
  const response = await http
    .post('company/register', data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;

}

export const editCompany = async (id, data) => {
  const response = await http
    .put(urls.singleCompany(id), data, {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
    })

  return response;
};
