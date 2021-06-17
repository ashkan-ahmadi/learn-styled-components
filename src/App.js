import { Container } from './components/Container'
import { PageTitle } from './components/PageTitle'
import { SectionTitle } from './components/SectionTitle'
import { Cards } from './components/Cards'
import { Card } from './components/Card'
import { CardTitle } from './components/CardTitle'
import { Button } from './components/Button'

const App = () => {
  return (
    <Container>
      <PageTitle>Styled Components</PageTitle>
      <SectionTitle>Cards</SectionTitle>
      <Cards>
        <Card>
          <img src="https://media.istockphoto.com/photos/abstract-red-glossy-paper-texture-background-or-backdrop-empty-paper-picture-id1148635442?b=1&k=6&m=1148635442&s=170667a&w=0&h=Vz-EzMjQVmdraFcBky1X7ES6el_BhPCNxuHMWzS7d9k=" alt="card 1" />
          <CardTitle>Card 1</CardTitle>
        </Card>
        <Card>
          <img src="https://media.istockphoto.com/photos/golden-orange-colored-blurred-background-abstract-blur-glowing-orange-picture-id1172811422?b=1&k=6&m=1172811422&s=170667a&w=0&h=s-ghr7QRMSfICb9prNbOeMARXOPP32uJP1XlUYbqyTM=" alt="card 2" />
          <CardTitle>Card 2</CardTitle>
        </Card>
        <Card>
          <img src="https://media.istockphoto.com/photos/abstract-geometricpaper-background-in-soft-pastel-pink-and-blue-picture-id857920492?b=1&k=6&m=857920492&s=170667a&w=0&h=Vx4Dcfpp0eHtNGau9LfA-MMDiKYIYdz-PllTunHm40s=" alt="card 3" />
          <CardTitle>Card 3</CardTitle>
        </Card>
        <Card>
          <img src="https://media.istockphoto.com/photos/interior-design-of-scandinavian-open-space-with-yellow-velvet-sofa-picture-id1281244693?b=1&k=6&m=1281244693&s=170667a&w=0&h=p8uuwG8RRguMcsN_YNRJdm2EFGiMgL7wBhvjaarikZY=" alt="card 4" />
          <CardTitle>Card 4</CardTitle>
        </Card>
        <Card>
          <img src="https://media.istockphoto.com/photos/paint-on-canvas-coloured-sections-with-bright-shades-picture-id1282500710?b=1&k=6&m=1282500710&s=170667a&w=0&h=6XVdviuXvccXdAcgj7oKpmmDOBmC7EQ4YKYsw35sxIw=" alt="card 5" />
          <CardTitle>Card 5</CardTitle>
        </Card>
        <Card>
          <img src="https://media.istockphoto.com/photos/traffic-light-trails-on-street-in-shanghai-picture-id603907998?b=1&k=6&m=603907998&s=170667a&w=0&h=enxHVfXyHgm19ZzbVKMVRgvZTMtrJWNS_UqNFZnO1sM=" alt="card 6" />
          <CardTitle>Card 6</CardTitle>
        </Card>
        <Card>
          <img src="https://media.istockphoto.com/photos/bouquet-of-five-flowers-of-blossoming-dandelions-of-unusual-colorful-picture-id1223668190?b=1&k=6&m=1223668190&s=170667a&w=0&h=NLl_FVyycwBgCS6z47kwatcxi7M8dVCkmhN3xdwvXQI=" alt="card 7" />
          <CardTitle>Card 7</CardTitle>
        </Card>
        <Card>
          <img src="https://media.istockphoto.com/photos/old-blank-ripped-torn-paper-crumpled-creased-colorful-posters-grunge-picture-id1223054068?b=1&k=6&m=1223054068&s=170667a&w=0&h=SPxAgmDREY6EQ4z0_Gu36wYXY9-DaMnv_6FprXYGbIM=" alt="card 8" />
          <CardTitle>Card 8</CardTitle>
        </Card>
      </Cards>

      <SectionTitle>Buttons</SectionTitle>

      <Button primary onClick={() => {
        console.info('Congratulations. It works!')
      }}>Primary</Button>

      <Button primaryOutline>Primary Outline</Button>

      <Button danger onClick={() => {
        console.error('Oops! Be careful!')
      }}>Danger</Button>

      <Button dangerOutline>Danger Outline</Button>

    </Container>
  )
}

export default App
