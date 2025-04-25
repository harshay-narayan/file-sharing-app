import jwt from "jsonwebtoken";

class AuthService {
  setUser({ user }: { user: Record<string, string> }) {
    const payload = {
      ...user,
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY!);
  }
  getUser(token: string) {
    if (!token) return null;
    return jwt.verify(token, process.env.JWT_SECRET_KEY!);
  }
}

export default new AuthService();
