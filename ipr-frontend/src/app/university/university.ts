import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';

@Serialize({})
export class University extends Serializable{
@SerializeProperty({
        map: '_id'
    })
  public id: number;

  @SerializeProperty({ })
  public name: string;
  
  @SerializeProperty({ })
  public location: string;
  
}
