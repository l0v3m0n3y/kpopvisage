class kpopvisage{
    constructor(){
        this.api = "https://www.kpopvisage.com/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async people_for_comparison(group_type,group_category){
        let req=await fetch(`${this.api}/ratings/getPeopleForComparison?groupType=${group_type}&groupCategory=${group_category}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async stats_group_type(group_type,limit){
        let req=await fetch(`${this.api}/ratings/getPersonStatsByGroupType?groupType={group_type}&limit=${limit}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async groups_list(){
        let req=await fetch(`${this.api}/groups?includeAll=true`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async search(name){
        let req=await fetch(`${this.api}/groups/${name}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async versus_list(id_group){
        let req=await fetch(`${this.api}/groups/${id_group}/versus`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async multiple_group(name_1,name_2){
        let req=await fetch(`${this.api}/groups/multiple?groupSafeNames=${name_1}&groupSafeNames=${name_2}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {kpopvisage};