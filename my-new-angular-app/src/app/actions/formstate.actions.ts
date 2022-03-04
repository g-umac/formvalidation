import { createAction, props } from '@ngrx/store';

export const yFormstates = createAction(
  '[Formstate] Y Formstates'
);

export const yFormstatesSuccess = createAction(
  '[Formstate] Y Formstates Success',
  props<{ data: any }>()
);

export const yFormstatesFailure = createAction(
  '[Formstate] Y Formstates Failure',
  props<{ error: any }>()
);
