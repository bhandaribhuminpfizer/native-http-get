export interface nativeHttpGetPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
