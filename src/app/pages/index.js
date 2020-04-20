import App from '../components/App';
import Origin from '../../img/origin.svg'

const CloseSVG = () => <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><g fill="none" fill-rule="evenodd"><text fill="#636363" font-family="HiraginoSans-W4, Hiragino Sans" font-size="26" letter-spacing="-.002">
  <tspan x="738.603" y="93">目 : 美しいものが</tspan> <tspan x="802.503" y="119">わかる</tspan>
</text><circle cx="50" cy="50" r="50" fill="blue" /></g></svg>;

export default () => (
  <App>
    <p>Indexだよ</p>

    <CloseSVG />
  </App>
)
