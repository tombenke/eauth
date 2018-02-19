import { expect } from 'chai'
import config from './index'
import path from 'path'

before(done => { done() })
after(done => { done() })

describe('server/config', () => {

    it('defaults', done => {
        const expected = {
            webServer: {
                port: 3007,
                usePdms: false,
                privatePagesPath: path.resolve("./src/adapters/webServer/config/defaults/content/private/"),
                publicPagesPath: path.resolve("./src/adapters/webServer/config/defaults/content/public/"),
                users: path.resolve("./src/adapters/webServer/config/defaults/users.yml"),
                viewsPath: path.resolve("./src/adapters/webServer/config/defaults/views/"),
                restApiPath: path.resolve("./src/adapters/webServer/config/defaults/restapi/services/")
            }
        }
        
        const defaults = config
        expect(defaults).to.eql(expected)
        done()
    })
})