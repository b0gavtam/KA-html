let dna = "AAAA"
function dnaStrand(dna){
  let r = "";
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case "A":
          r += "T"
          break;
        case "T":
          r+="A"
          break;
        case "G":
          r+="C"
          break;
        case "C":
          r+="G"
          break;
      }
    }
      return r;
  }
  console.log(dnaStrand(dna))