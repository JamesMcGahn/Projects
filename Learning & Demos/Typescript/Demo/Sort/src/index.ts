import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
const charactersCollection = new CharacterCollection('iqxyCdRLmNoSjTuVwKpeZaBFgh');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(22);
linkedList.add(99);
linkedList.add(-45);
linkedList.add(-32);
linkedList.add(-32);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
