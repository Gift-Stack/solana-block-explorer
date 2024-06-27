export const api = async <T>(url: string, init?: RequestInit): Promise<T> => {
  return fetch(url, init)
    .then(async (response) => {
      if (!response.ok) {
        throw new ApiError(response.status, response.statusText);
      }

      return response.json() as Promise<T>;
    })
    .catch(() => {
      throw new ApiError(500, "Something went wrong");
    });
};

// Api Error handler
export class ApiError extends Error {
  public code: number;
  public message: string;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
