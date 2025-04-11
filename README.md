# @rbxts/better-queue
Simple O(1) queue implementation for Roblox

## Example
```ts
const q = new Queue;
q.enqueue(1);
q.enqueue(2);
q.dequeue();
q.size();
q.isEmpty();
q.toArray();
```