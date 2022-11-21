import { RegisterUser } from "../RegisteUser"

describe("RegisterUser", () => {
  let mockUser;

  beforeEach(async () => {
    mockUser = {
      name: "okmtyuta"
    }
  })

  it("execute", async () => {
    const user = (await new RegisterUser().execute(mockUser));
    console.log(user);
  })
})
