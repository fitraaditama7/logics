const S = [2, 1, 6, 9, 9, 4, 3]
S.sort().reverse()
let max1 = 0
let max2 = 0
let tmp = 0
for (let i = 0; i< S.length; i++) {
  if (S[i] > S[i + 1]) {
    max1 = S[i + 1]
    break
  }
}

console.log(max1)