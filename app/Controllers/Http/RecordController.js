'use strict'

const Record = use('App/Models/Record')

class RecordController{
    constructor(){
        this.model=Record
    }
    async viewRecords({params}){
        return this.model.query().where({event_id:params.id}).fetch()
    }
    async enterEvent({params,request,auth}){
        return this.model.create({...request.all(),event_id:params.id,user_id:auth.user.id,action:'entrada'})


    }
    async exitEvent({params,request,auth}){
        return this.model.create({...request.all(),event_id:params.id,user_id:auth.user.id,action:'saida'})

    }
}
module.exports=RecordController


