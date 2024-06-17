import prismaClient from "../prisma";

interface CreateUserServiceProps {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
}

class CreateUserService {
  async execute({
    firstName,
    lastName,
    email,
    location,
  }: CreateUserServiceProps) {
    if (!firstName || !lastName || !email || !location) {
      throw new Error("Preencha todos os campos!");
    }

    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      throw new Error("O e-mail já está em uso!");
    }

    const user = await prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        location,
      },
    });

    return user;
  }
}

export { CreateUserService };
