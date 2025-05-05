import { toast } from "react-toastify";

const getStoredGadgetList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;

    }else{
        return   [];
    }
}

const addToStoredGadgetList = (id)=>{
    const storedList = getStoredGadgetList();
    
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
       toast.success('Added Cart List')
 
}

export {addToStoredGadgetList, getStoredGadgetList}