import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService 
{
    supplePower(watts: number)
    {
        console.log(`Suppling ${watts} watts of power`); 
    }
}
