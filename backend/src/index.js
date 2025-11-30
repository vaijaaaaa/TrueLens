const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const PORT = 5000;
const PYTHON_ML_URL = 'http://localhost:8000/ml';

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.json({
        status : "ok",
        service : "TrueLens Backend",
        message : "server is running"
    })
})

app.post('/analyze',async (req,res) => {
    try {
        const {text} = req.body;

        if(!text){
            return res.status(400).json({
                error : 'Text is required'
            });
        }

        console.log(`[TrueLens] Received text (${text.length} chars)`);
        const pythonResponse = await axios.post(PYTHON_ML_URL,{text});
        console.log('[TrueLens] ML response' , pythonResponse.data);
        res.json(pythonResponse.data);
        

    } catch (error) {
        console.error('[TrueLens] error',error.message);

        if(error.code === 'ECONNREFUSED'){
            return res.status(503).json({
                error:'ML service is not available'
            })
        }

        res.status(500).json({
            error:"Internal server error"
        })
    }
})

app.listen(PORT,() => {
    console.log(`[TrueLens] Backend running on http://localhost:${PORT}`);
    console.log(`[TrueLens] Will forward requests to ${PYTHON_ML_URL}`);
    
    
})