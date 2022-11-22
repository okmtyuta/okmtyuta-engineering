import { FetchAllUsers } from "../FetchAllUsers"
import { FetchUserById } from "../FetchUserById"
import { AppDataSource } from '../../../../../config/data-source'

describe("Fetch User", () => {
  it("FetchAllUsers.execute", async () => {
    const users = await new FetchAllUsers(AppDataSource).execute()
    console.log(users.users)
  })

  it("FetchUserById.execute", async () => {
    const user = await new FetchUserById(AppDataSource).execute({userId: "1"})
    console.log(user)
  })
})

