import { PartialType } from '@nestjs/mapped-types';
import { CreateAppelOffreDto } from './create-appel-offre.dto';

export class UpdateAppelOffreDto extends PartialType(CreateAppelOffreDto) {}
