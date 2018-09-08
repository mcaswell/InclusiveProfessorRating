import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';

//@Serialize({})
export class Department /* extends Serializable */{
  /*@SerializeProperty({
        map: '_id'
    })*/
  public id: number;
  public name: string;
  public universityId: number;
}
