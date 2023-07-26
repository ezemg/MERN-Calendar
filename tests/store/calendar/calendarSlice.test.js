import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice.js';
import {
  calendarWithActiveEventState,
  calendarWithEventsState,
  events,
  initialState,
} from '../../__fixtures/calendarStates.js';

describe('Pruebas en calendarSlice', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('Debe de activar el evento con onSetActiveEvent ', () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );

    expect(state.activeEvent).toEqual(events[0]);
  });

  test('Debe de agregar evento con onAddNewEvent', () => {
    const newEvent = {
      id: '3',
      start: new Date('2023-11-21 13:00:00'),
      end: new Date('2023-11-21 15:00:00'),
      title: 'Nota de Prueba',
      notes: 'Nota de Prueba',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );

    expect(state.events).toEqual([...events, newEvent]);
  });

  test('Debe de actualizar evento con onUpdateEvent', () => {
    const updatedEvent = {
      id: '1',
      start: new Date('2024-11-21 13:00:00'),
      end: new Date('2024-11-21 15:00:00'),
      title: 'Nota de Prueba editada',
      notes: 'Nota de Prueba editada',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );

    expect(state.events).toContain(updatedEvent);
  });

  test('Debe de borrar el evento activo con onDeleteEvent', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent()
    );

    expect(state.activeEvent).toBe(null);
    expect(state).not.toContain(events[0]);
  });

  test('Debe de establecer los eventos con onLoadEvents', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));

    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);

    const newState = calendarSlice.reducer(state, onLoadEvents(events));
    expect(state.events.length).toBe(events.length);
  });

  test('Debe de limpiar el estado con onLogoutCalendar', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogoutCalendar()
    );

    expect(state).toEqual(initialState);
  });
});
