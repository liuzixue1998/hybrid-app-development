import { Loading, LoadingController, ToastController, Toast } from 'ionic-angular';

export abstract class BaseUI {
    constructor() {

    }

    /**
     * 加载中
     * 
     * @protected
     * @param {LoadingController} loadingCtrl 
     * @param {string} message 
     * @returns {Loading} 
     * @memberof BaseUI
     */
    protected showLoading(loadingCtrl: LoadingController,
        message: string): Loading {
        let loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true,   //在页面跳转的时候是否隐藏此页面
        });
        loader.present();
        return loader
    }

    /**
     * 加载后的弹出信息
     * 
     * @protected
     * @param {ToastController} toastCtrl 
     * @param {string} message 
     * @returns {Toast} 
     * @memberof BaseUI
     */
    protected showToast(toastCtrl: ToastController, message: string): Toast {
        let toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom',
        })
        toast.present();
        return toast
    }
}
