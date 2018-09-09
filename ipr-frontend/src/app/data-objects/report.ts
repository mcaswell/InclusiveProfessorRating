import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';

@Serialize({})
export class Report extends Serializable {
  @SerializeProperty({
        map: '_id'
    })
  public id: number;
    @SerializeProperty({
        map: 'review_id'
    })
  public reviewId: number;
      @SerializeProperty({})
  public reason: string;
}
