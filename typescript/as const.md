```typescript
const arr = [1, 's'];
arr[0] = 2; // ok

const arr1 = [1, '2'] as const;
// arr1[3] = 1 // error

function test(ar: readonly any[]):void {

}
test(arr1)
```

