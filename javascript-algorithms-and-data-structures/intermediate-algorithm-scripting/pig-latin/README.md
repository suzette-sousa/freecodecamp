# Pig Latin
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Pig Latin


---


### What is asked

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


#### Script to complete

```javascript  
  
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
  

```

---


### What I answered

```javascript  
  
function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const consonsRegex = /^[^aeiou]{1,}/gi;
  let newStr = str.replace(consonsRegex, "");
  let consonCluster = str.match(consonsRegex);
  let lettersAdd = "";
  vowels.includes(str[0]) ? lettersAdd = "way" : lettersAdd = consonCluster + "ay";
  return newStr.concat(lettersAdd);
}

translatePigLatin("consonant");
  

```

---


### Tests passed

✓ translatePigLatin("california") should return "aliforniacay".

✓ translatePigLatin("paragraphs") should return "aragraphspay".

✓ translatePigLatin("glove") should return "oveglay".

✓ translatePigLatin("algorithm") should return "algorithmway".

✓ translatePigLatin("eight") should return "eightway".

✓ Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".

✓ Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".