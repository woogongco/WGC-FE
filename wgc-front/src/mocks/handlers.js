import { rest } from 'msw';
import dummy from './dummy.json';

export const handlers = [
	rest.get('/friends/list', (req, res, ctx) => {
		const param1 = req.url.searchParams.get('page');
		return res(ctx.status(200), ctx.json(dummy), ctx.json(param1));
	}),
];
