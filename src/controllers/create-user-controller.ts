import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/create-user-service";

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { firstName, lastName, email, location } = request.body as {
      firstName: string;
      lastName: string;
      email: string;
      location: string;
    };

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      firstName,
      lastName,
      email,
      location,
    });

    reply.send(user);
  }
}

export { CreateUserController };
