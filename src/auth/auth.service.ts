import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
     constructor(private usersService: UsersService) {}
     
     async validateUser(email: string, password:string){
          const user = await this.usersService.getUserByEmail(email);
          if(!user) throw new UnauthorizedException('Unauthorized');
          const isValid = await bcrypt.compare(password, user.password);
          if(!isValid) throw new UnauthorizedException('Invalid credentials');
          return user;
     }
}
