import config from '../../../config.json'

import * as S from './styled';

function Header(){
  return (
    <S.StyledHeader>
      {/* <img src="banner" /> */}
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </S.StyledHeader>
  );
}

export default Header;