const fetchSearchData = (
  search = "",
  page = 1,
  brands = [],
  categories = [],
  colors = [],
  features = [],
  tags = [],
  years = []
) => {
  const baseSearchUrl = "https://lolibrary.org/api/search";
  const data = fetch(`${baseSearchUrl}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      brands: brands,
      categories: categories,
      colors: colors,
      features: features,
      page: page,
      tags: tags,
      years: years,
      search: search,
    }),
  }).then((res) => {
    return res.json();
  });
  return data;
};

export default fetchSearchData;
