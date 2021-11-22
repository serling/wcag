import { rest } from 'msw';

import data from '../data/form';

export const handlers = [
    rest.get('https://my.backend/form-data', (req, res, ctx) => {
        return res(ctx.json(data));
    }),

    rest.get('/whatever', (req, res, ctx) => {
        return res(ctx.json({ message: 'whatever' }));
    })
];
