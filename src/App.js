import { getImageUrl } from './utils.js';

export function Profile ({person,size,imageId}){
  return (
  <div>
    <h1>{person.name}</h1>
    <img width={size} height={size} src={getImageUrl(imageId)} />
    <ul>
      <li> {person.name}</li>
      <li> {person.Profession}</li>
      <li> {person.Awards}</li>
      <li> {person.Discovered}</li>
      </ul>
    </div> )
  }

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Profile imageId ="szV5sdG"
          size = {70}
          person= {{
            name:"Maria Skłodowska-Curie",
            Profession:"physicist and chemist",
            Awards :"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
            Discovered :"polonium (element)"
          }}
        />
      </section>
      <section className="profile">
          <Profile imageId ="YfeOqp2"
          size = {70}
          person= {{
            name:"Katsuko Saruhashi",
            Profession:"geochemist",
            Awards :"(Miyake Prize for geochemistry, Tanaka Prize)",
            Discovered :"a method for measuring carbon dioxide in seawater"
          }}
        />
      </section>
    </div>
  );
}
