const readPayload = async (response) => {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
};

let refreshPromise = null;

const tryRefreshToken = async () => {
  if (!refreshPromise) {
    refreshPromise = fetch("/api/v1/users/refresh-token", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.ok)
      .catch(() => false)
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
};

export const apiRequest = async (path, options = {}, config = {}) => {
  const { skipRefresh = false } = config;
  const requestOptions = {
    method: options.method || "GET",
    credentials: "include",
    headers: {
      ...(options.headers || {}),
    },
  };

  if (options.body !== undefined) {
    if (options.body instanceof FormData) {
      requestOptions.body = options.body;
    } else {
      requestOptions.body = JSON.stringify(options.body);
      requestOptions.headers["Content-Type"] =
        requestOptions.headers["Content-Type"] || "application/json";
    }
  }

  let response = await fetch(path, requestOptions);

  if (
    response.status === 401 &&
    !skipRefresh &&
    path !== "/api/v1/users/refresh-token"
  ) {
    const refreshed = await tryRefreshToken();

    if (refreshed) {
      response = await fetch(path, requestOptions);
    }
  }

  const payload = await readPayload(response);

  if (!response.ok) {
    const error = new Error(payload?.message || `Request failed (${response.status})`);
    error.status = response.status;
    error.payload = payload;
    throw error;
  }

  return payload;
};
