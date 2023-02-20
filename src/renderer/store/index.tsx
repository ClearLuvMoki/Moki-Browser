/**
 * Author: Moki
 * Date: 2022-09-21
 * FileName: 全局状态
 **/
import { action, makeObservable, observable } from 'mobx';


export class Store {
    constructor() {
        makeObservable(this, {

        });
    }


}

const store = new Store();
export default store;
