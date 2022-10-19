import TypeDb from "../../types/TypeDb";

const db: Array<TypeDb> = [
  {
    id: 1,
    type: "pix",
    amount: 100,
    date: "2022-10-19",
    description: "Pizza galera",
    operation: "credit",
  },

{
    id: 1,
    type: "pix",
    amount: 40,
    date: "2022-10-18",
    description:"Açaí com granola",
    operation: "credit",
},
{
    id: 2,
    type: "pix",
    amount: 80,
    date: "2022-10-18",
    description:"Pizza",
    operation: "debit",
},
{
    id: 3,
    type: "debit",
    amount: 100,
    date: "2022-10-18",
    description:"Gasolina",
    operation: "credit",
},
{
    id: 4,
    type: "pix",
    amount: 300,
    date: "2022-10-18",
    description:"Supermercado",
    operation: "credit",
},
{
    id: 5,
    type: "debit",
    amount: 10,
    date: "2022-10-19",
    description:"Padaria",
    operation: "credit",
},
{
    id: 6,
    type: "debit",
    amount: 200,
    date: "2022-10-19",
    description:"Salão",
    operation: "credit",
},
{
    id: 7,
    type: "debit",
    amount: 100,
    date: "2022-10-19",
    description:"Ifood",
    operation: "credit",
},
{
    id: 8,
    type: "pix",
    amount: 100,
    date: "2022-10-19",
    description:"Hambugueria",
    operation: "credit",
},
{
    id: 9,
    type: "debit",
    amount: 100,
    date: "2022-10-19",
    description:"Farmácia",
    operation: "credit",
},
{
    id: 10,
    type: "ted",
    amount: 150000,
    date: "2020-01-01",
    description:"Salário",
    operation: "credit",
},

];

export default db;