import { IsString, IsUrl, IsUUID } from "class-validator";



export class PaidOrderDto {

    @IsString()
    strinpePaymentId : string;

    @IsString()
    @IsUUID()
    orderId : string;

    @IsString()
    @IsUrl()
    receiptUrl : string;

}