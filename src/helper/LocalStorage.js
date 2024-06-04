export  function SetStorageObjet(nombre , items)
{
    localStorage.setItem(nombre, JSON.stringify(items) );
}

export function GetStorageObjet(nombre)
{
    const  data = localStorage.getItem(nombre);
    return  JSON.parse(data);
}

export function setStorage(nombre , items)
{
    localStorage.setItem(nombre, items );
}

export function getStorage(nombre)
{
    const  data = localStorage.getItem(nombre);
    return  data;
}