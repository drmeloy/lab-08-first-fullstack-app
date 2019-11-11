const URL = '/api';

export const getPigs = async() => {
    const url = `${URL}/pigs`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getPig(id) {  
    const url = `${URL}/pigs/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getDegrees = async() => {
    const url = `${URL}/degrees`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const addPig = async(pig) => {
    const url = `${URL}/pigs`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pig)
    });

    const data = await response.json();
    return data;
};