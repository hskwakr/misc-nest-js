import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeBrandsProvider {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}
