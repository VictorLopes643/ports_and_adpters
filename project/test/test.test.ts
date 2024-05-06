import axios from "axios";

test("Deve criar uma conta para o passageiro", async function () {
    const responseSignup = await axios.get("http://localhost:3000/");
	expect(responseSignup);
});