const urlApi = 'http://localhost:3000';

async function Api(url: string, method: string, token: string, body?: Object) {
  const options: any = {
    method,
    headers: new Headers({
      Authorization: token,
      'Content-type': 'application/json; charset=utf-8',
    }),
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(urlApi + url, options);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return responseData;
}

export default Api;
