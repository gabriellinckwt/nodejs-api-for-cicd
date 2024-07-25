import User from "../entities/User";

export class UserRepository {
  async getAll(): Promise<any[]> {
    try {
      const query = await User.scan().all().exec();
      return query;
    } catch {
      throw new Error();
    }
  }

  async createUser(user: any): Promise<any> {
    try {
      const query = await User.create({
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      });
      return query;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async updateUser(id: string, user: any): Promise<any> {
    try {
      const query = await User.update(id, user);

      return query;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  async deleteUser(id: string): Promise<null> {
    try {
      await User.delete(id);
      return null;
    } catch {
      throw new Error();
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const query = await User.scan({ email, password }).exec();
      return query;
    } catch {
      throw new Error();
    }
  }

  async getById(id: string): Promise<any> {
    try {
      const query = await User.get(id);
      if (!query) return null;
      return query;
    } catch {
      throw new Error();
    }
  }
}
