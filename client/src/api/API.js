const BASE_URL = 'http://localhost:7000/api/';

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}users`,
    {
      method: 'GET',
      params: {
        page: 1,
        limit: 16
      }
    }
  )

  return response.json();
}

export const getUser = async (id) => {
  const response = await fetch(`${BASE_URL}users/${id}`);

  return response.json();
}

getUser(1).then(res => console.log(res));
