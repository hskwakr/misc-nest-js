import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { SchemaSync1722351116539 } from "src/migrations/1722351116539-SchemaSync";
import { CoffeeRefactor1722348211465 } from "src/migrations/CoffeeRefactor1722348211465";
import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1722348211465, SchemaSync1722351116539],
});
