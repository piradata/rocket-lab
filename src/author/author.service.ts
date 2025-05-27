import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  private authors: Author[] = [];

  create(createAuthorDto: CreateAuthorDto): Author {
    const newAuthor: Author = {
      id: Date.now().toString(),
      ...createAuthorDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.authors.push(newAuthor);
    return newAuthor;
  }

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: string): Author | undefined {
    return this.authors.find(author => author.id === id);
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto): Author | null {
    const authorIndex = this.authors.findIndex(author => author.id === id);
    if (authorIndex === -1) {
      return null;
    }
    const updatedAuthor: Author = {
      ...this.authors[authorIndex],
      ...updateAuthorDto,
      updatedAt: new Date(),
    };
    this.authors[authorIndex] = updatedAuthor;
    return updatedAuthor;
  }

  remove(id: string): Author | null {
    const authorIndex = this.authors.findIndex(author => author.id === id);
    if (authorIndex === -1) {
      return null;
    }
    const [removedAuthor] = this.authors.splice(authorIndex, 1);
    return removedAuthor;
  }
}