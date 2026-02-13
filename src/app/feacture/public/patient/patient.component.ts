import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientRequest } from '../../../core/models/patient.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientService } from '../../../core/services/patient.service';

@Component({
  selector: 'app-patient',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

  patientForm: FormGroup;
  submitted = false;
  

  constructor(private fb: FormBuilder,private patientService: PatientService) {
    this.patientForm = this.fb.group({
      numero: new FormControl('', [Validators.required, Validators.minLength(5)]),
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      antecedents: ['']
    });
  }

  get f() {
    return this.patientForm.controls;
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      this.submitted = true;
  
      const patientData: PatientRequest = this.patientForm.value;
      this.patientService.createPatient(patientData);
    }
  }

  isFieldValid(fieldName: string): boolean {
    const fieldCtrl = this.patientForm.get(fieldName);
    return !!(fieldCtrl && fieldCtrl.valid && (fieldCtrl.dirty || fieldCtrl.touched));
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldCtrl = this.patientForm.get(fieldName);
    return !!(fieldCtrl && fieldCtrl.invalid && (fieldCtrl.dirty || fieldCtrl.touched));
  }

  onReset(): void {
    this.patientForm.reset();
  }


}
