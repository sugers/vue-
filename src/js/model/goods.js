import storage from '../common/storage.js';

const keyID ='goodsTotal';
let goodsTotal=storage.get(keyID) || {};
export default{
    //根据ID存储选择数量
    set(id,total){
        goodsTotal[id]=total;
        storage.set(keyID,goodsTotal);
    },
    //根据ID获取选择数量
    get(id){
        if(id){
            return goodsTotal[id] ||0;
        }else{
           let totals =this.getTotalList();
           return totals.length && totals.reduce((v1,v2) =>(+v1)+(+v2))
        }
    },
    //获取所有Id的数组
    getId(){
        return Object.keys(goodsTotal)
    },
       // 根据id删除对应商品的数量,删除后记得持久化存储最新结果
    remove(id) {
        delete goodsTotal[id];
        storage.set(keyID, goodsTotal);
    },


    //获取所有TOTAL组成的数组
    getTotalList(){
        return Object.values(goodsTotal)
    }

}; 