import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ConfigService {
  constructor(private readonly prismaService: PrismaService) {}

  async getConfigValue() {
    const appConfigs = await this.prismaService.appConfig.findMany();

    const config = {};
    for (const appConfig of appConfigs) {
      const { key, value, type } = appConfig;
      if (type === "STRING") {
        config[key] = value;
      }

      if (type === "NUMBER") {
        config[key] = Number(value);
      }
    }

    return config;
  }
}
