import {useState} from 'react';


export default function stateFunction() {
  const SavedData = [
    {
     id: 0,
     saved: false
    },
    {
     id: 1,
     saved: false
    },
    {
     id: 2,
     saved: false
    },
    {
     id: 3,
     saved: false
    },
    {
     id: 4,
     saved: false
    },
  ];
  const savedDataState = useState(SavedData);
  return(savedDataState);
};
