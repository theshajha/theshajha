document.addEventListener("DOMContentLoaded", function () {
  const contentElement = document.getElementById("content");
  const markdownContent = `# Your Markdown Here
Replace this with your actual markdown content from your README.md file.`;

  contentElement.innerHTML = marked(markdownContent);
});
