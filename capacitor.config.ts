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
};

export default config;
