const PROFILES = [
  {
      Name: "jack",
      Age: 23,
      Sex: "male",
      Profession: "software engineer",
  },
  {
      Name: "Mary",
      Age: 25,
      Sex: "female",
      Profession: "doctor"
  }
]

export function Card() {
  return (
      <>
          {PROFILES.map((profile) => {
              return (
                  <div key={profile.Name}>
                    <div>{profile.Name}</div>
                    <div>{profile.Age}</div>
                    <div>{profile.Sex}</div>
                    <div>{profile.Profession}</div>
                  </div>
              );
          })}
      </>
  )
}