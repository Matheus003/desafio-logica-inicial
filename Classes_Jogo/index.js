class hero{
  constructor(name, age, type, attack = ""){
    this.name = name
        this.age = age
        this.type = type
        this.attack = attack
  }
    
    getAttack(){
      let typesHero = ["warrior", "mage", "monk", "ninja"]
      let typesAttack = ["sword", "magic", "martial arts", "shuriken"]
        
        let i = 0
        
        while(i<typesHero.length){
      if(this.type === typesHero[i]){
        this.attack = typesAttack[i]
                return this.attack
            }
           i++
    }
        
  }
    
}
 
 
function Attack(heroInstance){
  console.log(`The ${heroInstance.type} attacks using ${heroInstance.attack}`)
}
 
 
let Hero1 = new hero("Matheus", "19", "mage") 
Hero1.getAttack()
Attack(Hero1)