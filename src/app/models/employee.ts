export class Employee {
    constructor(
        public _id:Number,
        public name:String,
        public hireDate:String,
        public email:String,
        public salary:Number,
        public phone:Number,
        public gender:String,
        public address:any,
        public status?:String,
        public clinicId?:any
        ){}
}
