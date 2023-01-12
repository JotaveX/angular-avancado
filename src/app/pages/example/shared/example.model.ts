import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Example extends BaseResourceModel {
    constructor(
        public override id?: number,
        public name?: string,
        public description?: string,
        public date?: string,
        public active?: boolean,
        public image?: string,
        public age?: number,
        public phone?: string
    ){
        super();
    }

    
  static fromJson(jsonData: any): Example {
    return Object.assign(new Example(), jsonData);
  }
}