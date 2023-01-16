import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const Display = ({
  data,
  setData,
  display,
  setDisplay,
  setEdit,
  setEditData,
  setFetch,
}) => {
  const addProduct = () => {
    setDisplay(!display);
  };

  const handleEdit = (item) => {
    setEdit(true);
    setDisplay(false);
    setEditData(item);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/menu/${id}`).then((response) => {
      setData(response.data.data);
      setFetch(!fetch);
    });
  };

  return (
    <div className="bg-gray-300 pt-0  my-8 items-center">
      <div className="items-center flex justify-center">
        <Button
          className="mx-auto px-5 py-4 bg-sky-400 rounded-3xl"
          onClick={addProduct}
        >
          <Typography variant="h6">
            <p>Add Product</p>{' '}
          </Typography>
        </Button>
      </div>
      <div className="flex-wrap flex">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Card className="w-60 mr-10 bg-gray-100 mt-8 hover:bg-gray-400 hover:cursor-pointer">
                <CardHeader color="blue" className="relative h-56">
                  <img src={item.img} alt="img" className="h-full w-full" />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h5" className="">
                    <p>{item.name}</p>
                  </Typography>
                </CardBody>
                <CardFooter>
                  <Button
                    className="bg-yellow-200 w-24"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-200 w-24"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
