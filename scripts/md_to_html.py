import os
import markdown

# Paths relative to the script location
script_dir = os.path.dirname(os.path.realpath(__file__))
markdown_dir = os.path.join(script_dir, '../pages/posts/markdown/')
html_dir = os.path.join(script_dir, '../pages/posts/')

# Ensure the HTML directory exists
os.makedirs(html_dir, exist_ok=True)

# Convert each Markdown file to HTML
for md_filename in os.listdir(markdown_dir):
    if md_filename.endswith('.md'):
        md_filepath = os.path.join(markdown_dir, md_filename)
        html_filename = os.path.splitext(md_filename)[0] + '.html'
        html_filepath = os.path.join(html_dir, html_filename)

        # Read the Markdown file
        with open(md_filepath, 'r', encoding='utf-8') as file:
            text = file.read()
            html = markdown.markdown(text)

        # Write the HTML content to a file
        with open(html_filepath, 'w', encoding='utf-8') as file:
            file.write(html)

        print(f'Converted {md_filename} to {html_filename}')
