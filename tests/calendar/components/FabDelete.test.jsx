import { fireEvent, render, screen } from '@testing-library/react';
import { FabDelete } from '../../../src/calendar/components/FabDelete.jsx';
import { useCalendarStore } from '../../../src/hooks/useCalendarStore.js';

jest.mock('../../../src/hooks/useCalendarStore.js');

describe('pruebas en <FabDelete />', () => {
  const mockStartDeleteEvent = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el componente correctamente', () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');

    expect(btn.classList.toString()).toContain('btn');
    expect(btn.classList.toString()).toContain('btn-danger');
    expect(btn.classList.toString()).toContain('fab-danger');
    expect(btn.style.display).toBe('none');
  });

  test('debe de mostrar el botón si hay un evento activo', () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    });

    render(<FabDelete />);

    screen.debug();

    const btn = screen.getByLabelText('btn-delete');
    expect(btn.style.display).toBe('');
  });

  test('debe de llamar a startDeleteEvent si hay evento activo', () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeleteEvent: mockStartDeleteEvent,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');
    fireEvent.click(btn);

    expect(mockStartDeleteEvent).toHaveBeenCalled();
  });
});
