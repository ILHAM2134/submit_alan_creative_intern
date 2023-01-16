import { DataTypes } from 'sequelize';
import data from './data.js';
import Menu from './Menu.js';

const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
const ActorMovies = sequelize.define('ActorMovies', {
  MovieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie, // 'Movies' would also work
      key: 'id',
    },
  },
  ActorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Actor, // 'Actors' would also work
      key: 'id',
    },
  },
});
Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });

const ListOrder = data.define(
  'ListOrder',
  {
    cust_name: {
      type: DataTypes.STRING,
      defaultValue: 'New Customer',
      allowNull: false,
    },
    menu_id: {
      type: DataTypes.ARRAY,
      allowNull: false,
      references: {
        model: Menu,
        key: id,
      },
    },
    menu_name: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    price: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    qty: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'ListOrder',
  }
);

export default ListOrder;
