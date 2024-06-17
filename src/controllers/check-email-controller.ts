import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma";

class CheckEmailController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email } = request.query as { email: string };

    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      reply.status(200).send({ exists: true });
    } else {
      reply.status(200).send({ exists: false });
    }
  }
}

export { CheckEmailController };
