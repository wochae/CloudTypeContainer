// import { Injectable } from '@nestjs/common';
// import { Strategy } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';

// const cookieExtractor = (req) => {
//   let jwt = null;
//   if (req && req.cookies) {
//     jwt = req.cookies['Authentication'];
//   }
//   return jwt;
// };

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       jwtFromRequest: cookieExtractor,
//       ignoreExpiration: false,
//       secretOrKey: jwtConstants.secret,
//     });
//   }
//   async validate(payload: any) {
//     return { userId: payload.sub, username: payload.username };
//   }
// }
