const API_URL = 'sua_api_url_aqui';

export const getRoles = async () => {
    const response = await fetch(`${API_URL}/roles`);
    return response.json();
};

export const getRoleById = async (id: string) => {
    const response = await fetch(`${API_URL}/roles/${id}`);
    return response.json();
};

export const createRole = async (role: any) => {
    const response = await fetch(`${API_URL}/roles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(role),
    });
    return response.json();
};

export const updateRole = async (id: string, role: any) => {
    const response = await fetch(`${API_URL}/roles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(role),
    });
    return response.json();
};

export const deleteRole = async (id: string) => {
    await fetch(`${API_URL}/roles/${id}`, {
        method: 'DELETE',
    });
};