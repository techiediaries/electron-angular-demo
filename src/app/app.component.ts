import { Component } from '@angular/core';
import { IpcRenderer } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electron-angular-demo';
  private ipc: IpcRenderer

  constructor(){
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }

    } else {
      console.warn('App not running inside Electron!');
    }
  }
  
  openModal(){
    console.log("Open a modal");
    this.ipc.send("openModal");
  }
}
