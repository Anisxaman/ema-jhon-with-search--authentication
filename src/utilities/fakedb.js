// use local storage as your db for now
//-----------------------------------------------------------------------
const addToDb = id => {
  const exists = getDb();
  let shopping_cart = {};


  //shopping cart na thakle shopping cart nam r akta object banabe & key & value add korbe.
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);//shopping cart thakle take obj a change korte hobe.
    if (shopping_cart[id]) {   //shopping cart r bitor item ta aage theke thakle if na hoi else
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;  //value hisabe shopping cart a set kora hobe.
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
}
//-----------------------------------------------------------------------------------------------
const getDb = () => localStorage.getItem('shopping_cart');
//------------------------------------------------------------------------------------------
const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}
//-----------------------------------------------------------------------------------------
const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}
//-----------------------------------------------------------------------------------------
const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};//jodi exit thake tahole obj kore return korbr na thakle empty obj return korbe.
}
//-----------------------------------------------------------------------------------------
const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }
