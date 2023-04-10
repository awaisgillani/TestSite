import { Component } from '@angular/core';  


const ewsdatacomp = [
  {id: 1, name:'Assignments', description:'All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays.'},
  {id: 2, name:'Essay', description:'All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays.'},
  {id: 3, name:'Disscretations', description:'All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays.'},
  {id: 4, name:'Editing and Proofreading', description:'All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays.'},
  {id: 5, name:'Thesis Writing', description:'All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays.'}
];
@Component({
  selector: 'app-ews',
  templateUrl: './ews.component.html',
  styleUrls: ['./ews.component.css']
})

export class EwsComponent {
  ewsdata=ewsdatacomp; 
}
