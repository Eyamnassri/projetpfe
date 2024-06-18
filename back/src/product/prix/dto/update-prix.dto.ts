import { PartialType } from '@nestjs/mapped-types';
import { CreatePrixDto } from './create-prix.dto';

export class UpdatePrixDto extends PartialType(CreatePrixDto) {
    id?: number;
    name?: string | null;
    description?: string | null;
    prixHorsTax?: number;
    prixTTC?: number;
    tva?: number;
  
}
