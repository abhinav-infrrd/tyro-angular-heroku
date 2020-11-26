export class Topic{
    public topicId? : string;
    public topicName : string;
    public follow : boolean;
    constructor(topicId : string, topicName : string, follow: boolean){
        this.topicName = topicName;
        this.topicId = topicId;
        this.follow = follow;
    }
}