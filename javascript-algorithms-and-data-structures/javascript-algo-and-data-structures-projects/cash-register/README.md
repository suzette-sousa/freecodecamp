# Cash Register
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - JavaScript Algorithms and Data Structures Projects - Cash Register


---


### What is asked

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


#### Script to complete

```javascript  
  
function checkCashRegister(price, cash, cid) {
  var change = {};
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  

```

---


### What I answered

```javascript  
  
function checkCashRegister(price, cash, cid) {
  let currency = {
    "ONE HUNDRED" : 10000,
    "TWENTY" : 2000,
    "TEN" : 1000,
    "FIVE" : 500,
    "ONE" : 100,
    "QUARTER" : 25,
    "DIME" : 10,
    "NICKEL" : 5,
    "PENNY" : 1,
  };

  let change = (cash - price) * 100;
  let total = 0;
  let changeDue = [];
  let rslt = {status:'', change: []};

  cid.map(cidItem => total += cidItem[1]);

  const changeDueFunc = () => {
    cid.reverse();
    cid.map(cidItem => {
      cidItem[1] *= 100;
      Object.keys(currency).map(unit => {
        while(currency[unit] <= change && cidItem[1] > 0 && cidItem[0] === unit) {     
          change -= currency[unit];
          cidItem[1] -= currency[unit];

          if (changeDue.length === 0 || unit !== changeDue[changeDue.length - 1][0]) {
            changeDue.push([unit, currency[unit]/100]);
          } else {
            changeDue[changeDue.length - 1][1] += currency[unit]/100;
          }
        }
      })
    })
  }

  if (change/100 === total) {
    rslt.status = "CLOSED";
    rslt.change = cid;
    return rslt;
  }
  changeDueFunc();
  if (total < change) {
    rslt.status = "INSUFFICIENT_FUNDS";
    rslt.change = [];
  } else {
    rslt.status = "OPEN";
    rslt.change = changeDue;
  }
  
  return rslt;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  

```

---


### Tests passed

✓ checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

✓ checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

✓ checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

✓ checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

✓ checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

✓ checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
