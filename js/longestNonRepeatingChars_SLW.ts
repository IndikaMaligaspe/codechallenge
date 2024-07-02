// Given a string, find the length of the longest substring without repeating characters.
// "abcabcbb" - output = 3 


function lengthOfLongestSubstring(str: string) : number{
  let set = new Set<String>();
  let maxLength = 0; ;
  let left  = 0; 
  let right = 0;

  while(left < str.length){
    if(!set.has(str[right])){
        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    } else {
        set.delete(str[left]);
        left++;
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcbbabcdebb"));