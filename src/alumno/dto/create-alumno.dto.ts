import { IsString } from "class-validator";

export class CreateAlumnoDto {
    @IsString()
    nombre:string

    @IsString()
    matricula:string
}
