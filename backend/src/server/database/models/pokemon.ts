import { DataTypes, Model } from "sequelize";
import { db } from "../../config/db.js";

class Pokemon extends Model {
  public id!: number;
  public name!: string;
  public height!: number;
  public number!: number;
  public health!: number;
  public weight!: number;
  public url!: string;
}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Pokemon",
    tableName: "pokemons",
    timestamps: false,
  }
);

export default Pokemon;
