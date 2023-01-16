import Menu from '../model/Menu.js';

export const getAllmenu = async (req, res) => {
  try {
    const menu = await Menu.findAll();
    const data = menu.map((item) => item.dataValues);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({
      msg: `failed to get data`,
      error: err,
    });
  }
};

export const addMenu = async (req, res) => {
  try {
    const menuData = await Menu.create(req.body);
    res.status(201).json({
      msg: 'menu added',
      data: menuData,
    });
  } catch (err) {
    res.status(400).json({
      msg: 'failed to add menu ',
      error: err,
    });
  }
};

export const removeMenuById = async (req, res) => {
  try {
    await Menu.destroy({
      where: {
        id: req.params.id,
      },
    });
    const data = await Menu.findAll();
    res.status(200).json({
      msg: 'success delete data',
      data,
    });
  } catch (err) {
    res.status(400).json({
      msg: `failed to remove menu`,
      error: err,
    });
  }
};

export const editMenuById = async (req, res) => {
  const { name, img, price } = req.body;
  const id = req.params.id;
  try {
    await Menu.update(
      {
        name,
        img,
        price,
      },
      {
        where: {
          id,
        },
      }
    );

    const getData = await Menu.findAll();
    res.status(200).json({
      msg: 'success edit data',
      data: getData,
    });
  } catch (err) {
    res.status(400).json({
      msg: 'failed to update data',
      error: err,
    });
  }
};
