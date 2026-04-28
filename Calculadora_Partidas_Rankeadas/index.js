main()

function main(){
  let balance = calculateBalance(103,2); 
    let level = getLevel(balance);
    console.log(`The Hero has the balance of ${balance} and is at level of ${level} `);
}
 
 
function calculateBalance(victories,loses){
  let balance = victories - loses
    return balance
}
 
function getLevel(balance) {
    let levels = ["Iron", "Bronze", "Silver", "Gold", "Diamond", "Legendary", "Imortal"];
    let limits = [10, 20, 50, 80, 90, 100];
 
    let i = 0;
 
    while (i < limits.length) {
        if (balance < limits[i]) {
            return levels[i];
        }
        i++;
    }
 
    return levels[levels.length - 1];
}