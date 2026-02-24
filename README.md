# Portfolio Website

This directory contains a simple portfolio website for **Anshuman Kumar**.

## Structure

- `index.html` - main page with sections for About, Projects, and Contact.
- `style.css` - stylesheet with responsive design.
- `script.js` - placeholder JavaScript file for interactions.

## Usage

1. Open `index.html` in a web browser to view the site locally.
2. Customize content, styles, and scripts as needed.
3. Deploy to a static host such as GitHub Pages, Netlify, or any web server.
   - If you prefer serving via Python, a small Flask/WGI app is included (`wsgi.py`).
   - Install dependencies with:
     ```bash
     pip install -r requirements.txt
     ```
   - Run directly:
     ```bash
     python wsgi.py
     ```
     (or with the alternative module path below)
   - Or use gunicorn for production:
     ```bash
     gunicorn --bind 0.0.0.0:8000 -w 4 wsgi:app
     # or, if you prefer keeping code under `src`, use:
     gunicorn --bind 0.0.0.0:8000 -w 4 src.app:app
     ```
   - WSGI ensures `index.html` and other assets are served from the project root.

## License

Feel free to use or modify this project for personal purposes.