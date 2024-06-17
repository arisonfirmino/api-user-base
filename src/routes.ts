import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateUserController } from "./controllers/create-user-controller";
import { ListUserController } from "./controllers/list-user-controller";
import { CheckEmailController } from "./controllers/check-email-controller";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUserController().handle(request, reply);
    }
  );

  fastify.get(
    "/users",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListUserController().handle(request, reply);
    }
  );

  fastify.get(
    "/check-email",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CheckEmailController().handle(request, reply);
    }
  );
}
