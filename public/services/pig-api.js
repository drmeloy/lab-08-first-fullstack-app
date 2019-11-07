const URL = '/api';

export async function getPigs() {
    const url = `${URL}/pigs`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}