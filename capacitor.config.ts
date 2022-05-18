/**
 * @overview Capacitor configuration file.
 * appId: package Id
 * addName will be shown n App Store.
 */

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-next-starter',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    // livereload and instant refresh during development
    url: 'http://192.168.219.255:3000',
  },
};

export default config;
