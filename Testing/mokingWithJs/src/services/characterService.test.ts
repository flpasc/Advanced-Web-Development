import axios from 'axios'
import * as fetchModule from '../api/getCharacter'
import { ICharacter } from '../types/ICharacter'
import * as CharacterService from './characterService'

jest.mock('axios')

afterEach(() => {
	jest.resetAllMocks()
})

const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedCharacterAlive: ICharacter = {
	id: 1,
	name: 'Rick Sanchez',
	status: 'Alive',
}

const mockedCharacterDead: ICharacter = {
	id: 1,
	name: 'Rick Sanchez',
	status: 'Dead',
}

describe('Test api call for single character', () => {
	test('Returns character name', async () => {
		mockedAxios.get.mockResolvedValue({ data: mockedCharacterAlive })

		const result = await CharacterService.getCharacterName(1)
		expect(result).toBe('Rick Sanchez')
	})

	test('Axios error failed request', async () => {
		const error = new Error('Axios failed')

		mockedAxios.get.mockRejectedValue(error)
		jest.spyOn(axios, 'isAxiosError').mockReturnValue(true)

		await expect(CharacterService.getCharacterName(1)).rejects.toThrow(
			'Failed to fetch character',
		)
	})

	test('Unexpected error failed request', async () => {
		const error = new Error('Some other failure')

		mockedAxios.get.mockRejectedValue(error)

		await expect(CharacterService.getCharacterName(1)).rejects.toThrow(
			'Unexpected error',
		)
	})

	test('Is character alive', async () => {
		mockedAxios.get.mockResolvedValue({ data: mockedCharacterAlive })

		const result = await CharacterService.isCharacterAlive(1)
		expect(result).toBe(true)
	})

	test('Is character dead', async () => {
		mockedAxios.get.mockResolvedValue({ data: mockedCharacterDead })

		const result = await CharacterService.isCharacterAlive(1)
		expect(result).toBe(false)
	})
})
