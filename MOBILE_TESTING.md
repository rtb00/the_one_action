# 📱 Mobile Testing - Android

**Terminal 1 - Server starten:**
```bash
cd app
npx vite --port 5001 --host
```

**Terminal 2 - Port Forwarding:**
```bash
adb reverse tcp:5001 tcp:5001
```

**Handy öffnen:** `http://localhost:5001/`
> IP-Adresse aus Vite-Output kopieren (Network URL)

**Option 2: ngrok (Internet-Tunnel)**
```bash
brew install ngrok
ngrok http 5001
```
Dann die ngrok-URL auf dem iPhone öffnen.

---

## 🐛 Troubleshooting

### Port 5001 schon belegt:
```bash
lsof -i :5001
kill <PID>
```

### ADB Device nicht gefunden:
```bash
# USB-Debugging am Handy prüfen
# USB-Kabel neu verbinden
adb kill-server
adb start-server
adb devices
```

### Chrome DevTools Remote Debugging:
```
chrome://inspect
```
→ Handy-Browser-Tabs erscheinen dort für Debugging

---

## 📝 Nützliche Befehle

```bash
# Alle ADB Devices auflisten
adb devices -l

# Port-Forwarding Status
adb reverse --list

# Logcat anzeigen (Android-Logs)
adb logcat | grep -i "chromium"

# App neu installieren (bei Build-Testing)
adb install -r app-debug.apk
```

---

## ✨ Tipps

- **Airplane Mode testen**: Offline-Funktionalität prüfen
- **PWA Installation**: "Add to Home Screen" testen
- **Chrome Remote Debugging**: `chrome://inspect` für Konsole & Network
- **Screenshot machen**: `adb exec-out screencap -p > screenshot.png`
- **Performance**: Chrome DevTools → Lighthouse für Mobile-Audit

---

## 🔗 Relevante URLs

- **Local Dev**: http://localhost:5001/the_one_action/
- **Network**: http://192.168.10.79:5001/the_one_action/
- **GitHub Pages**: https://rtb00.github.io/the_one_action/
- **Repository**: https://github.com/rtb00/the_one_action
