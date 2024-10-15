import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeeBrandsProvider } from './CoffeeBrandsProvider';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

class MockCoffeeService {}
class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  // providers: [{ provide: CoffeesService, useValue: new MockCoffeeService() }],
  providers: [
    CoffeesService,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
    CoffeeBrandsProvider,
    {
      provide: COFFEE_BRANDS,
      useFactory: (coffeeBrandsProvider: CoffeeBrandsProvider) =>
        coffeeBrandsProvider.create(),
      inject: [CoffeeBrandsProvider],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
