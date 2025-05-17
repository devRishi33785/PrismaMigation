import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class TestService {
  constructor(private readonly prismaService: PrismaService) {}
}
