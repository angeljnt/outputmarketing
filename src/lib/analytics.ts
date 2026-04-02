type EventMetadata = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, metadata?: EventMetadata) {
  const device = window.innerWidth < 768 ? "mobile" : "desktop";
  const route = window.location.pathname;
  const payload = { event: eventName, route, device, ...metadata };

  // Log to console in development; replace with analytics provider in production
  if (typeof window !== "undefined") {
    console.debug("[analytics]", payload);
  }

  // Future: send to analytics endpoint
  // fetch("/api/track", { method: "POST", body: JSON.stringify(payload) });
}
