import { fromJS } from 'immutable'
import { getMenu } from '../menu'

const mockResponse = {test: "Test"}

describe('getMenu', () => {
    it('should return an immutable record of the response', async done => {
        fetchMock.mockOnce( JSON.stringify(mockResponse) )
        const data = await getMenu()
        expect(data.equals(fromJS(mockResponse))).toEqual(true)
        done()
    })
})