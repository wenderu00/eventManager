'use strict'

const Event = use('App/Models/Event')


class EventController {
    constructor(){
        
        this.model=Event
    }
    async allEvents(){
        return this.model.query().orderBy('id','desc').fetch();
    }
    async singleEvent({params}){
        return this.model.query().with('subscribers').where('id',params.id).first();
    }
    async addEvent({request,auth}){
        
        const event={...request.all(),created_by: auth.user.id}
        
        event.schedule=JSON.stringify(event.schedule)
        event.payment_plans=JSON.stringify(event.payment_plans)
       
        return this.model.create(event)
    }
    async deleteEvent({params}){
        const event = await this.model.find(params.id)
        return event.delete();
    }
}
module.exports = EventController