let number = "454793";
function dash(n) {
    for (let i = 0; i < n.length; i++) {
        n.split("")
        if (n[i] % 2 == 1) {
            if (n[i+1] % 2 == 1) {
                return n[i] + "-";
            }
        }
        
    }
    n.join();
}