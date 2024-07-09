# kpopvisage
JavaScript library for kpopvisage.com
# main
```js
async function main(){
    const {kpopvisage} = require('./kpopvisage');
    const kpop= new kpopvisage();
    let req=await kpop.search("bts")
    console.log(req)
}
main()
```
