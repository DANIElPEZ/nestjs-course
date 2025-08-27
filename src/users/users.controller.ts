import { Controller, Get, Param, Post, Body, Delete, Put, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')// endpoint /users
export class UsersController { //class represents logic
     constructor(private userService: UsersService){}

     @Get() // HTTP GET method
     getUsers(){
          return this.userService.findAll();
     }

     @Get(':id') // HTTP GET method with parameter
     getUserById(@Param('id') id: string){// @Param decorator extracts the 'id' from the route
          return this.userService.findOne(id);
     }

     @Post()// HTTP POST method
     createUser(@Body() body: CreateUserDto) { // @Body decorator extracts the body of the request
          return this.userService.create(body);
     }

     @Delete(':id')// HTTP DELETE method with parameter
     deleteUser(@Param('id') id: string){
          return this.userService.delete(id);
     }

     @Put(':id') // HTTP PUT method with parameter
     updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
          return this.userService.update(id, body);
     }
}