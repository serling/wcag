import { rest } from 'msw';
import data from '../data/form';

export const handlers = [
    rest.get('https://my.backend/form-data', (req, res, ctx) => {
        return res(ctx.json(data));
    }),

    rest.get('https://my.backend/markdown', (req, res, ctx) => {
        return res(
            ctx.json(
                `
# Blog entry

Sint ullamco labore quis aute esse. Non minim do ut anim exercitation 
fugiat Lorem sunt anim occaecat nulla sit proident laborum. 
Ea tempor voluptate eu adipisicing **occaecat** ea minim occaecat 
mollit adipisicing Lorem consectetur deserunt ad. Officia voluptate eu duis 
aliquip ullamco ullamco qui ipsum laborum sunt ea sit incididunt laborum. 

Anim enim incididunt nostrud amet ullamco veniam magna in duis commodo culpa est. 
Non aute veniam aute nisi enim est minim officia. Sunt Lorem voluptate laborum dolor quis.

Custom component in mdx: 

<Button text='button'/>
`
            )
        );
    }),

    rest.get('/whatever', (req, res, ctx) => {
        return res(ctx.json({ message: 'whatever' }));
    })
];
