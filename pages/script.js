document.addEventListener("DOMContentLoaded", function () {
  const contentElement = document.getElementById("content");
  const urlPath = window.location.pathname;
  let slug = urlPath.split("/").filter((part) => part.length > 0);

  // Check if the path is correct: expecting something like "/blog/i-turned-28-today/"
  if (slug[0] === "posts" && slug.length > 1) {
    let filename = slug[1].replace(/-/g, "_") + ".md"; // Convert slug to filename
    fetch(`./posts/${filename}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        contentElement.innerHTML = marked(text);
      })
      .catch((e) => {
        console.error("Error fetching the Markdown file: ", e);
        contentElement.innerHTML =
          "<p>Error loading content. Please try again later.</p>";
      });
  } else {
    contentElement.innerHTML =
      "<p>Welcome to my blog! Please click on a post to read.</p>";
  }
});
