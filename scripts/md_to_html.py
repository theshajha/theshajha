import os
from markdown import markdown
from bs4 import BeautifulSoup

# Paths relative to the script location
script_dir = os.path.dirname(__file__)
markdown_dir = os.path.join(script_dir, '../pages/posts/markdown/')
html_dir = os.path.join(script_dir, '../pages/posts/')

# Ensure output directory exists
if not os.path.exists(html_dir):
    os.makedirs(html_dir)

# Convert each Markdown file to HTML
for md_filename in os.listdir(markdown_dir):
    if md_filename.endswith('.md'):
        # Read the Markdown file
        with open(os.path.join(markdown_dir, md_filename), 'r', encoding='utf-8') as md_file:
            md_content = md_file.read()

        # Convert to HTML
        html_content = markdown(md_content)

        # Optional: Prettify the HTML
        soup = BeautifulSoup(html_content, 'html.parser')
        pretty_html = soup.prettify()

        # Define the HTML file name
        base = os.path.splitext(md_filename)[0]
        html_filename = base + '.html'

        # Write the HTML content to a file
        with open(os.path.join(html_dir, html_filename), 'w', encoding='utf-8') as html_file:
            html_file.write(pretty_html)

        print(f'Converted {md_filename} to {html_filename}')
