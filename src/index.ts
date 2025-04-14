export class Queue<T extends defined> {
  private first = 0;
  private last: number;

  public constructor(private readonly cache: T[] = []) {
    this.last = cache.size();
  }

  public enqueue(value: T): void {
    this.cache[this.last++] = value;
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) return;

    const first = this.first++;
    const value = this.cache[first];
    this.cache[first] = undefined!;

    return value;
  }

  public toArray(): T[] {
    return this.cache.filterUndefined();
  }

  public at(index: number): T | undefined {
    if (index < 0 || index >= this.size()) return;
    return this.cache[this.first + index];
  }

  public isEmpty(): boolean {
    return this.size() <= 0;
  }

  public size(): number {
    return math.max(this.last - this.first, 0);
  }
}