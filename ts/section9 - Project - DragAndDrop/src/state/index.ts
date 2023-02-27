type Listener<T> = (items: T[]) => void;

export class State<T> {
  protected listeners: Listener<T>[] = [];

  addListerner(listenersFunc: Listener<T>) {
    this.listeners.push(listenersFunc);
  }
}
