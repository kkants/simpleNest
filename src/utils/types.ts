import { User } from '../users/entities';

export type UserInfo = {
  username: string;
  discriminator: string;
  discordId: string;
  avatar: string;
};

export type Done = (err: Error, user: User) => void;
