// const tempEvent = {
//   id: new Date().getTime(),
//   title: 'Cumpleaños del Jefe',
//   notes: 'Hay que comprar pastel',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     id: '123',
//     name: 'Ezequiel',
//   },
// };
export const events = [
  {
    id: '1',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
    title: 'Cumpleaños de una persona',
    notes: 'Hay que anotar cosas y pastel',
  },
  {
    id: '2',
    start: new Date('2022-11-21 13:00:00'),
    end: new Date('2022-11-21 15:00:00'),
    title: 'Cumpleaños de Melissa persona',
    notes: 'Hay que anotar muchas cosas del test2',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [] /*[tempEvent] */,
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: true,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: true,
  events: [...events],
  activeEvent: { ...events[0] },
};
