const BASE_URL = 'http://localhost:7000/api/';

export const getUsers = async (page) => {
    const url = `${BASE_URL}users` + '?' + new URLSearchParams({
        page,
        limit: 16
    });

    const response = await fetch(url,
        {
            method: 'GET',
        }
    )

    return response.json();
}

export const getUser = async (id) => {
    const response = await fetch(`${BASE_URL}users/${id}`);

    return response.json();
}
