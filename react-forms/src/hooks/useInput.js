import { useState } from "react";
export default function useInput({initialValue})
{
    const [isEdited, setIsEdited] = useState(false);
    const [value,setValue]=useState(initialValue ??"");
  
    function handleIsEdited() {
    setIsEdited(true);
    }

    function handleValueChange(e) {
    setValue(e.target.value);
    setIsEdited(false);
  }

    return{
        handleIsEdited,
        handleValueChange,
        setValue,
        isEdited,
        value
    };
}