import { ApiProperty } from "@nestjs/swagger"

export class GetPatternsQuery {
    
    @ApiProperty({
        type: String,
        required : false
    })
    id?: string;

    @ApiProperty({
        type: String,
        required : false
    })
    name?: string
}