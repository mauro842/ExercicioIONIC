import { AutenticacaoProvider } from './../../providers/autenticacao/autenticacao';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  id: any[];
  tamanhos: any;
  sabores: number;
  loading: Loading;
  checked_items: number;
  sabores_qtd: any;

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private auth: AutenticacaoProvider,
    private alertCtrl: AlertController,
              ) { }

  public pegaTamanho() {
    this.showLoading();
    const ret = this.auth.tamanhos();
    ret.then((data: any) => {
      this.tamanhos = data;
      console.log("Lista de Tamanhos: ", this.tamanhos);
    })
      .catch(error => {
        this.showError(error);
      });
  }

  public pegaSabor(id: any) {
    this.showLoading();
    this.sabores_qtd = id;
    console.log( "Máximo de Sabores que pode escolher: ", this.sabores_qtd);
    const ret = this.auth.sabores(this.id);
    ret.then((data: any) => {
      this.checked_items = 0;
      this.sabores = data;
      this.closeLoader();
      console.log("Lista de Sabores: ", this.sabores);
      console.log("ID Tamanho: ", this.id);
    })
      .catch(error => {
        this.showError(error);
      });
  }

public validaQuantidade(i) {
 //console.log(this.sabores[i].checked);
  if(this.sabores[i].checked)
  this.checked_items++;
  else
  this.checked_items--;
  }

public limitCheck(i){
  if(this.checked_items == this.sabores_qtd)
  return !this.sabores[i].checked;
}

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por Favor Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Falha',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  closeLoader(){
    this.loading.dismiss();
  }

  ionViewDidLoad() {
    this.pegaTamanho();
  }

}
