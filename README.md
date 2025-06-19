# Lusion Homepage

A modern, interactive homepage for **Lusion** featuring:

- **Animated Loader:** Fullscreen loader with a percentage counter and animated shimmer bar.
- **Dark/Light Mode:** Toggle between dark and light themes, with system preference detection and persistent user choice.
- **Dashboard Hover Images:** When hovering over "dashboards", a row of dashboard images appears.
- **Professional Navbar:** Fixed, responsive navigation bar with site name and links.
- **Trusted Partners Section:** Displays company logos with links, showing collaborations.
- **Modern UI:** Clean, responsive design with CSS-only effects and no frameworks.

---

## Built With Help From
- [Cursor AI Tool](https://www.cursor.so/) — for code generation, design, and feature implementation assistance.

## Deployment
- **Vercel:** For fast, global static hosting.
- **GitHub:** For version control and collaboration.

---

## Getting Started

### 1. **Clone the Repository**
```bash
# Using HTTPS
git clone https://github.com/your-username/lusion-homepage.git
cd lusion-homepage/final
```

### 2. **Add Your Images**
Place the following images in the `final/` directory:
- `graph.png`
- `stats.png`
- `cash.png`
- `cards.png`
- Partner logos: `perplexity.webp`, `supercell.png`, `monzo.png`, `raycast.png`, `retool.png`, `mercury.png`
- Any other images referenced in the HTML

### 3. **Run Locally**
You can open `index.html` directly in your browser:
```bash
# On Windows
double-click index.html
# Or use a simple HTTP server (recommended for some features):
python -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

### 4. **Deploy to Vercel**
- Push your code to GitHub.
- Connect your repository to [Vercel](https://vercel.com/).
- Deploy as a static site (no backend required).

---

## Features
- **Loader:** Animated from 1% to 100% with a shimmer effect, then reveals the homepage.
- **Dark/Light Mode:** Toggle in the navbar, remembers your choice, and respects system settings.
- **Dashboard Hover:** Hovering "dashboards" shows dashboard images in a row.
- **Responsive Navbar:** Stays at the top, adapts to mobile, includes a mode toggle.
- **Partners Section:** Company logos with links, showing collaborations.
- **Modern CSS:** No frameworks, just HTML and CSS (with a little JavaScript for interactivity).

---

## Credits
- **You:** For building and customizing the project.
- **Cursor AI Tool:** For code and design assistance.
- **Open Source Icons/Logos:** For partner/company logos.

---

## Notes
- Make sure all image files are present in the `final/` directory for full functionality.
- You can further customize the homepage by editing `index.html` and `style.css`.
- For any issues, check the browser console for missing files or errors.

---

## License
This project is open source. Feel free to use, modify, and share! 