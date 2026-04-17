import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.qps.hub',
  appName: 'QPS Hub',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    // Allow loading Firebase and Google Fonts from external URLs
    allowNavigation: [
      'https://*.firebaseapp.com',
      'https://*.googleapis.com',
      'https://*.gstatic.com',
    ],
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: false,
      backgroundColor: '#0a1628',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0a1628',
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#0a1628',
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0a1628',
    preferredContentMode: 'mobile',
  },
};

export default config;
