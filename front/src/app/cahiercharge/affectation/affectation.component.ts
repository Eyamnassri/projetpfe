import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CachierchargeService } from '../cachiercharge.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  id: number =0;
  form: FormGroup;
  show: boolean = false;
  message: string = '';
  showError: boolean = false;
  role: string | null = '';

  constructor(
    private fb: FormBuilder,
    private cachierchargeService: CachierchargeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      titre: [{ value: '', disabled: true }],
      description: [{ value: '', disabled: true }],
      typeDocument: [{ value: '', disabled: true }],
      isValide: [{ value: '', disabled: true }],
      documentName: [{ value: '', disabled: true }],
      autorisation1: ['', Validators.required],
      autorisation2: ['', Validators.required],
       // Added validation to ensure it's required
    });
  }

  ngOnInit(): void {
    this.role = this.getCookie('role');
    console.log('thisrole', this.role);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCahierCharge(this.id);
    });
  }

  getCookie(name: string): string | null {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }

    return null;
  }

  getCahierCharge(id: number): void {
    this.cachierchargeService.getCahierChargeById(id).subscribe(data => {
      console.log(data);
      this.form.patchValue(data); // Populate the form with data from the API
    });
  }

  submit(): void {
    console.log('this.id',this.id)
    if (this.form.valid) {
      this.cachierchargeService.PatchCahierCharge(this.id,this.form.getRawValue()).subscribe(
        data => {
          console.log('data ', data);
          this.show = true;
          this.message = 'Cahier de charge ajoutée avec succès';
        },
        error => {
          console.error('Error:', error);
          this.showError = true;
          this.message = "N'est pas enregister le demande";
        }
      );
    } else {
      this.showError = true;
      this.message = "Formulaire invalide. Veuillez vérifier les champs.";
    }
  }
}
