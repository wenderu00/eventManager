'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubscribersSchema extends Schema {
  up () {
    this.create('subscribers', (table) => {
      table.increments()
      table.string('username').notNullable()
      table.foreign('username').references('username').inTable('users')
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users')
      table.integer('event_id').unsigned().notNullable()
      table.foreign('event_id')
      .references('id')
      .inTable('events')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.boolean('active').notNullable().defaultTo(false)
      
      table.timestamps()
    })
  }

  down () {
    this.drop('subscribers')
  }
}

module.exports = SubscribersSchema
