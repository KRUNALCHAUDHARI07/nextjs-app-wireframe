const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

export async function fetchData(endpoint: string, options: RequestInit = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export async function postData(endpoint: string, data: any, options: RequestInit = {}) {
    return fetchData(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options,
    });
}

export async function putData(endpoint: string, data: any, options: RequestInit = {}) {
    return fetchData(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data),
        ...options,
    });
}

export async function deleteData(endpoint: string, options: RequestInit = {}) {
    return fetchData(endpoint, {
        method: 'DELETE',
        ...options,
    });
}
