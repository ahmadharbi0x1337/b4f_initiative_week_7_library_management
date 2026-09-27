const baseUrl = "http://localhost:3000";

const request = async (endpoint, options = {}) => {
  const config = {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  };

  if (config.body && typeof config.body !== "string") {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, config);
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (err) {
    console.error("API Request Failed:", err);
    throw err; // Rethrow so components can handle loading/error states
  }
};

// Factory pattern for CRUD operations
const createCrudService = (endpoint) => ({
  getAll: () => request(endpoint),
  getById: (id) => request(`${endpoint}/${id}`),
  create: (data) => request(endpoint, { method: "POST", body: data }),
  update: (id, data) =>
    request(`${endpoint}/${id}`, { method: "PATCH", body: data }),
  delete: (id) => request(`${endpoint}/${id}`, { method: "DELETE" }),
});

export const booksApi = createCrudService("/books");
export const authorsApi = createCrudService("/authors");
export const borrowersApi = createCrudService("/borrowers");
