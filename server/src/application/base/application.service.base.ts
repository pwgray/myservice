/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Application } from "@prisma/client";

export class ApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ApplicationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationCountArgs>
  ): Promise<number> {
    return this.prisma.application.count(args);
  }

  async applications<T extends Prisma.ApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationFindManyArgs>
  ): Promise<Application[]> {
    return this.prisma.application.findMany(args);
  }
  async application<T extends Prisma.ApplicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationFindUniqueArgs>
  ): Promise<Application | null> {
    return this.prisma.application.findUnique(args);
  }
  async createApplication<T extends Prisma.ApplicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationCreateArgs>
  ): Promise<Application> {
    return this.prisma.application.create<T>(args);
  }
  async updateApplication<T extends Prisma.ApplicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationUpdateArgs>
  ): Promise<Application> {
    return this.prisma.application.update<T>(args);
  }
  async deleteApplication<T extends Prisma.ApplicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationDeleteArgs>
  ): Promise<Application> {
    return this.prisma.application.delete(args);
  }
}
