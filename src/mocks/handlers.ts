import { handlers as simple } from './simple'


const handlers = [...simple]

// if (import.meta.env.DEV){
//     handlers.push(...simple)
// }

export { handlers }