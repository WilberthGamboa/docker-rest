import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class AlumnoService {
  private alumnos: Alumno[] = [];
  create(createAlumnoDto: CreateAlumnoDto) {
    const uuid = uuidv4();
    const alumno = {
      ...createAlumnoDto,
      id: uuid
    }
    this.alumnos.push(alumno)
    return {
      alumno
    };
  }

  findAll() {
    const alumnos = this.alumnos
    return {alumnos};
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: string, updateAlumnoDto: UpdateAlumnoDto) {
    for (let index = 0; index < this.alumnos.length; index++) {
      const alumno = this.alumnos[index];
      if (alumno.id === id) {
        alumno.matricula = updateAlumnoDto.matricula
        alumno.nombre = updateAlumnoDto.nombre
        this.alumnos[index]  = alumno
        return {alumno};
      }
     
    }
    
    throw new BadRequestException('No se encontró el id')
  }

  remove(id: string) {
    for (let index = 0; index < this.alumnos.length; index++) {
      const alumno = this.alumnos[index];
      if (alumno.id === id) {
        this.alumnos.splice(index,1)
   
        return {alumno};
      }
     
    }
    
    throw new BadRequestException('No se encontró el id')
  }
}
