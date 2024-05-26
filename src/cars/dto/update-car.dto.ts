import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({ message: `The brand most be a cool string`}) //personalizar
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @MinLength(3) // decoradores para hacer las validaciones
    @IsOptional()
    readonly model?: string;
}