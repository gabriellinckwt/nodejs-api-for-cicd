import { RolesEnum } from "../types/User";
import dynamoose from "dynamoose";
import { v1 as uuidv4 } from "uuid";

export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  role: RolesEnum;
}

const UserSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4(),
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: ["createDate", "creation"],
      updatedAt: ["updateDate", "updated"],
    },
  }
);

export default dynamoose.model("User", UserSchema);
