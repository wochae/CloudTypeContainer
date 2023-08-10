import {
  IsString,
  MaxLength,
  MinLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';
import { CertificateObject } from '../entity/certificate.entity';

export class CreateUsersDto {
  constructor(userIdx: number, intra: string, nickname: string, imgUri: string, certificate: CertificateObject, email: string) {
    this.userIdx = userIdx;
    this.intra = intra;
    this.nickname = nickname;
    this.imgUri = imgUri;
    this.certificate = certificate;
    this.email = email;
  } 

  @IsNotEmpty()
  userIdx: number;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  @Matches(/^[a-zA-Z0-9]*$/, { message: 'intra is unique' })
  intra: string;
  nickname: string;
  imgUri: string;
  certificate: CertificateObject;
  email: string;
}
