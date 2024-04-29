#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"

# Install Python dependencies
pip install markdown beautifulsoup4

# Run the Python Markdown to HTML conversion script
python md_to_html.py
