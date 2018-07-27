import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*mi codigo*/
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  validacion:any="algo";/*variable ngmde*/

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alerta!',
      subTitle: 'Acceso restringido!'+this.validacion,
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Recuperar contraseña',
      message: "Entre su correo",
      inputs: [
        {
          name: 'E-mail:',
          placeholder: 'E-mail'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar correo',
          handler: data => {
            console.log('Saved clicked');
            this.showAlert1(data);
          }
        }
      ]
    });
    prompt.present();
  }

  showAlert1(data) {
    let alert = this.alertCtrl.create({
      title: 'Correo enviado!',
      subTitle: 'Se envio un mensaje a: ' + data['E-mail:'],
      buttons: ['OK']
    });
    console.log(data);
    alert.present();
  }
}
