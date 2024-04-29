document.addEventListener("DOMContentLoaded", function () {
  const contentElement = document.getElementById("content");
  let path = window.location.pathname.split("/").pop();

  if (path) {
    path = path.replace(/-/g, "_") + ".md"; // Converts the slug to the filename format and appends .md
    fetch(`./posts/${path}`)
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
