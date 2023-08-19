import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "YOUR_API_KEY"
});

const openai = new OpenAIApi(configuration);

const app =  express()
app.use(cors());
app.use(express.json())

app.post('/', async(req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    })

    //handle response from openAPI and send it back to the client
    res.status(200).send({
      bot: response.data.choices[0].text
    })

    } catch (error) {
      console.log(error)
      res.status(500).send(error || "something went very wrong")
  }
})

app.listen(4000, () => 
  console.log("AI server started on port: https://localhost:4000 ")
)