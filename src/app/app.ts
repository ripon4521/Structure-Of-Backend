import express, { Request, Response } from 'express';
const app = express()

app.get('/', ( req:Request, res:Response ) => {
  res.send('Hello Developersdddd ')
})


export default app; 