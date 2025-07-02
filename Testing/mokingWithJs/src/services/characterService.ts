import { getCharacter } from '../api/getCharacter'

export const getCharacterName = async (id: number): Promise<string> => {
	const data = await getCharacter(1)
	return data.name
}

export const isCharacterAlive = async (id: number): Promise<boolean> => {
	const data = await getCharacter(1)
	return data.status === 'Alive'
}
