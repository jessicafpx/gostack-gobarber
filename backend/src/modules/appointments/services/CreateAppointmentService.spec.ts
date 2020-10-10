import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentsService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1121221213',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1121221213');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: new Date(),
      provider_id: '1121221213',
    });

    expect(createAppointment.execute({
      date: new Date(),
      provider_id: '1121221213',
    })).rejects.toBeInstanceOf(AppError)
  });
});

