import { Application } from "../application/Application";
import { User } from "../user/User";
import { Risk } from "../risk/Risk";

export type Assessment = {
  application?: Application | null;
  assessor?: User | null;
  createdAt: Date;
  id: string;
  risks?: Array<Risk>;
  updatedAt: Date;
};
