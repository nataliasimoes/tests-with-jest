export function toQueryString(obj) {
  // transforma o objeto em um array de arrays, onde cada item é um array com a chave e o valor
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

export function toObject(qs) {
  return qs.split("&").reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = value;
    return acc;
  }, {});
}
