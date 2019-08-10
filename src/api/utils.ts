/**
 * Invoke an json GET request to the specified URL.
 */
export async function invokeGetRequest(
  url: string,
  params = {}
): Promise<unknown> {
  const urlWithParam = getUrlWithParam(url, params);
  const responseData = await fetch(urlWithParam, {
    cache: "no-cache",
    credentials: "include"
  });

  return responseData.json();
}

function getUrlWithParam(url: string, params = {}): string {
  const urlObj = new URL(url);
  Object.keys(params).forEach(key =>
    urlObj.searchParams.append(key, params[key])
  );
  return urlObj.toString();
}

/**
 * Invoke an json POST request to the specified URL.
 *
 * @param  url
 * @param  requestParams - request body
 */
export async function invokePostRequest(
  url: string,
  requestParams = {}
): Promise<unknown> {
  const headers = {
    "Content-Type": "application/json"
  };
  const responseData = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "include",
    redirect: "manual",
    body: JSON.stringify(requestParams),
    headers
  });
  return responseData.json();
}
