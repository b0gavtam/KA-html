//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function blowCandles(str) {
    let blow = 0, blow1 = 0, blow2 = 0;
    for (let candle of str) {
      let blow0 = Math.max(candle - blow1 - blow2, 0);
      blow += blow0;
      blow2 = blow1;
      blow1 = blow0;
    }
    return blow;
  }