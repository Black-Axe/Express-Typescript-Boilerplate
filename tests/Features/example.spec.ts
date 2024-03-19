import { mockReq, mockRes } from 'sinon-express-mock'
import { home } from '../../src/controllers/home-controller'

describe('HomeController', () => {
  test('should home controller return message', async () => {
    const req = mockReq()
    const res = mockRes()
    await home(req, res)
    expect(res.status.calledWith(200)).toBeTruthy()
    expect(res.send.calledWith('Hello World!')).toBeTruthy()
  })
})
