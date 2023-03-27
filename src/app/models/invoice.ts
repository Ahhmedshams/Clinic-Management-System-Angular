export class Invoice {
  constructor(
    public _id: Number,
    public paymentType: String,
    public totalCost: Number,
    public date: String,
    public doctorId: Number,
    public patientId: Number
  ) {}
}
