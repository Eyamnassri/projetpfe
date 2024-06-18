

export class User {
    constructor(
      public id? : number,
      public name? : string,
      public email? : string,
      public oldPassword? : string,
      public password? : string,
      public repassword?:string,
      public picture?: string,
      public resToken? : string,
      public active? : boolean,
      public contact?: string,
      public role?: string,
      public createdBy?:number,
      public updatedBy?:number,
   
    ) {}
  }
  export class Formater {
    constructor(
      public id ?:number,
      public name? : string,
      public email? : string,
      public oldPassword? : string,
      public password? : string,
      public repassword?:string,
      public picture?: string,
      public active? : boolean,
      public contact?: String,
      public tel?:number,
      public fax?:number,
      public role?: string,
   
    ) {}
  }

  export class PictureObject {
    picture: string | undefined;
    url: string | undefined;
    constructor(
      public base64Data?: string,
    ) { }
  }
  export class Login {
    constructor(
        public email? : string,
        public password? : string,
        public rememberMe? : boolean
      ) {}
}

  export class PictureAccount {
    constructor(
      public url?: string,
      public cloudName?:string,
      public apiKey?:string,
      public apiSecret?:string,
    ){}
  }


