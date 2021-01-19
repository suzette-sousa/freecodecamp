# Convert HTML Entities
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Convert HTML Entities


---


### What is asked

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


#### Script to complete

```javascript  
  
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
  

```

---


### What I answered

```javascript  
  
function convertHTML(str) {
  const char = {
    '&': '&amp;',
    '<':'&lt;',
    '>': '&gt;', 
    '"': '&quot;',
     "'": '&apos;'
  }
  let newStr = str.replace(/[&<>"']/g, (equiv) => char[equiv]);
  return newStr;
}

convertHTML("Dolce & Gabb < ana");
  

```

---


### Tests passed

✓ convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".

✓ convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".

✓ convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".

✓ convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".

✓ convertHTML("Schindler's List") should return "Schindler&apos;s List".

✓ convertHTML("<>") should return "&lt;&gt;".

✓ convertHTML("abc") should return "abc".