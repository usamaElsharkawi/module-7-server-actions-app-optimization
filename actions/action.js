'use server';
async function addMovie(formData) {
  const movie = formData.get("name");
  console.log(movie);
}

export {
  addMovie
};