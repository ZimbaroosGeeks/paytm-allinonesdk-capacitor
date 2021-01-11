declare module '@capacitor/core' {
  interface PluginRegistry {
    AllInOneSDK: AllInOneSDKPlugin;
  }
}

export interface AllInOneSDKPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
