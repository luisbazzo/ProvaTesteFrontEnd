import { AnunciosService } from './../anuncios.service';
import { anuncio } from './../anuncios';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  Ads : anuncio[] = [];
  formGroupAds : FormGroup;

  constructor(private AnunciosService : AnunciosService,
                private formBuilder : FormBuilder
                ){
    this.formGroupAds = formBuilder.group({
      id : [''],
      title : [''],
      img : [''],
      content : [''],
      price : ['']
    });
  }

  ngOnInit(): void {
    this.loadAds();
  }

  loadAds(){
    this.AnunciosService.getAds().subscribe(
      {
        next : data => this.Ads = data,
        error : () => console.log("Erro ao chamar o endpoint")
      }
    );
  }

  saveAds(){
    this.AnunciosService.saveAds(this.formGroupAds.value).subscribe(
      {
        next : data => {
          this.Ads.push(data);
          this.formGroupAds.reset;
        }
      }
    );
  }

}
