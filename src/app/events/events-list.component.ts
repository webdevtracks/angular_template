import  { Component } from '@angular/core'

@Component({
	selector: 'events-list',
	templateUrl: "./events-list.component.html"
	})

export class EventsListComponent{

	games = {
		id: 1,
		name: 'Assassins Creed Origins',
		date: '27/07/2018',
		time: '10:00 am',
		price: '100',
		imageUrl: '/assets/images/ac.png',
		location: {
			address: '1057 MG',
			city: 'Chennai',
			country: 'India'
		}


	}

}