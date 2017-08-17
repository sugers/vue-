export default {
    set(key,data){
       let strdata
      try {
         strdata=JSON.stringify(data)
      }catch(e) {
        strdata=data
      }finally {
         localStorage.setItem(key,strdata)
      }
    },
    get(key){
        let strdata=localStorage.getItem(key);
        let result
         try{
             result=JSON.parse(strdata)
         }catch(e){
             result={};
         }finally{
            return result || {};
         }
    }
}