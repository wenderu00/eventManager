'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecordsSchema extends Schema {
  up () {
    this.create('records', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users')
      table.integer('event_id').unsigned().notNullable()
      table.foreign('event_id').references('id').inTable('events')
      table.string('action').notNullable()
      table.text('comment').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('records')
  }
}

module.exports = RecordsSchema
