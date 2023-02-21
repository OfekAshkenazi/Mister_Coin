export const storageService = {
    oldSave: saveToStorage,
    oldGet: loadFromStorage,
}

function saveToStorage(key:string, val:any) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key:string) {
    var val = localStorage.getItem(key)
    if(val) return JSON.parse(val)
}
