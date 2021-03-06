import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';

@Module({
    imports: [TypeOrmModule.forFeature([Photo])],
    providers: [PhotoService],
    controllers: [PhotoController],
})
export class PhotoModule { }