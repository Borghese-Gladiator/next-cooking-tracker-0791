const patchRecipes = (recipes) => {
  // Fetch constant from file (technically could use a require and load it, but it's cleaner as a RESET call)
  const res = await fetch(`${baseURL}/api/recipes`);
  const json = await res.json();
  return { recipes: json?.recipes ?? [] };
}