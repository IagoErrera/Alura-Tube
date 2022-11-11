import Header from "../components/Header";
import Timeline from '../components/Timeline';
import Menu from '../components/Menu'
import { CSSReset } from "../components/CSSReset";

import config from '../../config.json'

function HomePage(){
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage;

