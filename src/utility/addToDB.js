import { toast } from "react-toastify";

const getStoredReadList = () => {
  // read-list ...> local storage ...> string hisaba thake

  const storedListString = localStorage.getItem("read-list");
  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList; // jode thake
  } else {
    return []; // jode na thake tahole empty array
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    // check this item
    // already exist. do not add it
    console.log(id, "already exists in the read list");
  } else {
    storedList.push(id); // push korla object ba array banaisi sei tar moddhe ache
    const storedListStr = JSON.stringify(storedList); // string a convert
    localStorage.setItem("read-list", storedListStr); // localStorage a save kora rhaklam
    
    // ideally trigger toast from the component 
    toast('This book is added to your read list.');
  }
};


// localStorage a amra sorasori kono javascript ar file rhakta pari na ..>
//string a convert kora rhakta hoi ajonno JSON Stringify a rhaksi

const getStoredWishList = () => {
  // read-list
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    // already exists. do not add it
    console.log(id, "already exists in the read list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
  }
};

export { addToStoredWishList, addToStoredReadList, getStoredReadList};
