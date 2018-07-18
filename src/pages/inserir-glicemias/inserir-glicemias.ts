import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Glicemia } from '../../model/glicemia'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the InserirGlicemiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-glicemias',
  templateUrl: 'inserir-glicemias.html',
})
export class InserirGlicemiasPage {

	glicemia: any = {} as Glicemia;
	glicemiaDBRef: AngularFireList<Glicemia>[];

	constructor(public navCtrl: NavController,
	 public navParams: NavParams,
	 private db: AngularFireDatabase,
	 private formBuilder: FormBuilder,
	 private toastCtrl: ToastController) {

		this.glicemiaDBRef = this.db.list('glicemia-list');
		this.glicemiaForm = this.formBuilder.group({
      		"data":["",Validators.required],
      		"valor": ["",Validators.required]
    	});

	}

	adicionarGlicemia() {
		this.glicemiaDBRef.push(this.glicemia);

		this.glicemia = {} as Glicemia;

		this.glicemiaForm.reset()

		this.abrirToast();

	}

	private abrirToast() {
		let toast = this.toastCtrl.create({
	    	message: "Glicemia adicionada com sucesso!",
	    	duration: 2000,
	    	position: 'bottom'
		});
		toast.present();
	}





}
