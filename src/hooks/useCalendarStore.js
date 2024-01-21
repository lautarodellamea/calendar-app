import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend

    // TODO: todo bien
    if (calendarEvent._id) {
      // actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // creando
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          _id: new Date().getTime(),
        })
      );
    }
  };

  const startDeletingEvent = () => {
    // TODO: llegar al backend
    dispatch(onDeleteEvent());
  };

  return {
    // Propiedades
    events,
    activeEvent,

    // si es null regresa false sino true
    hasEventSelected: !!activeEvent,

    // Metodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  };
};
