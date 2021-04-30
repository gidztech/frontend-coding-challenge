import actions from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')

afterEach(() => {
  jest.clearAllMocks()
})

describe('actions', () => {
  describe('sendToApi', () => {
    it('should make request to API and resolve with success state', async () => {
      axios.post.mockResolvedValue({ status: 201 })
      const response = await actions.sendToApi({ state: {} })
      expect(axios.post.mock.calls.length).toBe(1)
      expect(response.success).toBe(true)
    })

    it('should make request to API and resolve with unsuccessful state when bad data is supplied', async () => {
      axios.post.mockResolvedValue({ status: 400 })
      const response = await actions.sendToApi({ state: 'bad data' })
      expect(axios.post.mock.calls.length).toBe(1)
      expect(response.success).toBe(false)
    })
  })
})
