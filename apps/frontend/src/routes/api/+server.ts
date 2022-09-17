import type { RequestHandler } from './$types';
import { prisma } from 'database';

export const GET: RequestHandler = async (req) => {
	const users = await prisma.user.findMany();
	return new Response(JSON.stringify(users));
};
