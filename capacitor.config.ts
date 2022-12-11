import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shelves_v2',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth:{
      scopes: '["profile", "email"]',
      serverClientId: '78496110698-i1s259e1mp9goh4hk52u5s1p68q02pkj.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
