export function track(event: string, properties: Record<string, string> = {}) {
  if (typeof window !== "undefined") {
    const target = window as Window & { dataLayer?: Array<Record<string, string>> };
    target.dataLayer?.push({ event, ...properties });
  }
}
