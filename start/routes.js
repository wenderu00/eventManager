'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => ({ greeting: 'Hello world in JSON' }))
Route.post('login', 'UserController.login').middleware('guest')
Route.post('logout', 'UserController.logout').middleware('auth')
Route.post('register', 'UserController.store').middleware('guest')
Route.get('user', 'UserController.profile').middleware('auth')

Route.get('event','EventController.allEvents').middleware('auth')
Route.get('event/:id','EventController.singleEvent').middleware('auth')
Route.post('event','EventController.addEvent').middleware('auth')
Route.delete('event/:id','EventController.deleteEvent').middleware('auth')


Route.post('event/:id/subscriber/add','SubscriberController.addSubscriber').middleware('auth')
Route.get('event/:id/subscriber/view','SubscriberController.viewSubscriber').middleware('auth')
Route.get('event/:id/inactive_subscriber/view','SubscriberController.viewInactiveSubscriber').middleware('auth')
Route.post('event/:id/subscriber/active','SubscriberController.activeSubscriber').middleware('auth')
Route.post('event/:id/subscriber/searchById','SubscriberController.searchSubscriberById').middleware('auth')
Route.post('event/:id/subscriber/searchByUser','SubscriberController.searchSubscriberByUser').middleware('auth')

Route.post('event/:id/enter','RecordController.enterEvent').middleware('auth')
Route.post('event/:id/exit','RecordController.exitEvent').middleware('auth')
Route.get('event/:id/records','RecordController.viewRecords').middleware('auth')

Route.resource('company', 'CompanyController').middleware('auth').apiOnly()
Route.resource('product', 'ProductController').middleware('auth').apiOnly()
Route.resource('client', 'ClientController').middleware('auth').apiOnly()
Route.resource('sales', 'SalesController').middleware('auth').apiOnly()
Route.resource('purchase', 'PurchaseController').middleware('auth').apiOnly()
