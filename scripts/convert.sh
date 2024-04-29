#!/bin/bash

# Change directory to the current script's directory
cd "$(dirname "$0")"

# Install Python dependencies
echo "Installing dependencies..."
pip install markdown

# Run the Markdown to HTML conversion script
echo "Running conversion script..."
python md_to_html.py

echo "Conversion completed."
