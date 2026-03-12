import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("")

  const phonebook = [
    { name: "Alex Carter", phone: "(483) 920-1746" },
    { name: "Jordan Blake", phone: "(726) 194-3058" },
    { name: "Taylor Morgan", phone: "(615) 903-4827" },
    { name: "Casey Rivera", phone: "(902) 174-6385" },
    { name: "Riley Bennett", phone: "(341) 820-5967" },
    { name: "Morgan Hayes", phone: "(557) 239-4610" },
    { name: "Drew Collins", phone: "(808) 564-1293" },
    { name: "Jamie Parker", phone: "(673) 218-9045" },
    { name: "Avery Turner", phone: "(490) 732-1658" },
    { name: "Quinn Foster", phone: "(319) 845-2076" }
  ]

  const normalizePhone = (phone) => phone.replace(/\D/g, "")

  const filteredContacts = phonebook.filter(contact => {
    if (search.trim() === "") {
      return true
    }

    const normalizedSearch = search.trim().toLowerCase()
    const normalizedName = contact.name.toLowerCase()

    let isNameMatch = false
    if (normalizedName.includes(normalizedSearch)) {
      isNameMatch = true
    }

    const searchDigits = normalizePhone(search)
    const contactDigits = normalizePhone(contact.phone)

    let isPhoneMatch = false
    if (searchDigits !== "") {
      if (contactDigits.includes(searchDigits)) {
        isPhoneMatch = true
      }
    }

    return isNameMatch || isPhoneMatch
  })

  return (
    <>
      <h1>Phonebook</h1>
      <input
        placeholder="Search name or number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredContacts.map((contact, index) => (
          <div key={index}>
            {contact.name} {contact.phone}
          </div>
        ))}
      </div>
    </>
  )
}

export default App