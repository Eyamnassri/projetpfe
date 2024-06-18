import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDetaiDto } from './create-product-detai.dto';

export class UpdateProductDetaiDto extends PartialType(CreateProductDetaiDto) {
    id: number;
    name: string | null;
    description: string | null;

}
