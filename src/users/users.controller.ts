import { Controller, Get, Param, Post, Body, Delete, Put, NotFoundException } from '@nestjs/common';

interface User {
     id: string;
     name: string;
}

@Controller('users')// endpoint /users
export class UsersController { //class represents logic
     private Users: User[] = [
          { id: '1', name: 'John Doe' },
          { id: '2', name: 'Jane Doe' },
     ];

     @Get() // HTTP GET method
     getUsers(){
          return this.Users;
     }

     @Get(':id') // HTTP GET method with parameter
     getUserById(@Param('id') id: string){// @Param decorator extracts the 'id' from the route
          const result= this.Users.find((user) => user.id === id);
          if (!result) {
               throw new NotFoundException('User not found');
          }
          return result;
     }

     @Post()// HTTP POST method
     createUser(@Body() body: User) { // @Body decorator extracts the body of the request
          const newUser = {...body, id: (this.Users.length + 1).toString()}; // Generate a new ID
          this.Users.push(newUser);
          return 'User created successfully';
     }

     @Delete(':id')// HTTP DELETE method with parameter
     deleteUser(@Param('id') id: string){
          const result= this.Users.findIndex((user) => user.id === id);
          if (result===-1) {
               throw new NotFoundException('User not found');
          }
          this.Users.splice(result, 1);
          return 'User deleted successfully';
     }

     @Put(':id') // HTTP PUT method with parameter
     updateUser(@Param('id') id: string, @Body() body: User) {
          const index = this.Users.findIndex((user) => user.id === id);
          if (index === -1) {
               throw new NotFoundException('User not found');
          }
          this.Users[index] = { ...this.Users[index], ...body };
          return 'User updated successfully';
     }
}