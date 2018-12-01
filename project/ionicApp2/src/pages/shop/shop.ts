import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {  normalizeURL, ActionSheetController, ToastController, ModalController, LoadingController, Platform, Loading, ViewController } from 'ionic-angular';
import { Transfer, TransferObject } from "@ionic-native/transfer";
import { FilePath } from "@ionic-native/file-path";


declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  images:Array<{src:String}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private imagePicker: ImagePicker,
              private transfer: FileTransfer,private file: File,public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController,) {
    this.images=[];
  }
takePhoto(){
  const options:CameraOptions={
    quality:100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType:this.camera.PictureSourceType.CAMERA,
    allowEdit:false,
    encodingType: this.camera.EncodingType.JPEG,
    saveToPhotoAlbum:false,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imgPath)=>{
    this.doupload(imgPath);
  });
  this.camera.getPicture(options).then((imageData)=>{
    
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.images.unshift({
      src:base64Image
    })

  },(err)=>{});
}

doupload(filePath){
  const fileTransfer: FileTransferObject = this.transfer.create();
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName: 'name.jpg',  // 文件类型
    mimeType:'image/jpeg',
    headers: {},
    params: {
      name:'hh',
      age:20
    },    // 如果要传参数，写这里
  }
  var api="上传图片的地址"
  fileTransfer.upload(filePath,api, options)
  .then((data) => {
    alert(JSON.stringify(data));
  }, (err) => {
    alert(err);
    alert(JSON.stringify(err));
  })
}

hh(){
  const options:CameraOptions={
    quality:100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType:this.camera.PictureSourceType.CAMERA,
    allowEdit:false,
    encodingType: this.camera.EncodingType.JPEG,
    saveToPhotoAlbum:false,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
    }
  }, (err) => {
    console.log('获取图片失败');
  });
}



upload() {
  const fileTransfer: FileTransferObject = this.transfer.create();
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName: 'name.jpg',  // 文件类型
    headers: {},
    params: {}    // 如果要传参数，写这里
  }
  fileTransfer.upload('<file path>', '<api endpoint>', options)
  .then((data) => {
    // success
  }, (err) => {
    // error
  })
}

download() {
  const url = 'http://www.example.com/file.pdf';
  const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    // handle error
  });

}







}

