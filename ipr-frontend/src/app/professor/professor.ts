import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';

//@Serialize({})
export class Professor /*extends Serializable*/ {
  /*@SerializeProperty({
        map: '_id'
    })*/
  public id: number;
    /*@SerializeProperty({
        map: 'department_id'
    })*/
  public departmentId: number;

  public universityId: number;

  public name: string;

  public overallRating: number;
  public numRatings: number;
}
