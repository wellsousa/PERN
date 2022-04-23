
const PostModel = require('../models/PostModel')

const list = ()=>{
    return PostModel.list()
}

const create = (post)=>{
    return PostModel.create(post)
}

const get = (id)=>{
    return PostModel.get(id)
}

const update = (data)=>{
    return PostModel.update(data)
}

const remove = (id)=>{
    return PostModel.remove(id)
}

module.exports={
    list,
    create,
    get,
    update,
    remove,
}