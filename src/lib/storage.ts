// Cross-browser & Web Storage Utility

declare const chrome: any;
declare const browser: any;

export const storage = {
  async get<T = any>(key: string, defaultValue?: T): Promise<T | undefined> {
    try {
      if (typeof chrome !== 'undefined' && chrome?.storage?.sync) {
        return new Promise((resolve) => {
          chrome.storage.sync.get([key], (result: Record<string, any>) => {
            if (result && result[key] !== undefined) {
              resolve(result[key]);
            } else {
              resolve(defaultValue);
            }
          });
        });
      } else if (typeof browser !== 'undefined' && browser?.storage?.sync) {
        const result = await browser.storage.sync.get([key]);
        return result[key] !== undefined ? result[key] : defaultValue;
      } else if (typeof window !== 'undefined' && window.localStorage) {
        const item = localStorage.getItem(`samaya_${key}`);
        if (item !== null) {
          try {
            return JSON.parse(item);
          } catch {
            return item as unknown as T;
          }
        }
      }
    } catch (err) {
      console.warn('Storage get error:', err);
    }
    return defaultValue;
  },

  async set<T = any>(key: string, value: T): Promise<void> {
    try {
      if (typeof chrome !== 'undefined' && chrome?.storage?.sync) {
        return new Promise((resolve) => {
          chrome.storage.sync.set({ [key]: value }, () => resolve());
        });
      } else if (typeof browser !== 'undefined' && browser?.storage?.sync) {
        await browser.storage.sync.set({ [key]: value });
        return;
      } else if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(`samaya_${key}`, JSON.stringify(value));
      }
    } catch (err) {
      console.warn('Storage set error:', err);
    }
  },

  async remove(key: string): Promise<void> {
    try {
      if (typeof chrome !== 'undefined' && chrome?.storage?.sync) {
        return new Promise((resolve) => {
          chrome.storage.sync.remove([key], () => resolve());
        });
      } else if (typeof browser !== 'undefined' && browser?.storage?.sync) {
        await browser.storage.sync.remove([key]);
        return;
      } else if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(`samaya_${key}`);
      }
    } catch (err) {
      console.warn('Storage remove error:', err);
    }
  },
};
