import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({ message: `The brand most be a cool string`}) //personalizar
    readonly brand: string;
    @IsString()
    @MinLength(3) // decoradores para hacer las validaciones
    readonly model: string;
}