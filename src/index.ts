export class Queue<T extends defined> {
  private readonly cache: Map<number, T>; // cause roblox-ts doesnt let u set specific array elements
  private first = 0;
  private last: number;

  public constructor(cache: T[] = []) {
    this.cache = cache as never;
    this.last = cache.size();
  }

  public enqueue(value: T): void {
    const last = this.last++;
    this.cache.set(last + 1, value);
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) return;

    const first = this.first++;
    const value = this.cache.get(first + 1);
    this.cache.delete(first);

    return value;
  }

  public toArray(): T[] {
    const result: T[] = [];
    for (let i = this.first; i < this.last; i++) {
      const value = this.cache.get(i + 1);
      if (value === undefined) continue;
      result.push(value);
    }

    return result;
  }

  public at(index: number): T | undefined {
    if (index < 0 || index >= this.size()) return;
    return this.cache.get(this.first + index + 1);
  }

  public isEmpty(): boolean {
    return this.size() <= 0;
  }

  public size(): number {
    return math.max(this.last - this.first, 0);
  }
}