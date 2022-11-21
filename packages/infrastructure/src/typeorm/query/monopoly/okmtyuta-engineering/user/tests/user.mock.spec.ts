import { FetchAllUsers } from "../FetchAllUsers"
import { FetchUserById } from "../FetchUserById"

describe("Fetch User", () => {
  it("FetchAllUsers.execute", async () => {
    const users = await new FetchAllUsers().execute()
    console.log(users.users)
  })

  it("FetchUserById.execute", async () => {
    const user = await new FetchUserById().execute({userId: "1"})
    console.log(user)
  })
})

