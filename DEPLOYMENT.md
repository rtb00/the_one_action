# GitHub Pages Deployment Setup

Deine App ist jetzt bereit für GitHub Pages!

## 🚀 Deployment Steps

### 1. GitHub Repository Settings
1. Gehe zu deinem Repository auf GitHub
2. Settings → Pages
3. Source: **GitHub Actions** auswählen

### 2. Push zum main Branch
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

Das GitHub Actions Workflow startet automatisch und deployed die App.

### 3. Live URL
Nach erfolgreichem Deployment: `https://[dein-username].github.io/the_one_action/`

## 📦 Was wurde konfiguriert?

✅ **vite.config.ts** - base: '/the_one_action/'  
✅ **public/404.html** - Redirect für Client-side Routing  
✅ **index.html** - Redirect Handler für direkte URLs  
✅ **.github/workflows/deploy.yml** - Automatisches Deployment  

## 🧪 Lokaler Test des Production Builds

```bash
cd app
npm run build
npm run preview
```

## 🔄 Re-Deployment

Jeder Push zum `main` Branch löst automatisch ein neues Deployment aus.

Manuelles Deployment: Repository → Actions → "Deploy to GitHub Pages" → Run workflow

## 🌐 Custom Domain (optional)

In GitHub Settings → Pages → Custom domain kannst du eine eigene Domain hinzufügen.
