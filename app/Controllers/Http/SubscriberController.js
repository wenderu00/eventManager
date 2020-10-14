'use strict'
const Event = use('App/Models/Event')
const Subscriber = use('App/Models/Subscriber')

class SubscriberController{
    constructor(){
        this.model=Subscriber
        this.event=Event
    }
    async viewSubscriber({params,auth}){
        return this.model.query().where({event_id:params.id,active:true}).fetch()
    }
    async viewInactiveSubscriber({params}){
        
        return this.model.query().where({event_id:params.id,active:false}).fetch()
    }
    async activeSubscriber({params,request,auth}){
        console.log(request.id)
        console.log(params.id)
        const sub = await this.model.findBy('id',request.input('id'))
        const event=await this.event.findBy('id',params.id)
        console.log(auth.user)
        if(auth.user.id==event.created_by){
            sub.merge({active:true})
            return sub.save()
        }
    }
    async addSubscriber({params,request,auth}){
        const subscriber ={...request.all(),username:auth.user.username,event_id:params.id,user_id:auth.user.id}
        return this.model.create(subscriber)
    }
    async searchSubscriberByUser({params,request,auth}){
        const sub = await this.model.findBy('username',request.input('username'))
        const event=await this.event.findBy('id',params.id)
        if(auth.user.id==event.created_by){
            return Boolean(sub)
        }
    }
    async searchSubscriberById({params,request,auth}){
        const sub = await this.model.findBy('id',request.input('id'))
        const event=await this.event.findBy('id',params.id)
        if(auth.user.id==event.created_by){
            return Boolean(sub)
        }
    }        
    
    
}
module.exports = SubscriberController