import express from "express";
const app = express();
app.use(express.json());

app.get("/", async function (req, res) {
	try {
        res.json("Ess")
	} catch (error: any) {
		res.status(422).json({
			message: error.message
		});
	}
});

app.listen(3000);
