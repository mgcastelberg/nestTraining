import { IsString } from "class-validator";

export class CreateCarDto {
    @IsString({ message: `The brand most be a cool string`}) //personalizar
    readonly brand: string;
    @IsString()
    readonly model: string;
}