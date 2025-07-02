import axios from 'axios'
import type { ICharacter } from '../types/ICharacter'

export const getCharacter = async (id: number): Promise<ICharacter> => {
	try {
		const response = await axios.get(
			`https://rickandmortyapi.com/api/character/${id}`,
		)
		return response.data
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios Error: ', error.message)
			throw new Error('Failed to fetch character')
		}
		throw new Error('Unexpected error')
	}
}
