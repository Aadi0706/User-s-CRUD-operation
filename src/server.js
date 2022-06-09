
const connect = require('./configs/db');
const app = express();

app.listen(5000, async (req, res) => {
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("listening to port 5000");
});

