# QPS Hub — Capacitor Native App

A native iOS/Android wrapper for the QPS Hub employee portal, built with [Capacitor](https://capacitorjs.com/).

## Project Structure

```
qps-capacitor/
├── www/                    # Web assets (your app lives here)
│   └── index.html          # Main application file
├── capacitor.config.ts     # Capacitor configuration
├── package.json            # Node dependencies & scripts
├── ios/                    # (generated) Xcode project
└── android/                # (generated) Android Studio project
```

## Prerequisites

- **Node.js** ≥ 18 and npm
- **For iOS:** macOS with Xcode 15+ and CocoaPods (`sudo gem install cocoapods`)
- **For Android:** Android Studio (Hedgehog+) with SDK 33+

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Add native platforms

```bash
# iOS (macOS only)
npm run cap:add:ios

# Android
npm run cap:add:android
```

### 3. Sync web assets to native projects

```bash
npm run cap:sync
```

### 4. Open in IDE & run

```bash
# iOS — opens in Xcode
npm run cap:open:ios

# Android — opens in Android Studio
npm run cap:open:android
```

Or run directly on a connected device/emulator:

```bash
npm run cap:run:ios
npm run cap:run:android
```

## Making Changes

1. Edit files in the `www/` folder (your HTML/CSS/JS).
2. Run `npm run cap:copy` to push changes to the native projects.
3. Rebuild from Xcode or Android Studio.

For live reload during development:

```bash
npx cap run ios --livereload --external
npx cap run android --livereload --external
```

## Capacitor Plugins Included

| Plugin | Purpose |
|---|---|
| `@capacitor/app` | Back button handling, app state |
| `@capacitor/status-bar` | Native status bar styling |
| `@capacitor/splash-screen` | Launch splash screen |
| `@capacitor/keyboard` | Keyboard resize behavior |
| `@capacitor/haptics` | Haptic feedback |
| `@capacitor/browser` | In-app browser for external links |

## Firebase Configuration

The app uses Firebase Authentication (email/password). The Firebase config is embedded in `www/index.html`. If you need to change the Firebase project, update the `firebaseConfig` object in that file.

### iOS Deep Link / Auth Domain

For Firebase Auth to work correctly on iOS, you may need to add your `authDomain` to the `Associated Domains` in Xcode:

1. Open `ios/App/App.xcworkspace` in Xcode
2. Select the App target → Signing & Capabilities
3. Add `Associated Domains` → `applinks:qps-one.firebaseapp.com`

### Android SHA-1 Fingerprint

For Firebase Auth on Android, register your debug/release SHA-1 in the Firebase Console:

```bash
cd android && ./gradlew signingReport
```

Copy the SHA-1 and add it to Firebase Console → Project Settings → Android app.

## App Configuration

Key settings in `capacitor.config.ts`:

- **`appId`**: `com.qps.hub` — change this to match your app store listing
- **`appName`**: `QPS Hub` — the display name on the device
- **`webDir`**: `www` — the folder containing your built web assets

## Building for Production

### iOS

1. Open Xcode: `npm run cap:open:ios`
2. Select your team in Signing & Capabilities
3. Product → Archive → Distribute App

### Android

1. Open Android Studio: `npm run cap:open:android`
2. Build → Generate Signed Bundle / APK
3. Follow the wizard to create a release build
