function hash(key, size) {
    let hashCode = 0;
    for (let index in key) {
      hashCode += key.charCodeAt(index);
    }
    return hashCode % size;
}

class Box{
    constructor(key,value){
        this.key=key;
        this.value=value;
    }
}

class HashTable {
    constructor() {
      this.size = 16;
      this.slots = new Array(this.size).fill(null);
      this.length = 0;
    }
    add(key,value){
        const hashIndex = hash(key, this.size);
        const slot = this.slots[hashIndex];
        if (!slot){
            this.slots[hashIndex] = new Array();
            let box = new Box(key,value);
            this.slots[hashIndex].push(box);
            this.length++;
        } else { 
            let found=false;  
            for(let i=0;i<slot.length;i++){
                let box = slot[i];
                if(box.key==key){
                    box.value=value;
                    found=true;
                    break;
                }
            }
            if(!found){
                let box = new Box(key,value);
                this.slots[hashIndex].push(box);
                this.length++;
            }
        }
    }
    search(key){
        const hashIndex = hash(key, this.size);
        const slot = this.slots[hashIndex];
        for(let i=0;i<slot.length;i++){
            let box = slot[i];
            if(box.key==key){
                return box.value;
            }
        }
        return "查無此資料!";    
    }
    remove(key){
        const hashIndex = hash(key, this.size);
        const slot = this.slots[hashIndex];
        for(let i=0;i<slot.length;i++){
            let box = slot[i];
            if(box.key==key){
                slot.splice(i,1);
                this.length--;
            }
        }
        return "資料已清除!";
    }
}

const ht = new HashTable();

ht.add("Louis", "767");
ht.add("Lowri", "195");
ht.add("Michelle", "162");
ht.add("Julie", "934");
ht.add("John", "329");
ht.add("Theresa", "331");
ht.add("John", "834");
ht.add("Eddie", "378");
ht.add("Robin", "77");
ht.add("Alfie", "532");
ht.add("Ava", "249");
ht.add("Owen", "208");
ht.add("Theodore", "539");
ht.add("Savannah", "54");
ht.add("Marc", "938");
ht.add("Sara", "420");
ht.add("Carmen", "599");
ht.add("Christine", "415");
ht.add("Mary", "671");
ht.add("Melissa", "171");
ht.add("Gethin", "483");
ht.add("Vanessa", "396");
ht.add("Eden", "638");
ht.add("Zoya", "72");
ht.add("Mae", "23");
ht.add("Edith", "609");
ht.add("Elizabeth", "660");
ht.add("Abdul", "619");
ht.add("Tabitha", "745");
ht.add("Jon", "957");
ht.add("Francis", "621");
ht.add("Millie", "767");

console.log(ht.search("John"));
console.log(ht.search("Ava"));
console.log(ht.remove("John"));
console.log(ht.search("John"));