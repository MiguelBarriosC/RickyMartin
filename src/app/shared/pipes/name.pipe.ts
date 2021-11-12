import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value:any , args:any): any {
    if (args === '') return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
