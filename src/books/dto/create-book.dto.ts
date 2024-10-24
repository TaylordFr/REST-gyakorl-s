import { IsDefined, IsNumber } from "class-validator";

export class CreateBookDto {
    @IsDefined()
    @IsNumber()
    id: number;

    @IsDefined()
    title: string;
    @IsDefined()
    author: string;
    @IsDefined()
    isbn: string;
    
    @IsDefined()
    @IsNumber()
    publishYear: number;
    
    @IsDefined()
    reserved: boolean;
}
