# 📱 Mobile Testing Setup - TheOneAction

Anleitung zum lokalen Testen der App auf dem Smartphone via ADB Port-Forwarding.

---

## 🚀 Quick Start

### 1. Dev Server starten

```bash
cd app
npm run dev
```

✅ Server sollte auf Port **5001** laufen: `http://localhost:5001/the_one_action/`

> **Port belegt?** Falls Port 5000/5001 belegt ist:
> ```bash
> lsof -i :5001  # Prozess finden
> kill <PID>     # Prozess beenden
> npm run dev    # Neu starten
> ```

---

## 📱 Android Testing (ADB)

### Voraussetzungen
- **ADB installiert**: `brew install android-platform-tools` (macOS)
- **USB-Debugging aktiviert** am Handy (Developer Options)
- **Handy per USB verbunden**

### Setup

**1. ADB Verbindung prüfen:**
```bash
adb devices
```
Output sollte dein Gerät zeigen:
```
List of devices attached
ABC123XYZ    device
```

**2. Port-Forwarding einrichten:**
```bash
adb reverse tcp:5001 tcp:5001
```

**3. App auf dem Handy öffnen:**
```
http://localhost:5001/the_one_action/
```

✅ Die App lädt jetzt vom lokalen Dev Server!

---

## 🔄 Workflow

### Normale Entwicklung:
```bash
# Terminal 1: Dev Server
cd app
npm run dev

# Terminal 2: ADB Setup (einmalig nach Handy-Verbindung)
adb reverse tcp:5001 tcp:5001
```

### Bei Änderungen:
- Hot Reload funktioniert automatisch
- Änderungen werden sofort auf dem Handy sichtbar
- Bei Bedarf Seite neu laden

### Port-Forwarding entfernen:
```bash
adb reverse --remove tcp:5001
# oder alle:
adb reverse --remove-all
```

---

## 🍎 iOS Testing (Alternative)

Da iOS kein ADB hat:

**Option 1: Über lokales Netzwerk**
```
http://192.168.10.79:5001/the_one_action/
```
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
