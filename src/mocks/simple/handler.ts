import { rest } from 'msw'

// criar mockServerSide

// import json
import retrieveSimpleExample from './simpleExample.json'

export const handlers = [
    rest.get(`/simples`, (_, res, ctx) => {
        return res(ctx.json(retrieveSimpleExample))
    })
]