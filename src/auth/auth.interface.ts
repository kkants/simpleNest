import { UserInfo } from '../utils/types';
import { User } from '../users/entities';

export interface AuthInterface {
  validateUser(details: UserInfo);
  createUser(details: UserInfo);
  findUser(discordId: string): Promise<User | undefined>;
}
