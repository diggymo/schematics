import { Injectable } from '@nestjs/common';<% if (crud && type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>
  import { Create<%= singular(classify(name)) %>Dto } from './dto/create-<%= singular(name) %>.dto';
  import { Update<%= singular(classify(name)) %>Dto } from './dto/update-<%= singular(name) %>.dto';<% } else if (crud) { %>
  import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input';
  import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input';<% } %>
  import { PrismaService } from 'src/prisma/prisma.service';
  
  @Injectable()
  export class <%= classify(name) %>Service {<% if (crud) { %>
    constructor(private prismaService: PrismaService) {}
  
    create(<% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>create<%= singular(classify(name)) %>Dto: Create<%= singular(classify(name)) %>Dto<% } else { %>create<%= singular(classify(name)) %>Input: Create<%= singular(classify(name)) %>Input<% } %>) {
      // return 'This action adds a new <%= lowercased(singular(classify(name))) %>';
      return this.prismaService.<%= lowercased(singular(classify(name))) %>.create(create<%= singular(classify(name)) %>Dto)
    }
  
    findAll() {
      // return `This action returns all <%= lowercased(classify(name)) %>`;
      return this.prismaService.<%= lowercased(singular(classify(name))) %>.findMany()
    }
  
    findOne(id: number) {
      return this.prismaService.<%= lowercased(singular(classify(name))) %>.findMany({
        where: {
          id
        }
      })
    }
  
    update(id: number, <% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>update<%= singular(classify(name)) %>Dto: Update<%= singular(classify(name)) %>Dto<% } else { %>update<%= singular(classify(name)) %>Input: Update<%= singular(classify(name)) %>Input<% } %>) {
      return this.prismaService.<%= lowercased(singular(classify(name))) %>.update({
        where: {
          id
        },
        data: update<%= singular(classify(name)) %>Dto
      })
    }
  
    remove(id: number) {
      return this.prismaService.<%= lowercased(singular(classify(name))) %>.delete({
        where: {
          id
        }
      })
    }
  <% } %>}
  