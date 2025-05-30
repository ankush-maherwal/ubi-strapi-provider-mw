import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BenefitsService } from './benefits.service';
import { ConfigService } from '@nestjs/config';
import { BenefitsController } from './benefits.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [BenefitsController],
  imports: [HttpModule],
  providers: [BenefitsService, ConfigService, PrismaService],
  exports: [BenefitsService],
})
export class BenefitsModule {}
