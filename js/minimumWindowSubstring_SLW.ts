// Given two strings s and t, find the minimum window in s which will contain all the characters in t.

function minWindowsSubstring(str: string, sstr: string) : string {
    
    // create a set that has the substring chars
    let map = new Map();
    for(let char of sstr){
        map.set(char, (map.get(char) || 0 ) + 1);
    }
    // create variable to hold right / left / length / formed for chars are available / required for required chars
    let left =0; let right = 0; let formed =0; let required = map.size;
    
    // create an array to keep the smallest window
    let window = new Map();
    let ans = [-1, 0,0]; // length , left, right

    while(right < str.length){
        let char = str[right];

        // if filled with necessary chars,
        //    update frequancy and move left pointer to find minimum array
        window.set(char, (window.get(char) || 0) + 1 );
        if(map.has(char) && window.get(char) === map.get(char)){
            formed ++;
        }

        while(left <= right && formed == required){
            char = str[left];

            if(ans[0] == -1 || right - left - 1 < ans[0]){
                ans = [right-left + 1, left, right];
            }

            window.set(char, window.get(char) - 1);
            if(map.has(char) && window.get(char) < map.get(char)){
                formed --;
            }
            left ++;
        }
        // move right pointer untill end of string
        right++;
    }

    // return minimum substring
    return (ans[0] === -1 ? "" : str.substring(ans[1], ans[2] + 1));
}

console.log(minWindowsSubstring("ADOBECBANCODED", "ABC")); // Output: "BANC"
console.log(minWindowsSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindowsSubstring("ADOBECODEBANC", "XXX")); // Output: ""