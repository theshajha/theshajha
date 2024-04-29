document.addEventListener("DOMContentLoaded", function () {
  const contentElement = document.getElementById("content");
  // Use 'location.href' to handle full URL paths and potential redirects
  let path = window.location.href;

  // Extracts the slug from the URL assuming the URL pattern is:
  // "https://theshajha.com/blog/i-turned-28-today/" or
  // "https://theshajha.github.io/theshajha/blog/i-turned-28-today/"
  let slug = path.match(/blog\/([^\/]+)\/?$/);

  if (slug && slug[1]) {
    // Replace dashes with underscores and append '.md' to form the filename
    let filename = slug[1].replace(/-/g, "_") + ".md";
    // Construct the path to the Markdown file within the 'posts' directory
    fetch(`./posts/${filename}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        // Use the 'marked' library to convert Markdown to HTML
        contentElement.innerHTML = marked(text);
      })
      .catch((e) => {
        console.error("Error fetching the Markdown file: ", e);
        contentElement.innerHTML = `<p>Error loading the blog post. Please try again later.</p>`;
      });
  } else {
    // Default message when no specific blog post slug is found in the URL
    contentElement.innerHTML = `<p>Welcome to my blog! Please click on a post to read.</p>`;
  }
});
