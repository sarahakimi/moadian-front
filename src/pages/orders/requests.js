import http from '../../services/http'
import urls from '../../configs/requestEndpoints'

export const fetchData = async sortModel => {
  const response = await http.get('invoice/id/', sortModel, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const deleteUser = async id => {
  const response = await http.delete(urls.singleOrder(id), {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const registerUser = async data => {
  const response = await http.post(urls.createOrder, data, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  })

  return response
}

export const downloadOrder = async id => {
  const response = await http.get(
    urls.downloadPdf(id),
    {},
    {
      Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`,

      // responseType: 'blob',
      content_type: 'application/pdf'
    },
    { responseType: 'arraybuffer' }
  )

  return response
}

export default function Home1() {
  return <div />
}
