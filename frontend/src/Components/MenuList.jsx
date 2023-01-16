import { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './SubComponent/Display.jsx';
import FormComponent from './SubComponent/FormComponent.jsx';

const MenuList = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(true);
  const [fetch, setFetch] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const call = async () => {
      const fetchData = await axios.get('http://localhost:5000/menu');
      setData(fetchData.data);
      setFetch(false);
    };
    call();
  }, [fetch]);

  return (
    <div className="basis-8/12">
      {display ? (
        <Display
          data={data}
          setData={setData}
          display={display}
          setDisplay={setDisplay}
          edit={edit}
          setEdit={setEdit}
          setEditData={setEditData}
          setFetch={setFetch}
        />
      ) : (
        <FormComponent
          data={data}
          setDisplay={setDisplay}
          setData={setData}
          edit={edit}
          setEdit={setEdit}
          editData={editData}
          setEditData={setEditData}
          fetch={fetch}
          setFetch={setFetch}
        />
      )}
    </div>
  );
};

export default MenuList;
