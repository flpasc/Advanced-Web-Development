//Global Settings Manager
type SettingsSchema = {
	theme: 'light' | 'dark'
	language: string
}

class SettingsManager {
	private static instance: SettingsManager | null = null
	private settings: Partial<SettingsSchema> = {}

	private constructor() {}

	static getInstance() {
		if (!this.instance) {
			this.instance = new SettingsManager()
		}
		return this.instance
	}

	public set<T extends keyof SettingsSchema>(key: T, value: SettingsSchema[T]) {
		this.settings[key] = value
	}

	public get<T extends keyof SettingsSchema>(
		key: T,
	): SettingsSchema[T] | undefined {
		return this.settings[key]
	}

	static reset(): void {
		this.instance = null
	}
}

// Example usage:
const settings = SettingsManager.getInstance()

settings.set('theme', 'dark')
settings.get('theme') // Output: 'dark'

settings.set('language', 'german')
settings.get('language')
