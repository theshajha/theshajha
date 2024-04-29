document.addEventListener("DOMContentLoaded", function () {
  const contentElement = document.getElementById("content");

  // Getting the full URL and then parsing out just the part after the last slash if it exists
  let fullUrl = window.location.href;
  let matches = fullUrl.match(/\/blog\/([^\/?#]+)\/?$/);

  if (matches && matches[1]) {
    let postSlug = matches[1]; // This is the slug, e.g., "i-turned-28-today"

    // Replace '-' with '_' to match the file naming convention
    let markdownFileName = postSlug.replace(/-/g, "_") + ".md";
    let markdownFilePath = `./posts/${markdownFileName}`;

    fetch(markdownFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        contentElement.innerHTML = marked(text);
      })
      .catch((e) => {
        console.error("Error fetching the Markdown file: ", e);
        contentElement.innerHTML = `<p>Error loading the blog post. Please check the URL or try again later.</p>`;
      });
  } else {
    contentElement.innerHTML = `<p>Welcome to my blog! Please click on a post to read.</p>`;
  }
});
