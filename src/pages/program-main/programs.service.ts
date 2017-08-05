import { Injectable } from '@angular/core';

@Injectable()
export class ProgramsService {
  // data to the programs-list
  public programs: Array<any> = [{
    'id': 1,
    'description': '',
    'name': '演唱《青花瓷》',
    'member': 'Hybris',
    'number': '1',
    'time': '19:00',
    'grade': 89
  },
  {
    'id': 2,
    'description': '',
    'name': '相声《大话西游》',
    'member': 'UIUX',
    'number': '7',
    'time': '19:20',
    'grade': 44
  },
  {
    'id': 3,
    'description': '',
    'name': '舞蹈《Worth it》',
    'member': 'DW',
    'number': '4',
    'time': '19:40',
    'grade': 98
  },
  {
    'id': 4,
    'description': '',
    'name': '流行歌曲串烧',
    'member': 'Testing',
    'number': '3',
    'time': '19:50',
    'grade': 66
  },
  {
    'id': 5,
    'description': '',
    'name': '演唱《someone like you》',
    'member': 'AEM',
    'number': '1',
    'time': '20:00',
    'grade': 78
  }];

  constructor() { }

  getPrograms() {
    return this.programs;
  }
  delete(obj) {
        const id = obj.id;
        this.programs.forEach((item, index, array) => {
        if (item.id === id) {
            array.splice(index, 1);
        }
        });
    }
    deleteChecked() {
        const checkList = this.programs.filter(item => item.check === true);
        checkList.forEach(item => {
            this.delete(item);
        });
    }
}
