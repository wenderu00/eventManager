'use strict'

class ResourceController{

    async index({ request }){
        const data = request.only(['page'])
        return this.model.query().paginate(data.page, 5)
    }

    async one({params}){
        return this.model.findOrFail(params.id)
    }

    async store({ request, auth }){
        return this.model.create({ ...request.all(), createdBy: auth.user.id });
    }

    async update({ params, request, auth }){
        let existentElement = await this.model.findOrFail(params.id);
        let data = request.all();
        existentElement.merge({ ...request.all(), updatedBy: auth.user.id })
        await existentElement.save();
        return existentElement;
    }

    async destroy({ params, request, auth }){
        let existentElement = await this.model.findOrFail(params.id)
        await existentElement.delete();
    }
    
}

module.exports = ResourceController