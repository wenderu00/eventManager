'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('title',80).notNullable()
      table.text('content').notNullable()
      table.json('schedule').notNullable()
      table.json('payment_plans').notNullable()
      table.integer('created_by').unsigned().notNullable()
      table.foreign('created_by').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
