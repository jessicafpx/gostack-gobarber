import AppError from '@shared/errors/AppError';
import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1121221213',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1121221213');
  });

  it('should not be able to create two appointments on the same time', async () => {
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

