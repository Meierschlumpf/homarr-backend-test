import { Module } from '@fily-cloud/common';
import { PostsResolvers } from './posts.resolvers';
import { PostsService } from './posts.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [PostsResolvers, PostsService],
  imports: [PrismaModule],
})
export class PostsModule {}
