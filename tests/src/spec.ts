import { Assert, Fact, Theory, InlineData } from "@rbxts/runit";
import { Queue } from "../../src";

const iterator = <T extends defined>(arr: T[]) => {
  let i = 0;
  return () => arr[i++];
}

class QueueTest {
  @Fact
  public creationAndToArray(): void {
    const q = new Queue([1, 2, 3, 4]);
    const getNext = iterator(q.toArray());
    Assert.equal(1, getNext());
    Assert.equal(2, getNext());
    Assert.equal(3, getNext());
    Assert.equal(4, getNext());
  }

  @Theory
  @InlineData([1, 2, 3], 3)
  @InlineData([], 0)
  public size(array: defined[], expectedSize: number): void {
    const q = new Queue(array);
    Assert.equal(expectedSize, array.size());
    Assert.equal(expectedSize, q.size());
  }

  @Theory
  @InlineData([1, 2, 3], false)
  @InlineData([], true)
  public isEmpty(array: defined[], expectedIsEmpty: boolean): void {
    const q = new Queue(array);
    Assert.equal(expectedIsEmpty, q.isEmpty());
  }

  @Fact
  public enqueue(): void {
    const q = new Queue;
    q.enqueue(1);
    q.enqueue(2);
    const getNext = iterator(q.toArray());
    Assert.equal(1, getNext());
    Assert.equal(2, getNext());
  }

  @Fact
  public dequeue(): void {
    const q = new Queue([1, 2, 3]);
    const n = q.dequeue();
    Assert.equal(1, n);

    const getNext = iterator(q.toArray());
    Assert.equal(2, getNext());
    Assert.equal(3, getNext());
  }

  @Fact
  public at(): void {
    const q = new Queue([1, 2, 3, 4]);
    Assert.undefined(q.at(-1));
    Assert.equal(1, q.at(0));
    Assert.equal(2, q.at(1));
    Assert.equal(3, q.at(2));
    Assert.equal(4, q.at(3));
    Assert.undefined(q.at(4));
  }
}

export = QueueTest;