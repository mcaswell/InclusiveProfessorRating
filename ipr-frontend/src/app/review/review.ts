import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';

@Serialize({})
export class Review extends Serializable {
  @SerializeProperty({
        map: '_id'
    })
  public id: number;
  @SerializeProperty({
        map: 'professor_id'
    })
  public professorId: number;
  @SerializeProperty({})
  public text: string;
  @SerializeProperty({
        map: 'accom_rating'
    })
  public accomRating: number;
    @SerializeProperty({
        map: 'inclusive_rating'
    })
  public inclusiveRating: number;
    @SerializeProperty({
        map: 'quality_rating'
    })
  public qualityRating: number;

  @SerializeProperty({
    map: 'red_flags'
  })
  public redFlags: number[];

  @SerializeProperty({
    map: 'green_flags'
  })
  public greenFlags: number[];

  @SerializeProperty({ })
  public upvotes: number;

  @SerializeProperty({})
  public downvotes: number;

  @SerializeProperty({
      map: 'course_taken'
  })
  public courseTaken: string;
}
