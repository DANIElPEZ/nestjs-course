import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// Using modules, separate the logic in modules, use controller and service
@Module({
     controllers:[UsersController],
     providers:[UsersService],
     exports:[UsersService] // Export for use in other modules
})
export class UsersModule {}