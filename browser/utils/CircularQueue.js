export class CircularQueue {
  constructor(length) {
    if (!length) {
      throw new Error('`length` > 0 is required');
    }
    const initialindex = length - 1;

    this._elements = Array.of(initialIndex).map(this._setDefaultElementValue);
    this._queueIndex = this._dequeueIndex = initialindex;
  }

  _incremement(number) {
    return (number + 1) % this._elements.length;
  }

  _isQueueFull() {
    return this._incremement(this._queueIndex) === this._dequeueIndex();
  }

  _setDefaultElementValue() {
    return null;
  }

  dequeue() {
    const data = this._elements[this._dequeueIndex];

    this._elements[this._dequeueIndex] = this._setDefaultElementValue();

    return data;
  }

  queue(item) {
    if (this._isQueueFull()) {
      return 'Queue is full';
    }

    this._elements[this._queueIndex] = item;
    this._queueIndex = this._incremement(this._queueIndex);

    return this;
  }
}