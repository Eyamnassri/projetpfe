
 


export class EtatDemande {
    constructor(
        public  id?:number|null,
        public   libelleEtat?: string|null,
        public  codeEtat?: string|null,
        public  demandeId?: number|null,
    ) {}
  }
  export class Provider {
    constructor(
      public id? : number,
      public name? : string,
      public description? : string,
      public tel?: string,
      public updatedAt? : string,
      public updateBy? : number,
      public createdAt? : string,
      public createdBy?: number,
      public active? : boolean,
    ) {}
  }