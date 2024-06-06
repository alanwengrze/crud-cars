const knex = require("../database/knex");
const AppError = require("../utils/AppError");
class CarsController{
  async create(request, response){
    const { name, brand, model, year, color } = request.body

    if(!name || !brand || !model || !year || !color){
      throw new AppError("Todos os campos devem ser preenchidos")
    }

    await knex("cars").insert({
      name,
      brand,
      model,
      year,
      color
    })

    response.status(201).json()
  }

  async update(request, response){
    const { name, brand, model, year, color } = request.body
    const { id } = request.params

    await knex("cars").where({id}).update({
      name,
      brand,
      model,
      year,
      color
    })

    response.json()
  }

  async index(request, response){
    const { name, brand, model, year, color } = request.query

    if(name){
      const carsName = await knex("cars").select("*").where({name})
      return response.json(carsName)
    }

    if(brand){
      const carsBrand = await knex("cars").select("*").where({brand})

      return response.json(carsBrand)
    }

    const cars = await knex("cars").select("*")

    return response.json(cars)
  }

  async show(request, response){
    const { id } = request.params
    const cars = await knex("cars").select("*").where({id})

    return response.json(cars)
  }

  async delete(request, response){
    const { id } = request.params
    await knex("cars").where({id}).delete()
    return response.json()
  }
}

module.exports = CarsController;