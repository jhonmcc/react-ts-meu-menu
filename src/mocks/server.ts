import { rest } from 'msw'
import { setupWorker } from 'msw'
import { handlers } from './handlers'

// This configs a request mocking server with the given request handlers
const server = setupWorker(...handlers)

export { server, rest }