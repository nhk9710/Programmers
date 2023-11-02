const solution = (arr) => {
  return arr.map(v => { return (v >= 50 && v%2===0) ? v/2 : (v < 50 && v%2!==0) ?  v*2 : v })
}