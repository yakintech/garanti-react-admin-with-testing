const getFullUrl = (endpoint: string): string => {
    const baseUrl = process.env.REACT_APP_API_URL;
    if (!baseUrl) {
        throw new Error('Base URL is not defined in the environment variables');
    }
    return `${baseUrl}${endpoint}`;
};

export const baseApi = {
    getAll: async <T>(url: string): Promise<T> => {
        try {
            const response = await fetch(getFullUrl(url));
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const data = await response.json();
            return data as T;
        } catch (error) {
            console.error(`Error fetching data base api: ${url}`, error);
            throw error;
        }
    },
    get: async <T>(url: string, id: number): Promise<T> => {
        try {
            const response = await fetch(getFullUrl(`${url}/${id}`));
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const data = await response.json();
            return data as T;
        } catch (error) {
            console.error(`GET BY ID Error fetching data base api: ${url}`, error);
            throw error;
        }
    },
    post: async <T>(url: string, data: any): Promise<T> => {
        try {
            const response = await fetch(getFullUrl(url), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const responseData = await response.json();
            return responseData as T;
        } catch (error) {
            console.error(`POST Error fetching data base api: ${url}`, error);
            throw error;
        }
    },
    put: async <T>(url: string, data: any): Promise<T> => {
        try {
            const response = await fetch(getFullUrl(url), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const responseData = await response.json();
            return responseData as T;
        } catch (error) {
            console.error(`PUT Error fetching data base api: ${url}`, error);
            throw error;
        }
    },
    delete: async <T>(url: string, id: number): Promise<T> => {
        try {
            const response = await fetch(getFullUrl(`${url}/${id}`), {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const responseData = await response.json();
            return responseData as T;
        } catch (error) {
            console.error(`Delete Error fetching data base api: ${url}`, error);
            throw error;
        }
    }
};