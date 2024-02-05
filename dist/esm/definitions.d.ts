export interface nativeHttpGetPlugin {
    get(options: {
        url: string;
    }): Promise<{
        url: string;
    }>;
}
