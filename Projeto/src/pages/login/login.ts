import { AutenticacaoProvider } from './../../providers/autenticacao/autenticacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { userName: '', password: '', token: '' };

  constructor(
    public nav: NavController,
    private auth: AutenticacaoProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  public login() {
    this.showLoading()
  const ret = this.auth.login(this.registerCredentials);
  ret.then(data => {console.log(data)
      if (this.auth.login.length) {
        this.nav.push(HomePage);
      }
    })
      .catch(error => {
        this.showError("Usuário ou Senha Invalido");
      })
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


}

