'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PresentationSchema extends Schema {
  up () {
    this.create('presentations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('presentations')
  }
}

module.exports = PresentationSchema
