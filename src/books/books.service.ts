import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';


const books: CreateBookDto[] = [
  {
    "id": 1,
    "title": "Trónok Harca",
    "author": "George R. R. Martin",
    "isbn": "7429874074383",
    "publishYear": 1996,
    "reserved": false
  },
  {
    "id": 2,
    "title": "Futu.re",
    "author": "Dmitry Glukhovsky",
    "isbn": "7780258791386",
    "publishYear": 2013,
    "reserved": true
  },
  {
    "id": 3,
    "title": "Metro 2033",
    "author": "Dmitry Glukhovsky",
    "isbn": "1885728304518",
    "publishYear": 2005,
    "reserved": true
  }
]

let nextID: number

@Injectable()
export class BooksService{

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return books;
  }

  findOne(id: number) {
    return books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {

    const index = books.findIndex(book => book.id === id)

    if(index !== -1){
      Object.assign(books[index], updateBookDto)
      return books[index]
    } else {
      throw new Error('Book not found!')
    }

  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  
  
  
}
