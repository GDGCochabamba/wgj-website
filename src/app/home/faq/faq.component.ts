import { Component } from '@angular/core';

@Component({
  selector: 'wgj-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  questions = [
    {
      question: '¿Tengo que saber programar para participar?',
      answer:
        'No es necesario saber programar, el Hackathon no solo se enfoca en desarrollar videojuegos, también puedes crear un juego de mesa. Lo principal es aprender y compartir.',
    },
    {
      question: '¿Necesito tener un equipo?',
      answer:
        'No, si quieres puedes inscribirte solamente tú y el primer día del evento te ayudaremos a encontrar un equipo.',
    },
    {
      question: '¿Es necesario llevar una computadora portátil?',
      answer:
        'Si quieres desarrollar un videojuego te recomendamos llevar tu propia computadora o un dispositivo en el que puedas trabajar, pero mucha gente crea juegos de mesa para los que tal vez necesites otros materiales.',
    },
  ];
}
