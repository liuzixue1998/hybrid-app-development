
import { Component } from '@angular/core';

//判断是哪个平台打开的导入Platform

import { IonicPage, normalizeURL, NavController, NavParams, ActionSheetController, ToastController, ModalController, LoadingController, Platform, Loading, ViewController } from 'ionic-angular';

 

// 导入四个外部加载进来的组件

import { File } from "@ionic-native/file";

import { Transfer, TransferObject } from "@ionic-native/transfer";

import { FilePath } from "@ionic-native/file-path";

import { Camera } from "@ionic-native/camera";

import { BaseUI } from '../../common/baseui';

 

declare var cordova: any; //导入第三方的库定义到TS项目中

 

// @IonicPage()

@Component({

  selector: 'page-headface',

  templateUrl: 'headface.html',

})

 

export class HeadfacePage extends BaseUI {

  userId: string;

  errorMessage: string;

  lastImage: string = null;

 

  constructor(public navCtrl: NavController,

    public navParams: NavParams,

    public modalCtrl: ModalController,

    public loadingCtrl: LoadingController,

    public actionSheetCtrl: ActionSheetController,

    public camera: Camera,

    public transfer: Transfer,

    public file: File,

    public filePath: FilePath,

    public platform: Platform,

    public toastCtrl: ToastController,

    public viewCtrl: ViewController

  ) {

    super();

  }

 

  // ionViewDidEnter(){

  //   this.shorage.get('UserId').then(val)=>{

  //     if (val != null) {

  //       this.userId = val

  //     }

  //   }

  // }

 

  private Refresh: string;

  // 下拉刷新

  pullDown(goback) {

    this.Refresh = "这里不是入口";

    goback.complete();

  }

 

  presentActionSheet() {

    let actionSheet = this.actionSheetCtrl.create({

      title: '选择图片',

      buttons: [

        {

          text: '从图库中选择',

          handler: () => {

            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);

          }

        },

        {

          text: '使用相机',

          handler: () => {

            this.takePicture(this.camera.PictureSourceType.CAMERA);

          }

        },

        {

          text: '取消',

          role: 'cancel'

        }

      ]

 

    });

    actionSheet.present();

  }

 

  // 获取图片

  takePicture(sourceType) {

    // 定义相机的一些参数

    var options = {

      quality: 100,//图片的质量

      sourceType: sourceType,

      saveToPhotoAlbum: false, //是否把拍摄的照片保存到相册中

      correctOrientation: true,//是否纠正拍摄照片的方向-陀螺仪

    };

    //获取图片的方法

    this.camera.getPicture(options).then((imagePath) => {

      //特别处理Android平台的文件路径问题

      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

        //获取Android平台下的真实路径

        this.filePath.resolveNativePath(imagePath)

          .then(filePath => {

            //获取正确的路径

            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);

            //获取正确的文件名

            let currentName = imagePath.substr(imagePath.lastIndexof('/') + 1);

            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

          });

      }

      else {

        //获取正确的路径

        let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

        //获取正确的文件名

        let currentName = imagePath.substr(imagePath.lastIndexof('/') + 1);

        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

      }

    }, (err) => {

      super.showToast(this.toastCtrl, "选择图片出现错误，请检查相关权限。");

    }

    );

  }

 

  //将获取到的图片或者相机拍摄的图片进行另存为，用于后期图片的上传使用

  copyFileToLocalDir(namePath, currentName, newFileName) {

    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(sucess => {

      this.lastImage = newFileName;

    }, error => {

      super.showToast(this.toastCtrl, "存储图片到本地图库出现错误。");

    });

  }

 

  //为文件生成一个新的文件名

  createFileName() {

    var d = new Date(),

      n = d.getTime(),

      newFileName = n + ",jpg"; //拼接文件名

    return newFileName;

  }

 

  //处理图片的路径为可以上传的路径

  public pathForImage(img) {

    if (img === null) {

      return '';

    }

    else {

      //https://ionicframework.com/docs/wkwebview/

      return normalizeURL(cordova.file.dataDirectory + img);//normalizeURL 重写file路径，适配ios11

    }

  }

 

  uploadImage() {

    var url = '';

    var targetPath = this.pathForImage(this.lastImage);

    var filename = this.userId + ".jpg" //定义上传后的文件名

    //上传的参数

    var options = {

      fileKey: "file",

      fileName: filename,

      chunkedMode: false,

      mimeType: "multipart/form-data",

      params: { 'fileName': filename, 'userid': this.userId }

    };

 

    const fileTransfer: TransferObject = this.transfer.create();

 

    var loading = super.showLoading(this.loadingCtrl, "上传中...");

 

    //开始正式上传

    fileTransfer.upload(targetPath, url, options).then(data => {

      loading.dismiss();

      super.showToast(this.toastCtrl, "图片上传成功。");

      //用户看清弹窗提示后进行页面的关闭

      setTimeout(() => {

        this.viewCtrl.dismiss();

      }, 3000);

    }, err => {

      loading.dismiss();

      super.showToast(this.toastCtrl, "图片上传发生错误，请重试。");

    });

  }

}




