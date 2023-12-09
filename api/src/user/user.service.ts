import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  async createUser() {
    const user = {
      primaryEmail: 'liz@example.com',
      name: {
        givenName: 'Elizabeth',
        familyName: 'Smith',
      },
      suspended: false,
      password: Math.floor(100000 + Math.random() * 9000000),
      hashFunction: 'SHA-1',
      changePasswordAtNextLogin: false,
      ipWhitelisted: false,
      emails: [
        {
          address: 'liz@example.com',
          type: 'home',
          customType: '',
          primary: true,
        },
      ],
      includeInGlobalAddressList: true,
    };
    const data = await this.httpService.post(
      `https://admin.googleapis.com/admin/directory/v1/user`,
      user,
    );
    return user;
  }
}
