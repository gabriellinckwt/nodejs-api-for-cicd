import { UserRepository } from "../repositories/UserRepository";
import { UserController } from "./UserController";

describe("UserController", () => {
  let userRepository = new UserRepository();
  let userController = new UserController(userRepository);
});
