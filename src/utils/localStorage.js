// ttl:(in milliseconds)
// ttl = 2592000000 = 30 days
export function setLocalStorage(key, value, ttl = 2592000000) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl, // Expiry time (current time + ttl)
    };
  
    localStorage.setItem(key, JSON.stringify(item));
  }
  
  export function getLocalStorage(key) {
    try {
      const value = localStorage.getItem(key); //hamesha key/abc etc parameter lazmi anzes wrna error doy
      console.log("Log inside the getLocalStorage", value);
      if (!value) {
        return null;
      }
  
      const item = JSON.parse(value);
      const now = new Date();
  
      // Check if the item/token is expired
      if (item.expiry && now.getTime() > item.expiry) {
        localStorage.removeItem(key); //  Automatically remove expired token
        console.log("Token expired, removed from localStorage");
        return null;
      }
  
      console.log("Returning item value:", item);
      return item;
      //   return item;
    } catch (error) {
      console.log("Error Log in getLocalStorage fuction", error);
      return "";
    }
  }
  
  export function removeLocalStorageItem(key) {
    // token is expired then automcatically remove from localStorage/No need to remove manually by logout
    return localStorage.removeItem(key);
  }
  