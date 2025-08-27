import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
     private Users: User[] = [
          { id: '1', name: 'Ernesto', email: 'ernesto@gmail.com' },
          { id: '2', name: 'Paula', email: 'paula@gmail.com' }
     ];

     findAll() {
          return this.Users;
     }

     findOne(id: string) {
          const result= this.Users.findIndex((user) => user.id === id);
          if (result === -1) {
               this.error()
          }
          return this.Users[result];
     }

     
     create(user: User){
          this.Users.push(user);
          return 'User created successfully';
     }
     
     delete(id: string){
          const result = this.findOne(id);
          this.Users.splice(result[id], 1);
          return 'User deleted successfully';
     }

     update(id: string, user: User) {
          const index = this.Users.findIndex((u) => u.id === id);
          if (index === -1) {
               this.error()
          }
          this.Users[index] = { ...this.Users[index], ...user };
          return 'User updated successfully';
     }
     
     error(){
          throw new NotFoundException('User not found');
     }
}