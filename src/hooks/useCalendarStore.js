import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store/calendar/calendarSlice.js';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: Llegar al backend

    // TODO: todo ok

    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeleteEvent = async () => {
    // TODO: llegar al backend
    dispatch(onDeleteEvent());
  };
  return {
    //Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //Methods
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
  };
};
