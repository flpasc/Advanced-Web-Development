"use strict";
class SettingsManager {
    constructor() {
        this.settings = {};
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new SettingsManager();
        }
        return this.instance;
    }
    set(key, value) {
        this.settings[key] = value;
    }
    get(key) {
        return this.settings[key];
    }
    static reset() {
        this.instance = null;
    }
}
SettingsManager.instance = null;
// Example usage:
const settings = SettingsManager.getInstance();
settings.set('theme', 'dark');
settings.get('theme'); // Output: 'dark'
settings.set('language', 'german');
settings.get('language');
