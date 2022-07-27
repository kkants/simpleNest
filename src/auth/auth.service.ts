import { Injectable } from '@nestjs/common';
import { AuthInterface } from './auth.interface';
import { UserInfo } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService implements AuthInterface {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async validateUser(details: UserInfo) {
    const { discordId } = details;
    const user = await this.userRepo.findOneBy({ discordId });
    console.log('user', user);
    if (user) return user;
    return this.createUser(details);
  }
  createUser(details: UserInfo) {
    console.log('creating');
    const user = this.userRepo.create(details);
    return this.userRepo.save(user);
  }
  findUser(discordId: string): Promise<User | undefined> {

    const userCheck = this.userRepo.findOneBy({ discordId });
    console.log('userCheck', userCheck);
    return userCheck;
  }
}
