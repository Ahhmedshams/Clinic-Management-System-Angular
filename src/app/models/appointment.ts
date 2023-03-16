export class Appointment {
    constructor(
        public _id:Number,
        public doctorId:any,
        public date:String,
        public time:String,
        public patientId:any,
        public isScaned:String,
        public calenderId?:Number
    ){}
}
