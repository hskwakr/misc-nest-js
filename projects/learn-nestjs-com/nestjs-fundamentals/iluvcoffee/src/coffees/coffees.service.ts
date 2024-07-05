import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: '1',
            name: 'Cappuccino',
            brand: 'Starbucks',
            flavors: ['Coffee', 'Chocolate', 'Vanilla'],
        },
        {
            id: '2',
            name: 'Americano',
            brand: 'Starbucks',
            flavors: ['Coffee', 'Chocolate', 'Vanilla'],
        },
        {
            id: '3',
            name: 'Mocha',
            brand: 'Starbucks',
            flavors: ['Coffee', 'Chocolate', 'Vanilla'],
        },
    ];

    findAll(): Coffee[] {
        return this.coffees;
    }

    findOne(id: string): Coffee {
        return this.coffees.find((coffee) => coffee.id === id);
    }

    create(createCoffeeDto: any) {
        const coffee = {
            id: this.coffees.length + 1,
           ...createCoffeeDto,
        };
        this.coffees.push(coffee);
    }

    update(id: string, updateCoffeeDto: any) {
        const coffee = this.findOne(id);
        if (coffee) {
            // update coffee
        }
    }

    remove(id: string) {
        this.coffees = this.coffees.filter((coffee) => coffee.id!== id);
    }
}
