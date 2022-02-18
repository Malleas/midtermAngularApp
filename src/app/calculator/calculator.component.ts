import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1:number = NaN
  num2:number = NaN
  add:boolean = false
  subtract:boolean = false
  multiply:boolean = false
  divide:boolean = false
  results:number = 0
  msg:string = "Success!"

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.add){
      this.results = this.num1 + this.num2
      this.msg = "This is the result of the addition of " + this.num1 + " and " + this.num2
    }else if(this.subtract){
      this.results = this.num1 - this.num2
      this.msg = "This is the result of subtracting " + this.num1 + " and " + this.num2
    }else if(this.multiply){
      this.results = this.num1 * this.num2
      this.msg = "This is the result of multiplying " + this.num1 + " and " + this.num2
    }else {
      if(this.num1 == 0 || this.num2 == 0){
        window.alert("Cannot divide by 0, please update entries.")
      }else {
        this.results = this.num1 / this.num2
        this.msg = "This is the result of dividing " + this.num1 + " and " + this.num2
      }
    }

  }

}
