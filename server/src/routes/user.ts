import { prisma } from '../lib/prisma';
import { FastifyInstance } from 'fastify';
import ShortUniqueId from 'short-unique-id';
import { z } from 'zod';

export async function userRoutes(fastify: FastifyInstance) {

  fastify.get('/users/count', async () => {
    const count = await prisma.guess.count()
    return { count }
  });
}