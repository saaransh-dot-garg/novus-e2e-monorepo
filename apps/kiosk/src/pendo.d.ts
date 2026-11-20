export {};

declare global {
  const pendo: {
    initialize: (options: object) => void;
    identify: (options: object) => void;
    clearSession: () => void;
  };
  interface Window {
    pendo?: {
      track: (eventName: string, metadata?: Record<string, string | boolean | number>) => void;
      trackAgent: (eventType: string, metadata: object) => void;
    };
  }
}
