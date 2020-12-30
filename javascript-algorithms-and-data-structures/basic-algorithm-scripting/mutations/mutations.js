function mutation(arr) {
  const set1 = new Set([...arr[0].toLowerCase()]);
  const set2 = new Set([...arr[1].toLowerCase()]);

  for (let elem of set2) {
    if (!set1.has(elem)) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
