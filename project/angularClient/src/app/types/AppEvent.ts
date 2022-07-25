import { AppEventType } from "./AppEventType";

export class AppEvent<T> {
  constructor(
    public type: AppEventType,
    public payload: T,
  ) {}
}
